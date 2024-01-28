function invertSVGcolors(lang) {
	let divs = Array.from(
		document.getElementsByClassName(`block-language-${lang}`)
	);

	let svgs = [];
	divs.forEach((element) => {
		svgs.push(element.children[0]);
	});

	svgs.forEach((element) => {
		let inner = element.innerHTML;
		inner = inner
			.replaceAll(/("#000"|"black")/g, `"var(--text-normal)"`)
			.replaceAll(/("#fff"|"white")/g, `"var(--background-primary)"`);
		element.innerHTML = inner;
	});
}
