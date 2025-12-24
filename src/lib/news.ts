import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsDirectory = path.join(process.cwd(), 'content/news');

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export function getAllNews(): NewsArticle[] {
  // Check if directory exists
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(newsDirectory);
  const allNews = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date ? new Date(data.date).toISOString() : '',
        author: data.author || 'NB Motorsport Team',
        category: data.category || 'Allgemein',
        image: data.image || '/27.jpg',
        content,
      };
    });

  // Sort by date descending
  return allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date ? new Date(data.date).toISOString() : '',
    author: data.author || 'NB Motorsport Team',
    category: data.category || 'Allgemein',
    image: data.image || '/27.jpg',
    content,
  };
}
