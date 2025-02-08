<script>
	import { onMount } from 'svelte';
	import reviewsCode from '$lib/bookmarklets/reviews.js?raw';
	import qrCode from '$lib/bookmarklets/qr.js?raw';
	import { codeToHtml } from 'shiki';

	let isDarkMode = false;
	let copiedCode = '';
	let isCopied = false;

	let copy = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...$$props}><path fill="currentColor" d="M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM5.085 3H4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-.585A1.5 1.5 0 0 1 9.5 4h-3a1.5 1.5 0 0 1-1.415-1"/></svg>`;
	let copied = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...$$props}><path fill="currentColor" d="M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v2.707a5.5 5.5 0 0 0-1-.185V3.5a.5.5 0 0 0-.5-.5h-.585A1.5 1.5 0 0 1 9.5 4h-3a1.5 1.5 0 0 1-1.415-1H4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h2.1q.276.538.657 1H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm9.5 9.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L10.5 12.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/></svg>`;
	let darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...$$props}><path fill="currentColor" d="m11.616 12.324l2.53 2.53a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L6.38 7.087c-.86 1.93-2.748 2.586-3.97 2.808a.5.5 0 0 0-.36.71a6 6 0 0 0 9.566 1.718M13.456 8c0 .97-.23 1.886-.638 2.696L6.916 4.795a8.8 8.8 0 0 0-.145-2.2a.5.5 0 0 1 .475-.591Q7.35 2 7.456 2a6 6 0 0 1 6 6"/></svg>`;
	let lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...$$props}><path fill="currentColor" d="M7.456 2a6 6 0 1 1-5.406 8.605a.5.5 0 0 1 .36-.71c1.276-.231 3.278-.937 4.078-3.07c.563-1.5.512-3.015.283-4.23a.5.5 0 0 1 .475-.591Q7.35 2 7.456 2"/></svg>`;

	let bookmarklets = [];

	// const bookmarklets = [
	//   { label: 'Reviews Bookmarklet', code: reviewsCode },
	//   { label: 'QR Bookmarklet', code: qrCode }
	// ];

	async function generateHtml() {
		bookmarklets = [
			{ label: 'Reviews Bookmarklet', code: reviewsCode },
			{ label: 'QR Bookmarklet', code: qrCode }
		];

		for (let i = 0; i < bookmarklets.length; i++) {
			const html = await codeToHtml(bookmarklets[i].code, {
				lang: 'javascript',
				theme: 'vitesse-dark'
			});
			bookmarklets[i].html = html;
		}
	}

	onMount(generateHtml);

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	async function copyCode(code) {
		await navigator.clipboard.writeText(code);
		copiedCode = code;
		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 2000);
	}

	onMount(() => {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (prefersDark) {
			isDarkMode = true;
			document.documentElement.classList.add('dark');
		}
	});
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<header class="mb-8 flex items-center justify-between">
		<h1 class="text-3xl font-bold">Code Block App</h1>
		<button on:click={toggleTheme} class="rounded-md bg-secondary p-2 text-secondary-foreground">
			{#if isDarkMode}
				{@html lightIcon}
			{:else}
				{@html darkIcon}
			{/if}
		</button>
	</header>
	<main>
		{#each bookmarklets as bookmarklet}
			<div class="mb-4">
				<h2 class="font-teko mb-2 text-xl font-semibold">{bookmarklet.label}</h2>
				<div class="relative">
					<pre
						id="code-block"
						class="overflow-x-auto rounded-lg bg-muted p-4 text-muted-foreground"><code
							>{@html bookmarklet.html}</code
						></pre>
					<button
						on:click={() => copyCode(bookmarklet.code)}
						class="absolute right-2 top-2 rounded-md bg-primary p-2 text-primary-foreground"
						aria-label="Copy Code"
					>
						{#if isCopied && copiedCode === bookmarklet.code}
							{@html copied}
						{:else}
							{@html copy}
						{/if}
					</button>
				</div>
			</div>
		{/each}
	</main>
</div>

<style>
	:global(:root) {
		--background: 0 0% 100%;
		--foreground: 222.2 47.4% 11.2%;
		--muted: 210 40% 96.1%;
		--muted-foreground: 215.4 16.3% 46.9%;
		--popover: 0 0% 100%;
		--popover-foreground: 222.2 47.4% 11.2%;
		--border: 214.3 31.8% 91.4%;
		--input: 214.3 31.8% 91.4%;
		--card: 0 0% 100%;
		--card-foreground: 222.2 47.4% 11.2%;
		--primary: 222.2 47.4% 11.2%;
		--primary-foreground: 210 40% 98%;
		--secondary: 210 40% 96.1%;
		--secondary-foreground: 222.2 47.4% 11.2%;
		--accent: 210 40% 96.1%;
		--accent-foreground: 222.2 47.4% 11.2%;
		--destructive: 0 100% 50%;
		--destructive-foreground: 210 40% 98%;
		--ring: 215 20.2% 65.1%;
		--radius: 0.5rem;
	}

	:global(.dark) {
		--background: 224 71% 4%;
		--foreground: 213 31% 91%;
		--muted: 223 47% 11%;
		--muted-foreground: 215.4 16.3% 56.9%;
		--accent: 216 34% 17%;
		--accent-foreground: 210 40% 98%;
		--popover: 224 71% 4%;
		--popover-foreground: 215 20.2% 65.1%;
		--border: 216 34% 17%;
		--input: 216 34% 17%;
		--card: 224 71% 4%;
		--card-foreground: 213 31% 91%;
		--primary: 210 40% 98%;
		--primary-foreground: 222.2 47.4% 1.2%;
		--secondary: 222.2 47.4% 11.2%;
		--secondary-foreground: 210 40% 98%;
		--destructive: 0 63% 31%;
		--destructive-foreground: 210 40% 98%;
		--ring: 216 34% 17%;
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
		@apply bg-background text-foreground;
	}
</style>
