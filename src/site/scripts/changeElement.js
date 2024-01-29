function changeElement(lang) {
	let classed = Array.from(document.getElementsByClassName(`language-${lang}`));

	let pres = [];

	classed.forEach((element) => {
		if (element.tagName == 'PRE') {
			pres.push(element);
		}
	});

	pres.forEach((element) => {
		let codeblock = element.children[0];
		let tikz = codeblock.innerHTML;
		tikz = tidyTikzSource(tikz);
		let div = document.createElement('div');
		div.className = `block-language-${lang}`;
		let script = document.createElement('script');
		script.innerHTML = tikz;
		script.className = `language-${lang}`;
		script.type = 'text/tikz';
		div.appendChild(script);
		element.replaceWith(div);
	});

	console.log(`ran changeElement on ${pres}`);
}

function tidyTikzSource(tikzSource) {
	const remove = '&nbsp;';
	tikzSource = tikzSource.replaceAll(remove, '');
	let lines = tikzSource.split('\n');
	lines = lines.map((line) => line.trim());
	lines = lines.filter((line) => line);
	return lines.join('\n');
}
