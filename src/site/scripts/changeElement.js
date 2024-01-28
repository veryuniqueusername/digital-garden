function changeElement() {
	// Tikz
	let classedTikz = Array.from(
		document.getElementsByClassName('language-tikz')
	);

	let presTikz = [];

	classedTikz.forEach((element) => {
		if (element.tagName == 'PRE') {
			presTikz.push(element);
		}
	});

	presTikz.forEach((element) => {
		let codeblock = element.children[0];
		let tikz = codeblock.innerHTML;
		let script = document.createElement('script');
		script.innerHTML = tikz;
		script.className = 'language-tikz';
		script.type = 'text/tikz';
		element.replaceWith(script);
	});

	// Chemfig
	let classedChem = Array.from(
		document.getElementsByClassName('language-chemfig')
	);

	let presChem = [];

	classedChem.forEach((element) => {
		if (element.tagName == 'PRE') {
			presChem.push(element);
		}
	});

	presChem.forEach((element) => {
		let codeblock = element.children[0];
		let chem = codeblock.innerHTML;
		let script = document.createElement('script');
		script.innerHTML = chem;
		script.className = 'language-chemfig';
		script.type = 'text/tikz';
		element.replaceWith(script);
	});
}

changeElement();
