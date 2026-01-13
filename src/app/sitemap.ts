import { MetadataRoute } from 'next'
import { getAllNews, NewsArticle } from '@/lib/news'
import { getAllEvents, Event } from '@/lib/events'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nbmotorsport.de'
  
  // Static pages
  const staticPages = [
    '',
    '/chassis',
    '/lenzo-chassis',
    '/motoren',
    '/motoren-service',
    '/team',
    '/kontakt',
    '/news',
    '/events',
    '/impressum',
    '/datenschutz',
    '/agb',
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/kontakt' ? 0.9 : 0.8,
  }))

  // Dynamic news articles
  let newsEntries: MetadataRoute.Sitemap = []
  try {
    const articles = getAllNews()
    newsEntries = articles.map((article: NewsArticle) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // No news articles yet
  }

  // Dynamic events
  let eventEntries: MetadataRoute.Sitemap = []
  try {
    const events = getAllEvents()
    eventEntries = events.map((event: Event) => ({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: new Date(event.dateStart),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // No events yet
  }

  return [...staticEntries, ...newsEntries, ...eventEntries]
}
