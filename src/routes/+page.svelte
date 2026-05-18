<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import SectionDivider from '$lib/components/SectionDivider.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Calendar, Mail, MapPin, Clock, ExternalLink, Ticket } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
	let formStatus = $state<FormStatus>('idle');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formStatus = 'submitting';
		const form = e.target as HTMLFormElement;
		try {
			const res = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(
					new FormData(form) as unknown as Record<string, string>
				).toString()
			});
			formStatus = res.ok ? 'success' : 'error';
			if (res.ok) form.reset();
		} catch {
			formStatus = 'error';
		}
	}
</script>

<svelte:head>
	<title>Selasee — Feel Good World Music, Reggae & Highlife</title>
	<meta
		name="description"
		content="Selasee — Feel good world music, reggae and highlife. High energy and plenty of soul. Based in Colorado."
	/>
</svelte:head>

<Navigation />

<!-- Hero -->
<section
	id="home"
	class="relative flex min-h-screen items-center justify-center overflow-hidden text-white dark:text-black"
>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_center,#CE1126_0%,#FCD116_100%)]"
	></div>

	<div class="relative z-10 px-4 pt-24 pb-12 text-center">
		<div
			class="mx-auto mb-8 flex h-72 w-72 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-black"
		>
			<img
				src="/selasee-fafa-family-logo.webp"
				alt="Selasee and the Fafa Family Logo"
				class="h-64 w-64"
			/>
		</div>
		<h1 class="mb-4 text-5xl font-bold md:text-7xl">Selasee</h1>
		<p class="mb-2 text-xl md:text-2xl">Feel good world music, reggae and highlife.</p>
		<p class="mb-8 text-lg md:text-xl">High energy and plenty of soul.</p>
		<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
			<Button
				href="#events"
				variant="secondary"
				size="lg"
				class="rounded-full px-8 text-lg font-semibold shadow-lg transition-transform hover:scale-105 hover:bg-white/90 dark:bg-black dark:text-white"
			>
				<span class="">Upcoming Shows</span>
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
				<svg class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor"
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
				<svg class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor"
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
				<svg class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor"
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
				<svg class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor"
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
				<svg class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
					/></svg
				>
			</a>
		</div>
	</div>
</section>

