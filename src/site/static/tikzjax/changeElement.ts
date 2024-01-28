// Tikz
const classedTikz = Array.from(
	document.getElementsByClassName('language-tikz')
);

const presTikz: Element[] = [];

classedTikz.forEach((element) => {
	if (element.tagName == 'pre') {
		presTikz.push(element);
	}
});

presTikz.forEach((element) => {
	let codeblock = element.children[0];
	let tikz = codeblock.innerHTML;
	let script = document.createElement('script');
	script.innerHTML = tikz;
	script.className = 'language-tikz';
	element.replaceWith(script);
});

// Chemfig
const classedChem = Array.from(
	document.getElementsByClassName('language-chemfig')
);

const presChem: Element[] = [];

classedChem.forEach((element) => {
	if (element.tagName == 'pre') {
		presChem.push(element);
	}
});

presChem.forEach((element) => {
	let codeblock = element.children[0];
	let chem = codeblock.innerHTML;
	let script = document.createElement('script');
	script.innerHTML = chem;
	script.className = 'language-chemfig';
	element.replaceWith(script);
});
