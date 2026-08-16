import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, MapPin, Search, SlidersHorizontal, Sparkles, Users, X } from 'lucide-react';
import { programs } from './data/programs';
import { filterPrograms, initialFilters } from './lib/filterPrograms';
import type { Filters, Program } from './types';

const cities = [...new Set(programs.map((p) => p.city))];
const categories = [...new Set(programs.map((p) => p.category))];
const days = [...new Set(programs.map((p) => p.day))];

function FilterBar({ filters, setFilters }: { filters: Filters; setFilters: (f: Filters) => void }) {
  const update = (key: keyof Filters, value: string) => setFilters({ ...filters, [key]: value });
  return <section className="filters" aria-label="Program filters">
    <div className="filter-heading"><span><SlidersHorizontal size={18}/> Refine your search</span><button className="text-button" onClick={() => setFilters(initialFilters)}>Clear all</button></div>
    <div className="filter-grid">
      <label>City<select value={filters.city} onChange={(e) => update('city', e.target.value)}><option value="">All cities</option>{cities.map((v) => <option key={v}>{v}</option>)}</select></label>
      <label>Category<select value={filters.category} onChange={(e) => update('category', e.target.value)}><option value="">All activities</option>{categories.map((v) => <option key={v}>{v}</option>)}</select></label>
      <label>Child's age<input type="number" min="1" max="18" placeholder="Any age" value={filters.age} onChange={(e) => update('age', e.target.value)}/></label>
      <label>Day<select value={filters.schedule} onChange={(e) => update('schedule', e.target.value)}><option value="">Any day</option>{days.map((v) => <option key={v}>{v}</option>)}</select></label>
      <label>Active on date<input aria-label="Active on date" type="date" value={filters.date} onChange={(e) => update('date', e.target.value)}/></label>
      <label>Price<select value={filters.price} onChange={(e) => update('price', e.target.value)}><option value="">Any price</option><option value="free">Free</option><option value="under50">Under $50</option><option value="50to80">$50–$80</option><option value="over80">Over $80</option></select></label>
    </div>
  </section>;
}

function Card({ program, onOpen }: { program: Program; onOpen: () => void }) {
  return <article className="card"><div className={`card-art ${program.category.toLowerCase()}`}><span>{program.category}</span><Sparkles aria-hidden="true"/></div><div className="card-body">
    <div className="eyebrow"><span>{program.city}</span><span>Sample listing</span></div><h2>{program.name}</h2><p className="description">{program.description}</p>
    <dl className="facts"><div><Users/><dt>Ages</dt><dd>{program.minAge}–{program.maxAge}</dd></div><div><CalendarDays/><dt>When</dt><dd>{program.day}s</dd></div><div><Clock3/><dt>Time</dt><dd>{program.startTime}</dd></div><div><MapPin/><dt>Where</dt><dd>{program.location}</dd></div></dl>
    <div className="card-footer"><div><small>Sample price</small><strong>${program.price}</strong></div><button onClick={onOpen}>View details <ArrowUpRight size={17}/></button></div>
  </div></article>;
}

function Detail({ program, onBack }: { program: Program; onBack: () => void }) {
  return <main className="detail"><button className="back" onClick={onBack}><ArrowLeft/> Back to results</button><div className="detail-layout"><article>
    <div className="eyebrow"><span>{program.city}</span><span>{program.category}</span></div><h1>{program.name}</h1><p className="lead">{program.description}</p>
    <div className="detail-facts"><div><Users/><span><small>Ages</small>{program.minAge}–{program.maxAge} years</span></div><div><CalendarDays/><span><small>Dates</small>{new Date(program.startDate+'T12:00').toLocaleDateString('en-US',{month:'short',day:'numeric'})} – {new Date(program.endDate+'T12:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</span></div><div><Clock3/><span><small>Schedule</small>{program.day}s, {program.startTime}–{program.endTime}</span></div><div><MapPin/><span><small>Location</small>{program.location}, {program.city}</span></div></div>
    {program.residency && <div className="residency"><strong>Residency note</strong><p>{program.residency}</p></div>}
  </article><aside className="verify"><span className="sample-pill">Sample data</span><small>Listed sample price</small><div className="price">${program.price}</div><p>Details may have changed. Confirm dates, eligibility, fees, and availability on the provider's official website.</p><a href={program.officialUrl} target="_blank" rel="noreferrer">Verify with {program.city} <ArrowUpRight/></a><hr/><dl><dt>Source</dt><dd>{program.sourceName}</dd><dt>Last checked</dt><dd>{program.lastChecked}</dd></dl></aside></div></main>;
}

export default function App() {
  const [filters, setFilters] = useState(initialFilters); const [selected, setSelected] = useState<Program | null>(null); const [mobileFilters, setMobileFilters] = useState(false);
  const results = useMemo(() => filterPrograms(programs, filters), [filters]);
  if (selected) return <><Header/><Detail program={selected} onBack={() => setSelected(null)}/><Footer/></>;
  const active = Object.entries(filters).filter(([,v]) => v);
  return <><Header/><main><section className="hero"><div><div className="kicker">Explore beyond your neighborhood</div><h1>More ways to <em>play, learn,</em><br/> and grow in OC.</h1><p>Compare public recreation programs from five Orange County cities—all in one friendly place.</p><div className="search"><Search/><label className="sr-only" htmlFor="search">Search programs</label><input id="search" placeholder="Try “swim,” “art,” or “basketball”" value={filters.query} onChange={(e) => setFilters({...filters, query:e.target.value})}/><button onClick={() => document.getElementById('results')?.scrollIntoView()}>Search</button></div></div><div className="sun" aria-hidden="true"><span>25</span><small>sample programs<br/>to explore</small></div></section>
    <div className="notice"><strong>Prototype preview</strong><span>This site uses sample data—not live availability. Always verify program details and register on the official city website.</span></div>
    <section className="content"><button className="mobile-filter" onClick={() => setMobileFilters(!mobileFilters)}><SlidersHorizontal/> Filters {active.length > 0 && <b>{active.length}</b>}</button><div className={mobileFilters ? 'filter-wrap open' : 'filter-wrap'}><FilterBar filters={filters} setFilters={setFilters}/></div>
      <div id="results" className="results-head"><div><span className="kicker">Find your next activity</span><h2>{results.length} programs to explore</h2></div><p>Showing sample programs across Orange County</p></div>
      {active.length > 0 && <div className="chips" aria-label="Active filters">{active.map(([key,value]) => <button key={key} onClick={() => setFilters({...filters,[key]:''})}>{key === 'query' ? `“${value}”` : value}<X/></button>)}</div>}
      {results.length ? <div className="cards">{results.map((p) => <Card key={p.id} program={p} onOpen={() => setSelected(p)}/>)}</div> : <div className="empty"><Search/><h2>No programs match just yet</h2><p>Try removing a filter, widening the age or price range, or searching for another activity.</p><button onClick={() => setFilters(initialFilters)}>Clear all filters</button></div>}
    </section></main><Footer/></>;
}

function Header(){return <header><a className="brand" href="/" aria-label="OC Rec Finder home"><span>OC</span><b>Rec Finder</b></a><nav aria-label="Main navigation"><a href="#results">Browse programs</a><a href="#about">About this prototype</a></nav><span className="sample-badge">Sample data</span></header>}
function Footer(){return <footer id="about"><div className="brand inverse"><span>OC</span><b>Rec Finder</b></div><p>A discovery prototype for Orange County families. Listings are illustrative and are not live, complete, or automatically synchronized.</p><p>Registration and verification happen on each official provider website.</p></footer>}
