function invertSVGcolors(svg) {
	let inner = svg.innerHTML;
	inner = inner
		.replaceAll(/("#000"|"black")/g, `"var(--text-normal)"`)
		.replaceAll(/("#fff"|"white")/g, `"var(--background-primary)"`);
	svg.innerHTML = inner;
}
