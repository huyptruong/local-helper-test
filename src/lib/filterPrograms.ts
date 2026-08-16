import type { Filters, Program } from '../types';

export const initialFilters: Filters = { query: '', city: '', category: '', age: '', schedule: '', date: '', price: '' };

export function filterPrograms(programs: Program[], filters: Filters) {
  const query = filters.query.trim().toLowerCase();
  return programs.filter((program) => {
    const searchable = `${program.name} ${program.description} ${program.category} ${program.city}`.toLowerCase();
    const age = Number(filters.age);
    const withinDate = !filters.date || (filters.date >= program.startDate && filters.date <= program.endDate);
    const withinPrice = !filters.price || (filters.price === 'free' ? program.price === 0 : filters.price === 'under50' ? program.price < 50 : filters.price === '50to80' ? program.price >= 50 && program.price <= 80 : program.price > 80);
    return (!query || searchable.includes(query)) && (!filters.city || program.city === filters.city) && (!filters.category || program.category === filters.category) && (!filters.age || (age >= program.minAge && age <= program.maxAge)) && (!filters.schedule || program.day === filters.schedule) && withinDate && withinPrice;
  });
}
