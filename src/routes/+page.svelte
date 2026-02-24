<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Calendar, Mail, MapPin, Clock, ExternalLink } from 'lucide-svelte';

	const events = [
		{
			name: 'Benefit Concert',
			date: 'Sunday, March 8, 2026',
			time: '7:00 PM – 11:30 PM',
			venue: 'Fox Theater',
			location: 'Boulder, CO',
			mapUrl: 'http://maps.google.com?q=1135 13th Street Boulder, CO, 80302 United States'
		},
		{
			name: 'Party At The Peaks',
			date: 'Sunday, July 19, 2026',
			time: '1:00 PM – 4:00 PM',
			venue: 'Nederland',
			location: 'Nederland, CO',
			mapUrl: 'http://maps.google.com?q=Nederland, CO'
		},
		{
			name: 'Boogie On The Hill',
			date: 'Saturday, August 15, 2026',
			time: '6:00 PM – 8:00 PM',
			venue: 'The Hill',
			location: 'Lyons, CO',
			mapUrl: 'http://maps.google.com?q=849 Blue Mountain Trail Lyons, CO, 80540 United States'
		},
		{
			name: 'Beaver Creek Resort Saturday Series',
			date: 'Saturday, September 12, 2026',
			time: '5:00 PM – 6:30 PM',
			venue: 'Beaver Creek Resort',
			location: 'Beaver Creek, CO',
			mapUrl: 'http://maps.google.com?q=Beaver Creek, CO, 81620 United States'
		}
	];
</script>

<svelte:head>
	<title>Selasee and the Fafa Family — Feel Good World Music, Reggae & Highlife</title>
	<meta
		name="description"
		content="Selasee and the Fafa Family — Feel good world music, reggae and highlife. High energy and plenty of soul. Based in Colorado."
	/>
</svelte:head>

<Navigation />

<!-- Hero -->
<section id="home" class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<div class="absolute inset-0 bg-linear-to-br from-yellow-400 via-amber-600 to-yellow-800"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15)_0%,transparent_50%)]"
	></div>

	<div class="relative z-10 px-4 text-center">
		<div
			class="mx-auto mb-8 flex h-72 w-72 items-center justify-center rounded-full bg-white shadow-2xl"
		>
			<img
				src="/Selasee New Logo (1).webp"
				alt="Selasee and the Fafa Family Logo"
				class="h-64 w-64"
			/>
		</div>
		<h1 class="mb-4 text-5xl font-bold text-white drop-shadow-lg md:text-7xl">
			Selasee & the Fafa Family
		</h1>
		<p class="mb-2 text-xl text-white/90 drop-shadow-md md:text-2xl">
			Feel good world music, reggae and highlife.
		</p>
		<p class="mb-8 text-lg text-white/80 drop-shadow-md md:text-xl">
			High energy and plenty of soul.
		</p>
		<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
			<Button
				href="#events"
				variant="secondary"
				size="lg"
				class="rounded-full bg-white px-8 text-lg font-semibold text-green-700 shadow-lg transition-transform hover:scale-105 hover:bg-white/90"
			>
				Upcoming Shows
			</Button>
			<Button
				href="#about"
				variant="ghost"
				size="lg"
				class="rounded-full border border-white/40 px-8 text-lg font-semibold text-white transition-transform hover:scale-105 hover:bg-white/10"
			>
				About Selasee
			</Button>
		</div>

		<div class="mt-10 flex items-center justify-center gap-6">
			<a
				href="https://music.apple.com/us/artist/selasee-atiase/81142564"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Apple Music"
				class="text-white/70 transition-all hover:scale-110 hover:text-[#FA2D48]"
			>
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M8.125 4.734v10.584a4.09 4.09 0 0 0-1.89-.453c-2.14 0-3.875 1.627-3.875 3.634C2.36 20.508 4.096 22.134 6.235 22.134s3.875-1.626 3.875-3.635V9.453l7.53-2.391v7.248a4.09 4.09 0 0 0-1.89-.452c-2.14 0-3.875 1.626-3.875 3.634 0 2.008 1.736 3.634 3.875 3.634s3.875-1.626 3.875-3.634V2.266L8.125 4.734z"
					/></svg
				>
			</a>
			<a
				href="https://open.spotify.com/artist/4ZnOSQRql23IYtfFKL9kCR"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Spotify"
				class="text-white/70 transition-all hover:scale-110 hover:text-[#1DB954]"
			>
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
					/></svg
				>
			</a>
			<a
				href="https://www.youtube.com/@selaseethefafafamily817"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="YouTube"
				class="text-white/70 transition-all hover:scale-110 hover:text-[#FF0000]"
			>
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
					/></svg
				>
			</a>
			<a
				href="https://www.instagram.com/selasee_fafafamily"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram"
				class="text-white/70 transition-all hover:scale-110 hover:text-[#E4405F]"
			>
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
					/></svg
				>
			</a>
			<a
				href="https://www.facebook.com/SelaseeAndFaFaFamily/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Facebook"
				class="text-white/70 transition-all hover:scale-110 hover:text-[#1877F2]"
			>
				<svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
					/></svg
				>
			</a>
		</div>
	</div>
