import { RateLimiterDrizzle } from 'rate-limiter-flexible';
import { db } from '$lib/server/db';
import { rateLimiterFlexible } from '$lib/server/db/schema';

let rateLimiter: RateLimiterDrizzle | null = null;

const MAX_POINTS = 10;

export function getRateLimiter(): RateLimiterDrizzle {
	if (rateLimiter) {
		return rateLimiter;
	}

	rateLimiter = new RateLimiterDrizzle({
		storeClient: db,
		schema: rateLimiterFlexible,
		keyPrefix: 'cert_form',
		points: MAX_POINTS,
		duration: 15 * 60, // cada 15 minutos
		blockDuration: 15 * 60 // bloquear por 15 minutos después del límite
	});

	return rateLimiter;
}

/**
 * Checkea ratelimit por IP
 * @throws RateLimiterRes si el ratelimit es pasado
 */
export async function checkRateLimit(ip: string): Promise<void> {
	const limiter = getRateLimiter();
	await limiter.consume(ip);
}

/**
 * Retorna puntos restantes por IP
 */
export async function getRemainingPoints(ip: string): Promise<number> {
	const limiter = getRateLimiter();
	try {
		const res = await limiter.get(ip);
		if (!res) return MAX_POINTS; // si no existe, tiene todos los puntos
		return Math.max(0, MAX_POINTS - res.consumedPoints);
	} catch {
		return MAX_POINTS;
	}
}
