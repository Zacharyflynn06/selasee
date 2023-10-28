<script>
	import { gradientText } from '../../classes';
	import SelaseeLogo from '../graphics/SelaseeLogo.svelte';
</script>

<img class="fixed h-screen w-full inset-0 object-cover" src="/photos/homepage.jpg" alt="" />

<div
	class="font-raleway fixed inset-0 h-screen w-full bg-gradient-to-b from-primary-gold/60 to-primary-red/60 via-primary-green/40"
>
	<div class="flex flex-col justify-between md:justify-center items-center h-full space-y-8 p-5">
		<div class="flex font-bold items-end space-x-5">
			<div class="h-auto w-24">
				<SelaseeLogo />
			</div>

			<div class="text-left font-semibold {gradientText}">
				<div class="text-6xl md:text-7xl font-bold leading-tight">Selasee</div>
				<div class="text-lg md:text-xl leading-tight">And The Fafa Family</div>
			</div>
		</div>
		<nav
			class="flex flex-col text-primary-cream md:flex-row space-y-5 md:space-y-0 md:space-x-5 text-center text-5xl"
		>
			<a class="hover:scale-105 ease-in-out duration-100" href="/events">Events</a>
			<a class="hover:scale-105 ease-in-out duration-100" href="/about">About</a>
			<a class="hover:scale-105 ease-in-out duration-100" href="/contact">Contact</a>
			<a class="hover:scale-105 ease-in-out duration-100" href="/music">Music</a>
			<a class="hover:scale-105 ease-in-out duration-100" href="/videos">Videos</a>
		</nav>
		<div class="text-primary-cream max-w-[600px] text-2xl text-center">
			Feel Good World music, Reggae and Highlife with Ultra-High Energy and Plenty of Soul.
		</div>
	</div>
</div>