<!-- Events -->
<section id="events" class="bg-background py-20">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<p class="mb-2 text-sm font-bold tracking-widest text-ghana-red uppercase">Shows</p>
			<h2 class="text-5xl font-bold text-foreground">Upcoming Shows</h2>
		</div>

		{#if data.events.length === 0}
			<p class="text-lg text-muted-foreground">
				No upcoming shows at the moment — check back soon!
			</p>
		{:else}
			<div class="space-y-4">
				{#each data.events as event, i (event.name)}
					{@const cards = [
						{ bg: 'bg-ghana-red', text: 'text-white', dayColor: 'text-ghana-red' },
						{ bg: 'bg-ghana-gold', text: 'text-white', dayColor: 'text-ghana-gold' },
						{ bg: 'bg-ghana-green', text: 'text-white', dayColor: 'text-ghana-green' }
					]}
					{@const card = cards[i % cards.length]}
					<div
						class="relative flex items-center gap-5 overflow-hidden rounded-2xl {card.bg} p-5 shadow-sm transition-shadow hover:shadow-md"
					>
						<!-- Date box -->
						<div
							class="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-white shadow-sm"
						>
							<span class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
								>{event.monthAbbr}</span
							>
							<span class="text-4xl leading-none font-bold {card.dayColor}">{event.day}</span>
						</div>

						<!-- Details -->
						<div class="min-w-0 flex-1">
							<h3 class="mb-2 text-xl font-bold {card.text}">{event.name}</h3>
							<div class="flex flex-wrap gap-2">
								<span
									class="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm"
								>
									<MapPin class="h-3.5 w-3.5 {card.dayColor}" />
									<span class="{card.bg} bg-clip-text text-transparent">{event.location}</span>
								</span>
								<span
									class="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm"
								>
									<Clock class="h-3.5 w-3.5 {card.dayColor}" />
									<span class="{card.bg} bg-clip-text text-transparent">{event.time}</span>
								</span>
							</div>
						</div>

						<!-- Actions -->
						<div class="flex shrink-0 flex-col gap-2 sm:flex-row">
							{#if event.ticketUrl}
								<a
									href={event.ticketUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold shadow-sm transition-shadow hover:shadow-md"
								>
									<Ticket class="h-4 w-4 {card.dayColor}" />
									<span class="{card.bg} bg-clip-text text-transparent">Tickets</span>
								</a>
							{/if}
							<a
								href={event.mapUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold shadow-sm transition-shadow hover:shadow-md"
							>
								<MapPin class="h-4 w-4 {card.dayColor}" />
								<span class="{card.bg} bg-clip-text text-transparent">Map</span>
							</a>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<SectionDivider />

<!-- About -->
<section id="about" class="bg-background py-20">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 md:grid-cols-2 md:items-center">
			<div class="space-y-2">
				<h2 class="mb-2 text-4xl font-bold text-foreground">About Selasee</h2>
				<p class="mb-6 text-lg text-ghana-green italic">Humility is power.</p>
				<SectionDivider />
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
				<div
					class="absolute -right-6 -bottom-6 h-full w-full rounded-lg p-0.75"
					style="background: linear-gradient(135deg, #CE1126, #FCD116, #006B3F)"
				>
					<div class="h-full w-full rounded-md bg-background"></div>
				</div>
				<img
					src="/Selasee Hero.webp"
					alt="Selasee performing live"
					class="relative rounded-lg shadow-2xl dark:ring-1 dark:ring-white/20"
				/>
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

<SectionDivider />

<!-- Music -->
<section id="music" class="bg-white py-20 text-gray-900 dark:bg-black dark:text-white">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="relative">
				<div
					class="absolute -bottom-4 -left-4 h-full w-full rounded-lg p-0.75"
					style="background: linear-gradient(135deg, #CE1126, #FCD116, #006B3F)"
				>
					<div class="h-full w-full rounded-md bg-white dark:bg-black"></div>
				</div>
				<img
					src="/Full Band.webp"
					alt="Selasee and the Fafa Family performing live"
					class="relative rounded-lg shadow-2xl dark:ring-1 dark:ring-white/20"
				/>
			</div>

			<div>
				<h2 class="mb-2 text-4xl font-bold">The Sound</h2>
				<p class="mb-8 text-lg text-gray-500 dark:text-white/60">
					Listen wherever you stream your music
				</p>

				<div class="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-white/80">
					<p>
						A unique blend of <strong>Reggae</strong>, <strong>West African Highlife</strong>, and
						<strong>American Pop</strong> — threading together English and West African lyrics for a bright
						and captivating sound.
					</p>

					<Separator class="w-16 bg-ghana-gold/50" />

					<p>
						Winner of the International Song Writers Competition in World Music. Independent Music
						Awards "Best World Fusion Song." Featured in EA Sports FIFA and Cricket games.
					</p>
					<p class="text-base">
						Albums: <span class="italic">Run</span> · <span class="italic">African Gate</span> ·
						<span class="italic">Time for Peace</span>
						(produced by Aston "Family Man" Barrett of Bob Marley & The Wailers)
					</p>

					<p class="pt-2 text-2xl font-light text-ghana-gold italic">"Be the love."</p>
				</div>
			</div>
		</div>
	</div>
</section>

<SectionDivider />

<!-- Gallery -->
<section id="gallery" class="bg-background py-20">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold text-foreground">Gallery</h2>
			<p class="text-xl text-muted-foreground">Moments from our journey</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Card.Root class="group overflow-hidden p-0">
				<div class="relative">
					<img
						src="/Selasee Atiase.webp"
						alt="Selasee Atiase on vocals and guitar"
						class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="absolute bottom-4 left-4 text-lg font-semibold text-white">
							Selasee Atiase — Vocals, Guitar
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

<SectionDivider />

<!-- Contact -->
<section id="contact" class="bg-black py-20 text-white">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold">Get in Touch</h2>
			<p class="text-xl text-white/60">Booking inquiries & more</p>
		</div>

		<Card.Root
			class="mx-auto max-w-xl border-ghana-gold/40 bg-zinc-900 shadow-xl shadow-ghana-gold/10"
		>
			<Card.Content class="pt-6">
				{#if formStatus === 'success'}
					<div class="py-6 text-center">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ghana-green"
						>
							<Mail class="h-8 w-8" />
						</div>
						<h3 class="mb-2 text-2xl font-bold">Message Sent!</h3>
						<p class="text-white/60">Thanks for reaching out — we'll get back to you soon.</p>
						<button
							onclick={() => (formStatus = 'idle')}
							class="mt-6 text-sm text-ghana-green underline underline-offset-2 hover:text-ghana-green/80 dark:text-ghana-gold dark:hover:text-ghana-gold/80"
						>
							Send another message
						</button>
					</div>
				{:else}
					<form
						name="contact"
						data-netlify="true"
						netlify-honeypot="bot-field"
						onsubmit={handleSubmit}
						class="space-y-6"
					>
						<input type="hidden" name="form-name" value="contact" />
						<p hidden><input name="bot-field" /></p>

						<div class="grid gap-6 sm:grid-cols-2">
							<div class="space-y-2">
								<Label for="name" class="text-white/80">Name</Label>
								<Input
									id="name"
									name="name"
									type="text"
									required
									placeholder="Your name"
									class="border-white/20 bg-white/10 text-white placeholder-white/40 focus-visible:ring-ghana-gold"
								/>
							</div>
							<div class="space-y-2">
								<Label for="email" class="text-white/80">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									required
									placeholder="your@email.com"
									class="border-white/20 bg-white/10 text-white placeholder-white/40 focus-visible:ring-ghana-gold"
								/>
							</div>
						</div>

						<div class="space-y-2">
							<Label for="message" class="text-white/80">Message</Label>
							<Textarea
								id="message"
								name="message"
								rows={5}
								required
								placeholder="Tell us about your event, booking inquiry, or just say hello..."
								class="resize-none border-white/20 bg-white/10 text-white placeholder-white/40 focus-visible:ring-ghana-gold"
							/>
						</div>

						{#if formStatus === 'error'}
							<p class="text-sm text-red-400">
								Something went wrong — please try again or email us directly.
							</p>
						{/if}

						<div class="flex justify-end">
							<Button
								type="submit"
								disabled={formStatus === 'submitting'}
								class="rounded-full bg-ghana-gold px-8 font-semibold text-black hover:bg-ghana-gold/80 disabled:opacity-60"
							>
								{formStatus === 'submitting' ? 'Sending…' : 'Send Message'}
							</Button>
						</div>
					</form>
				{/if}
			</Card.Content>
		</Card.Root>

		<Separator class="my-12 bg-ghana-gold/40" />

		<div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
			<!-- Left: logo + social links -->
			<div>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black">
					<img src="/selasee-fafa-family-logo.webp" alt="Selasee" class="h-10 w-10" />
				</div>
				<div
					class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ghana-gold/70"
				>
					<a
						href="https://www.instagram.com/selasee_fafafamily"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors hover:text-ghana-gold">Instagram</a
					>
					<a
						href="https://www.facebook.com/SelaseeAndFaFaFamily/"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors hover:text-ghana-gold">Facebook</a
					>
					<a
						href="https://www.youtube.com/@selaseethefafafamily817"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors hover:text-ghana-gold">YouTube</a
					>
					<a
						href="https://open.spotify.com/artist/4ZnOSQRql23IYtfFKL9kCR"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors hover:text-ghana-gold">Spotify</a
					>
					<a
						href="https://music.apple.com/us/artist/selasee-atiase/81142564"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors hover:text-ghana-gold">Apple Music</a
					>
					<a
						href="mailto:selaseemusic@gmail.com"
						class="flex items-center gap-1.5 transition-colors hover:text-ghana-gold"
					>
						<Mail class="h-3.5 w-3.5" />Email
					</a>
				</div>
			</div>

			<!-- Right: tagline + zfdev -->
			<div class="text-right">
				<p class="mb-1 text-sm text-ghana-gold">Feel good world music, reggae and highlife.</p>
				<p class="text-base text-ghana-gold">
					Website by
					<a
						href="https://zacflynn.dev/"
						target="_blank"
						rel="noopener noreferrer"
						class="zfdev bg-clip-text text-lg font-extrabold tracking-wide text-transparent transition-[filter,letter-spacing] duration-300 hover:tracking-wider"
					>
						zfdev
					</a>.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.zfdev {
		background-image: linear-gradient(
			110deg,
			#fcd116 0%,
			#ce1126 12.5%,
			#ce1126 25%,
			#006b3f 37.5%,
			#006b3f 50%,
			#fcd116 62.5%,
			#ce1126 75%,
			#006b3f 87.5%,
			#fcd116 93.75%,
			#fcd116 100%
		);
		background-size: 200% 100%;
		animation: zfdev-flow 8s linear infinite;
	}

	@keyframes zfdev-flow {
		from {
			background-position: 0% 50%;
		}
		to {
			background-position: 200% 50%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.zfdev {
			animation: none;
		}
	}
</style>
