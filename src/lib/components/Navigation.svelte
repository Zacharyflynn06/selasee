<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu, X, Sun, Moon } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let dark = $state(typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));
	let userOverride = $state(typeof localStorage !== 'undefined' && localStorage.getItem('theme') !== null);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'Events', href: '#events' },
		{ name: 'About', href: '#about' },
		{ name: 'Music', href: '#music' },
		{ name: 'Gallery', href: '#gallery' },
		{ name: 'Contact', href: '#contact' }
	];

	function scrollToSection(e: MouseEvent, href: string) {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			mobileMenuOpen = false;
		}
	}

	function toggleDark() {
		dark = !dark;
		userOverride = true;
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}

	$effect(() => {
		document.documentElement.classList.toggle('dark', dark);
	});

	$effect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = (e: MediaQueryListEvent) => {
			if (!userOverride) dark = e.matches;
		};
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	});

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 z-50 w-full transition-all duration-300 {scrolled
		? 'bg-white/95 shadow-md backdrop-blur-sm dark:bg-gray-900/95'
		: 'bg-transparent'}"
>
	<div
		class="mx-auto max-w-6xl px-4 transition-opacity duration-300 sm:px-6 lg:px-8 {scrolled
			? ''
			: 'md:pointer-events-none md:opacity-0'}"
	>
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center gap-3">
				<div class="flex h-14 w-14 items-center justify-center rounded-full {scrolled ? 'bg-black dark:bg-white' : 'bg-white'}">
					<img src="/selasee-fafa-family-logo.webp" alt="Selasee and the Fafa Family" class="h-12 w-12" />
				</div>
				<span class="text-xl font-bold {scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}">Selasee</span>
			</div>

			<!-- Desktop: nav items flush against dark mode toggle -->
			<div class="hidden items-center md:flex">
				{#each navItems as item (item.name)}
					<a
						href={item.href}
						onclick={(e) => scrollToSection(e, item.href)}
						class="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-ghana-gold hover:text-black dark:text-gray-200 dark:hover:bg-ghana-gold dark:hover:text-black"
					>
						{item.name}
					</a>
				{/each}
				<Button
					variant="ghost"
					size="icon"
					onclick={toggleDark}
					aria-label="Toggle dark mode"
					class="ml-1 h-10 w-10 text-gray-700 hover:bg-ghana-gold hover:text-black dark:text-gray-200 dark:hover:bg-ghana-gold dark:hover:text-black"
				>
					{#if dark}
						<Sun class="h-6 w-6" />
					{:else}
						<Moon class="h-6 w-6" />
					{/if}
				</Button>
			</div>

			<!-- Mobile: dark toggle + hamburger -->
			<div class="flex items-center md:hidden">
				<Button
					variant="ghost"
					size="icon"
					onclick={toggleDark}
					aria-label="Toggle dark mode"
					class="h-10 w-10 text-white hover:bg-white/10"
				>
					{#if dark}
						<Sun class="h-6 w-6" />
					{:else}
						<Moon class="h-6 w-6" />
					{/if}
				</Button>
				<Button
					variant="ghost"
					size="icon"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle menu"
					class="h-10 w-10 text-white hover:bg-white/10"
				>
					{#if mobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</Button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 md:hidden">
			<div class="space-y-1 px-4 pt-2 pb-3">
				{#each navItems as item (item.name)}
					<a
						href={item.href}
						onclick={(e) => scrollToSection(e, item.href)}
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-ghana-gold hover:text-black dark:text-gray-200 dark:hover:bg-ghana-gold dark:hover:text-black"
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
