export function GET({ site: origin }: { site?: URL }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const map = origin ? `\nSitemap: ${new URL(`${base}/sitemap.xml`, origin).href}\n` : '\n';
  return new Response(`User-agent: *\nAllow: /\n${map}`, { headers: { 'Content-Type': 'text/plain' } });
}
