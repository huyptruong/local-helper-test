import { describe, expect, it } from 'vitest';
import { programs } from '../data/programs';
import { filterPrograms, initialFilters } from './filterPrograms';
describe('filterPrograms', () => {
  it('searches names and descriptions', () => expect(filterPrograms(programs, {...initialFilters, query:'basketball'})).toHaveLength(5));
  it('combines city, category, age, day, date and price filters', () => expect(filterPrograms(programs, {...initialFilters, city:'Irvine', category:'Sports', age:'10', schedule:'Tuesday', date:'2026-09-20', price:'50to80'})).toHaveLength(1));
  it('rejects ages outside the program range', () => expect(filterPrograms(programs, {...initialFilters, category:'Aquatics', age:'2'})).toHaveLength(0));
  it('filters each price band', () => { expect(filterPrograms(programs, {...initialFilters, price:'under50'}).every(p => p.price < 50)).toBe(true); expect(filterPrograms(programs, {...initialFilters, price:'over80'}).every(p => p.price > 80)).toBe(true); });
});
