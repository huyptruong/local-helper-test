import type { Program } from '../types';

const cities = ['Irvine', 'Santa Ana', 'Costa Mesa', 'Newport Beach', 'Huntington Beach'];
const templates = [
  ['Little Picassos','Arts','Paint, collage, and create in a playful studio made for young artists.',5,8,'Monday','3:30 PM','4:30 PM',55],
  ['Junior Ocean Explorers','Nature','Discover local habitats through hands-on science and outdoor exploration.',7,11,'Saturday','9:00 AM','11:00 AM',42],
  ['Beginner Swim Academy','Aquatics','Build water confidence and learn foundational swim strokes in a supportive group.',6,10,'Wednesday','4:00 PM','4:45 PM',68],
  ['Youth Basketball Skills','Sports','Practice dribbling, passing, teamwork, and game fundamentals with city coaches.',8,13,'Tuesday','5:00 PM','6:15 PM',75],
  ['Creative Coding Lab','STEM','Make interactive stories and simple games while learning coding fundamentals.',9,14,'Thursday','4:30 PM','6:00 PM',95]
];
const locations: Record<string,string[]> = {
  'Irvine':['Great Park Community Center','William Woollett Jr. Aquatics Center'],
  'Santa Ana':['Jerome Recreation Center','Salgado Community Center'],
  'Costa Mesa':['Downtown Recreation Center','Balearic Community Center'],
  'Newport Beach':['Marina Park Community Center','OASIS Senior Center'],
  'Huntington Beach':['City Gym & Pool','Murdy Community Center']
};
const urls: Record<string,string> = {
  'Irvine':'https://secure.yourirvine.org/CA/city-of-irvine/catalog',
  'Santa Ana':'https://www.santa-ana.org/recreation-classes/',
  'Costa Mesa':'https://www.costamesaca.gov/government/departments-and-divisions/parks-and-community-services',
  'Newport Beach':'https://www.newportbeachca.gov/government/departments/recreation-senior-services',
  'Huntington Beach':'https://www.huntingtonbeachca.gov/departments/parks_recreation/'
};

export const programs: Program[] = cities.flatMap((city, cityIndex) => templates.map((t, index) => ({
  id: `${city.toLowerCase().replaceAll(' ', '-')}-${index + 1}`,
  name: `${t[0]}${cityIndex % 2 && index === 2 ? ' Plus' : ''}`,
  city, category: t[1] as string, description: t[2] as string,
  minAge: (t[3] as number) + (cityIndex === 3 ? 1 : 0), maxAge: t[4] as number,
  startDate: `2026-0${9 + (index % 2)}-${String(8 + cityIndex).padStart(2,'0')}`,
  endDate: `2026-${index % 2 ? '11' : '10'}-${String(17 + cityIndex).padStart(2,'0')}`,
  day: t[5] as string, startTime: t[6] as string, endTime: t[7] as string,
  location: locations[city][index % 2], price: (t[8] as number) + cityIndex * 4,
  residency: index % 2 === 0 ? `Listed fee is for ${city} residents; nonresident fees may differ.` : undefined,
  officialUrl: urls[city], sourceName: `${city} recreation website`, lastChecked: '2026-08-16', isSample: true
})));
