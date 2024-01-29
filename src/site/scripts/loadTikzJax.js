function loadTikZJax(doc) {
	const s = document.createElement('script');
	s.id = 'tikzjax';
	s.type = 'text/javascript';
	s.innerText = tikzjax_default;
	doc.body.appendChild(s);
	doc.addEventListener('tikzjax-load-finished', this.postProcessSvg);
}

window.onload = () => {
	loadTikZJax(document);
};
