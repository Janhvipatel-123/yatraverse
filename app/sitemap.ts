import { MetadataRoute } from 'next';
import { destinations } from '../lib/destinations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yatraverse.com';

  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/experiences',
    '/ai-guide',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic destination routes
  const destinationRoutes = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...destinationRoutes];
}
