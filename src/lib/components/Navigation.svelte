<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu, X } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Music', href: '#music' },
		{ name: 'Events', href: '#events' },
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
		? 'bg-white/95 shadow-md backdrop-blur-sm'
		: 'bg-transparent'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<div class="flex items-center gap-3">
				<div
					class="flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300 {scrolled
						? 'bg-black'
						: 'bg-white'}"
				>
					<img
						src="/Selasee New Logo (1).webp"
						alt="Selasee and the Fafa Family"
						class="h-12 w-12"
					/>
				</div>
				<span
					class="text-xl font-bold transition-colors duration-300 {scrolled
						? 'text-gray-900'
						: 'text-white'}">Selasee & the Fafa Family</span
				>
			</div>

			<div class="hidden md:block">
				<div class="flex items-center gap-1">
					{#each navItems as item (item.name)}
						<a
							href={item.href}
							onclick={(e) => scrollToSection(e, item.href)}
							class="rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300 {scrolled
								? 'text-gray-700 hover:bg-yellow-400 hover:text-gray-900'
								: 'text-white/80 hover:bg-white/10 hover:text-white'}"
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>

			<div class="md:hidden">
				<Button
					variant="ghost"
					size="icon"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<X class="h-6 w-6 {scrolled ? 'text-gray-900' : 'text-white'}" />
					{:else}
						<Menu class="h-6 w-6 {scrolled ? 'text-gray-900' : 'text-white'}" />
					{/if}
				</Button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="border-t border-gray-200 bg-white md:hidden">
			<div class="space-y-1 px-4 pt-2 pb-3">
				{#each navItems as item (item.name)}
					<a
						href={item.href}
						onclick={(e) => scrollToSection(e, item.href)}
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-yellow-400 hover:text-gray-900"
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