</section>

<!-- About -->
<section id="about" class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 md:grid-cols-2 md:items-center">
			<div>
				<h2 class="mb-2 text-4xl font-bold text-foreground">About Selasee</h2>
				<p class="mb-6 text-lg text-green-700 italic">Humility is power.</p>
				<Separator class="mb-6 w-24 bg-yellow-400" />
				<div class="space-y-4 text-lg text-muted-foreground">
					<p>
						Selasee, originally from Ghana, is a singer/songwriter who explores reggae music
						influenced by pop and the West African highlife music genres. He is the founder of
						Blackeye Watching Records LLC and leader of the band Selasee & The Fafa Family, now
						based in Colorado.
					</p>
					<p>
						Born in Accra, Ghana, Selasee grew up exposed to the colorful and energetic sounds of
						Highlife Music. With this exposure he created his own style — a unique blend of Reggae,
						West African Highlife and American Pop music, threading together English and West
						African lyrics for a bright and captivating sound.
					</p>
					<p>
						In 2005, his debut album title track "Run" won first place in the World Music genre of
						the International Song Writers Competition. The tracks "Run" and "Makuma" were featured
						in the 2006 FIFA Soccer and 2007 Cricket video games by EA Sports.
					</p>
					<p>
						In 2009, he won the Independent Music Awards "Best World Fusion Song" for "Agba Yei." In
						2014, Selasee recorded an album produced by the legendary Aston "Family Man" Barrett of
						Bob Marley & The Wailers, featuring a special appearance by Anthony B.
					</p>
					<p>
						On the touring circuit, Selasee has shared the stage with reggae legends including Steel
						Pulse, The Wailers, Third World, The Mighty Diamonds, Don Carlos, Barrington Levy, King
						Yellowman, Julian Marley, and many more.
					</p>
				</div>
			</div>
			<div class="relative">
				<img src="/Selasee Hero.webp" alt="Selasee performing live" class="rounded-lg shadow-2xl" />
				<div
					class="absolute -right-6 -bottom-6 h-full w-full rounded-lg border-4 border-yellow-400"
				></div>
			</div>
		</div>

		<div class="mt-16 text-center">
			<div class="space-y-2 text-lg font-semibold text-muted-foreground">
				<p>Selasee Atiase — Vocals, Guitar</p>
				<p>Atta Addo — Drumset</p>
				<p>Nii Okai — Percussion</p>
				<p>Alex Cazet — Tenor Saxophone</p>
				<p>Markis Glenn — Guitar</p>
				<p>Zac Flynn — Bass</p>
			</div>
		</div>
	</div>
</section>

<!-- Music -->
<section
	id="music"
	class="relative overflow-hidden bg-linear-to-br from-green-800 via-green-900 to-green-950 py-20 text-white"
>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(34,197,94,0.15)_0%,transparent_50%)]"
	></div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="relative">
				<img
					src="/Jazz Is Dead 5.4.25 (3).webp"
					alt="Selasee performing at Jazz Is Dead"
					class="rounded-lg shadow-2xl"
				/>
				<div
					class="absolute -bottom-4 -left-4 h-full w-full rounded-lg border-4 border-yellow-400/30"
				></div>
			</div>

			<div>
				<h2 class="mb-2 text-4xl font-bold">The Sound</h2>
				<p class="mb-8 text-lg text-green-300">Listen wherever you stream your music</p>

				<div class="space-y-6 text-lg leading-relaxed text-green-100">
					<p>
						A unique blend of <span class="font-semibold text-yellow-400">Reggae</span>,
						<span class="font-semibold text-yellow-400">West African Highlife</span>, and
						<span class="font-semibold text-yellow-400">American Pop</span> — threading together English
						and West African lyrics for a bright and captivating sound.
					</p>

					<Separator class="w-16 bg-yellow-400/50" />

					<p>
						Winner of the International Song Writers Competition in World Music. Independent Music
						Awards "Best World Fusion Song." Featured in EA Sports FIFA and Cricket games.
					</p>
					<p class="text-base text-green-300">
						Albums: <span class="italic">Run</span> · <span class="italic">African Gate</span> ·
						<span class="italic">Time for Peace</span>
						<span class="text-green-400"
							>(produced by Aston "Family Man" Barrett of Bob Marley & The Wailers)</span
						>
					</p>

					<p class="pt-2 text-2xl font-light text-yellow-300 italic">"Be the love."</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Events -->
