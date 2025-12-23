export interface Event {
  id: string;
  weekday: string;
  day: string;
  month: string;
  title: string;
  badge: string;
  location: string;
  description: string;
}

export const events: Event[] = [
  {
    id: 'sueddeutsche-feb-2025',
    weekday: 'Sa',
    day: '24',
    month: 'Feb 2025',
    title: 'Süddeutsche Meisterschaft',
    badge: 'KZ',
    location: 'Ampfing',
    description: 'Auftakt zur Süddeutschen Kart Meisterschaft in Ampfing.',
  },
  {
    id: 'dkm-mar-2025',
    weekday: 'Sa',
    day: '09',
    month: 'Mär 2025',
    title: 'Deutsche Meisterschaft',
    badge: 'DKM',
    location: 'Wackersdorf',
    description: 'Erstes Rennen der Deutschen Kart Meisterschaft auf dem Pro-Kart Raceland.',
  },
  {
    id: 'euro-apr-2025',
    weekday: 'So',
    day: '03',
    month: 'Apr 2025',
    title: 'X30 Junior Europameisterschaft',
    badge: 'EURO',
    location: 'Genk',
    description: 'Internationaler Wettbewerb in der X30 Junior Klasse auf dem Karting Genk.',
  },
  {
    id: 'akm-apr-2025',
    weekday: 'Sa',
    day: '26',
    month: 'Apr 2025',
    title: 'ADAC Kart Masters',
    badge: 'AKM',
    location: 'Kerpen',
    description: 'ADAC Kart Masters Runde auf der legendären Michael Schumacher Kartbahn.',
  },
  {
    id: 'sueddeutsche-mai-2025',
    weekday: 'So',
    day: '18',
    month: 'Mai 2025',
    title: 'Süddeutsche Meisterschaft',
    badge: 'KZ',
    location: 'Wackersdorf',
    description: 'Zweites Rennen der Süddeutschen Kart Meisterschaft.',
  },
  {
    id: 'dkm-jun-2025',
    weekday: 'Sa',
    day: '07',
    month: 'Jun 2025',
    title: 'Deutsche Meisterschaft',
    badge: 'DKM',
    location: 'Oschersleben',
    description: 'DKM Runde auf der Motorsport Arena Oschersleben.',
  },
];

export function getAllEvents(): Event[] {
  return events;
}

export function getUpcomingEvents(limit?: number): Event[] {
  const upcoming = events; // In production, filter by date
  return limit ? upcoming.slice(0, limit) : upcoming;
}
