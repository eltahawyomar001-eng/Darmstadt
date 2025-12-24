import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const chassisDirectory = path.join(process.cwd(), 'content/chassis');

export interface Chassis {
  slug: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
  price: string;
  order: number;
}

export function getAllChassis(): Chassis[] {
  // Check if directory exists
  if (!fs.existsSync(chassisDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(chassisDirectory);
  const allChassis = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(chassisDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        image: data.image || '/4.png',
        specs: data.specs || [],
        price: data.price || '',
        order: data.order || 99,
      };
    });

  // Sort by order
  return allChassis.sort((a, b) => a.order - b.order);
}

export function getChassisBySlug(slug: string): Chassis | undefined {
  const fullPath = path.join(chassisDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    image: data.image || '/4.png',
    specs: data.specs || [],
    price: data.price || '',
    order: data.order || 99,
  };
}