<section id="events" class="bg-background py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold text-foreground">Upcoming Shows</h2>
			<p class="text-xl text-muted-foreground">Join us for an unforgettable live experience</p>
		</div>

		<div class="space-y-4">
			{#each events as event (event.name)}
				<Card.Root class="border-l-4 border-l-green-600 transition-shadow hover:shadow-lg">
					<Card.Content class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div class="flex-1">
							<h3 class="mb-2 text-xl font-bold text-foreground">{event.name}</h3>
							<div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
								<div class="flex items-center gap-2">
									<Calendar class="h-4 w-4" />
									<span>{event.date}</span>
								</div>
								<div class="flex items-center gap-2">
									<Clock class="h-4 w-4" />
									<span>{event.time}</span>
								</div>
								<div class="flex items-center gap-2">
									<MapPin class="h-4 w-4" />
									<span>{event.venue}, {event.location}</span>
								</div>
							</div>
						</div>
						<Button href={event.mapUrl} variant="outline" size="sm" class="gap-2">
							<MapPin class="h-4 w-4" />
							Map
							<ExternalLink class="h-3 w-3" />
						</Button>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- Gallery -->
<section id="gallery" class="bg-linear-to-br from-yellow-50 to-green-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold text-foreground">Gallery</h2>
			<p class="text-xl text-muted-foreground">Moments from our journey</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Card.Root class="group overflow-hidden p-0">
				<div class="relative">
					<img
						src="/Jazz Is Dead 5.4.25 (7).webp"
						alt="Jazz Is Dead, Denver"
						class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="absolute bottom-4 left-4 text-lg font-semibold text-white">
							Jazz Is Dead — Denver, CO
						</p>
					</div>
				</div>
			</Card.Root>

			<Card.Root class="group overflow-hidden p-0">
				<div class="relative">
					<img
						src="/Atta Addo.webp"
						alt="Atta Addo on drums"
						class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="absolute bottom-4 left-4 text-lg font-semibold text-white">
							Atta Addo — Drumset
						</p>
					</div>
				</div>
			</Card.Root>

			<Card.Root class="group overflow-hidden p-0">
				<div class="relative">
					<img
						src="/Alex Cazet.webp"
						alt="Alex Cazet on tenor saxophone"
						class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="absolute bottom-4 left-4 text-lg font-semibold text-white">
							Alex Cazet — Tenor Saxophone
						</p>
					</div>
				</div>
			</Card.Root>

			<Card.Root class="group overflow-hidden p-0">
				<div class="relative">
					<img
						src="/Nii Okai.webp"
						alt="Nii Okai on percussion"
						class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="absolute bottom-4 left-4 text-lg font-semibold text-white">
							Nii Okai — Percussion
						</p>
					</div>
				</div>
			</Card.Root>

			<Card.Root class="group overflow-hidden p-0">
				<div class="relative">
					<img
						src="/Zac Flynn.webp"
						alt="Zac Flynn on bass"
						class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="absolute bottom-4 left-4 text-lg font-semibold text-white">
							Zac Flynn — Bass
						</p>
					</div>
				</div>
			</Card.Root>

			<Card.Root class="group overflow-hidden p-0">
				<div class="relative">
					<img
						src="/Markis Glenn.webp"
						alt="Markis Glenn on guitar"
						class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="absolute bottom-4 left-4 text-lg font-semibold text-white">
							Markis Glenn — Guitar
						</p>
					</div>
				</div>
			</Card.Root>
		</div>
	</div>
</section>

<!-- Contact -->
<section id="contact" class="bg-gray-900 py-20 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold">Get in Touch</h2>
			<p class="text-xl text-gray-300">Booking inquiries & more</p>
		</div>

		<div class="mx-auto max-w-md text-center">
			<div
				class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600"
			>
				<Mail class="h-8 w-8" />
			</div>
			<h3 class="mb-2 text-xl font-semibold">Booking Inquiries</h3>
			<a
				href="mailto:selaseemusic@gmail.com"
				class="text-lg text-gray-300 transition-colors hover:text-yellow-400"
			>
				selaseemusic@gmail.com
			</a>
		</div>

		<Separator class="my-8 bg-gray-700" />

		<div class="text-center">
			<p class="text-gray-400">
				&copy; {new Date().getFullYear()} Zac Flynn. All rights reserved.
			</p>
		</div>
	</div>
</section>
