import type { RequestEvent } from '@sveltejs/kit';

/**
 * Verifica si una IP es local/privada o dev
 */
export function isDevIP(ip: string): boolean {
	return (
		ip === '127.0.0.1' ||
		ip === '::1' ||
		ip.startsWith('192.168.') ||
		ip.startsWith('10.') ||
		ip.startsWith('172.')
	);
}

export async function getCountryFromIP(event: RequestEvent): Promise<string | null> {
	// Previene casos en el un proxy esta en frente de la pagina
	const ip =
		event.request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? event.getClientAddress();

	try {
		// ip-api.com es gratis, 45 requests por minuto
		const response = await fetch(`http://ip-api.com/json/${ip}`);

		if (!response.ok) {
			console.error('Error en API de geolocalizacion:', response.status);
			return null;
		}

		const data = await response.json();
		console.log(data);

		if (data.status === 'success') {
			return data.countryCode;
		}

		return null;
	} catch (error) {
		console.error('Error al obtener geolocalizacion:', error);
		return null;
	}
}

export function isFromParaguay(countryCode: string | null): boolean {
	return countryCode === 'PY';
}
