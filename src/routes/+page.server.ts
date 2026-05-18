import { BANDS_IN_TOWN_API_KEY, BANDS_IN_TOWN_ARTIST_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

interface BandsInTownOffer {
	type: string;
	url: string;
	status: string;
}

interface BandsInTownVenue {
	name: string;
	city: string;
	region: string;
	street_address: string;
}

interface BandsInTownEvent {
	id: string;
	title: string;
	datetime: string;
	starts_at: string;
	ends_at: string;
	venue: BandsInTownVenue;
	url: string;
	offers: BandsInTownOffer[];
}

function formatTime(iso: string): string {
	const timePart = iso.split('T')[1];
	const [hour, minute] = timePart.split(':').map(Number);
	const h = hour % 12 || 12;
	const ampm = hour < 12 ? 'AM' : 'PM';
	const m = minute.toString().padStart(2, '0');
	return `${h}:${m} ${ampm}`;
}

function formatDate(iso: string): { date: string; monthAbbr: string; day: number } {
	const [datePart] = iso.split('T');
	const [year, month, day] = datePart.split('-').map(Number);

	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthNames = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	const monthAbbrs = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

	const weekday = weekdays[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
	return {
		date: `${weekday}, ${monthNames[month - 1]} ${day}, ${year}`,
		monthAbbr: monthAbbrs[month - 1],
		day
	};
}

export const prerender = true;

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(
		`https://rest.bandsintown.com/artists/id_${BANDS_IN_TOWN_ARTIST_KEY}/events?app_id=${BANDS_IN_TOWN_API_KEY}`
	);

	if (!res.ok) return { events: [] };

	const raw: BandsInTownEvent[] = await res.json();

	if (!Array.isArray(raw)) return { events: [] };

	const events = raw.map((event) => {
		const { name, city, region, street_address } = event.venue;

		const { date, monthAbbr, day } = formatDate(event.datetime);
		const startTime = formatTime(event.datetime);
		const time = event.ends_at ? `${startTime} – ${formatTime(event.ends_at)}` : startTime;

		const mapQuery = street_address
			? `${street_address}, ${city}, ${region}`
			: `${name}, ${city}, ${region}`;
		const mapUrl = `https://maps.google.com?q=${encodeURIComponent(mapQuery)}`;

		const ticketOffer = event.offers.find((o) => o.type === 'Tickets' && o.status === 'available');

		return {
			name: event.title || name,
			date,
			monthAbbr,
			day,
			time,
			venue: name,
			location: `${city}, ${region}`,
			mapUrl,
			ticketUrl: ticketOffer?.url ?? null
		};
	});

	return { events };
};
