import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const motorenDirectory = path.join(process.cwd(), 'content/motoren');

export interface Motor {
  slug: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
  price: string;
  order: number;
}

export function getAllMotoren(): Motor[] {
  // Check if directory exists
  if (!fs.existsSync(motorenDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(motorenDirectory);
  const allMotoren = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(motorenDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        image: data.image || '/10.png',
        specs: data.specs || [],
        price: data.price || '',
        order: data.order || 99,
      };
    });

  // Sort by order
  return allMotoren.sort((a, b) => a.order - b.order);
}

export function getMotorBySlug(slug: string): Motor | undefined {
  const fullPath = path.join(motorenDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    image: data.image || '/10.png',
    specs: data.specs || [],
    price: data.price || '',
    order: data.order || 99,
  };
}
