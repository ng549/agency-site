import site from '../data/site.json';
export function GET({ site: origin }: { site?: URL }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const abs = (p: string) => (origin ? new URL(p, origin).href : p);
  const urls = [
    ...site.pages.filter((p: any) => p.placement !== 'hidden').map((p: any) => abs(`${base}/${p.slug ? p.slug + '/' : ''}`)),
    ...(site.posts || []).map((p: any) => abs(`${base}/blog/${p.slug}/`)),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
