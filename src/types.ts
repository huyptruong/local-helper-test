export type Program = {
  id: string; name: string; city: string; category: string; description: string;
  minAge: number; maxAge: number; startDate: string; endDate: string; day: string;
  startTime: string; endTime: string; location: string; price: number;
  residency?: string; officialUrl: string; sourceName: string; lastChecked: string; isSample: true;
};

export type Filters = { query: string; city: string; category: string; age: string; schedule: string; date: string; price: string };
