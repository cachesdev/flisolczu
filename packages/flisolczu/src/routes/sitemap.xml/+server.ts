import type { RequestHandler } from './$types';

const SITE_URL = 'https://flisolczu.org';

const ROUTES = ['/'];

export const prerender = true;

export const GET: RequestHandler = () => {
	const urls = ROUTES.map((path) => {
		const cleanPath = path === '/' ? '' : path;
		return `<url><loc>${SITE_URL}${cleanPath}</loc></url>`;
	}).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=0, s-maxage=3600'
		}
	});
};
