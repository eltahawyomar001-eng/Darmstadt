import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const eventsDirectory = path.join(process.cwd(), 'content/events');

export interface Event {
  slug: string;
  title: string;
  dateStart: string;
  dateEnd?: string;
  location: string;
  series: string;
  status: 'upcoming' | 'completed';
  description: string;
  // Formatted fields for display
  weekday: string;
  day: string;
  month: string;
  badge: string;
}

const weekdays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

function getBadge(series: string): string {
  const badges: Record<string, string> = {
    'ADAC Kart Masters': 'AKM',
    'ADAC Kart Cup': 'AKC',
    'DKM': 'DKM',
    'Rotax Max': 'ROTAX',
    'IAME X30': 'EURO',
    'Training': 'TRN',
    'Sonstige': 'KZ',
  };
  return badges[series] || 'KZ';
}

export function getAllEvents(): Event[] {
  // Check if directory exists
  if (!fs.existsSync(eventsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(eventsDirectory);
  const allEvents = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      const date = new Date(data.dateStart);

      return {
        slug,
        title: data.title || '',
        dateStart: data.dateStart ? new Date(data.dateStart).toISOString() : '',
        dateEnd: data.dateEnd ? new Date(data.dateEnd).toISOString() : undefined,
        location: data.location || '',
        series: data.series || 'Sonstige',
        status: data.status || 'upcoming',
        description: data.description || '',
        // Formatted fields
        weekday: weekdays[date.getDay()],
        day: String(date.getDate()).padStart(2, '0'),
        month: `${months[date.getMonth()]} ${date.getFullYear()}`,
        badge: getBadge(data.series || 'Sonstige'),
      };
    });

  // Sort by date ascending
  return allEvents.sort((a, b) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime());
}

export function getUpcomingEvents(limit?: number): Event[] {
  const now = new Date();
  const upcoming = getAllEvents().filter(
    (event) => new Date(event.dateStart) >= now || event.status === 'upcoming'
  );
  return limit ? upcoming.slice(0, limit) : upcoming;
}
