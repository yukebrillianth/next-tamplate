import type { MetadataRoute } from 'next';

import { siteConfig } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic routes here
  // const posts = await getPosts();
  // const postRoutes = posts.map((post) => ({
  //   url: `${siteConfig.url}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...routes];
}
