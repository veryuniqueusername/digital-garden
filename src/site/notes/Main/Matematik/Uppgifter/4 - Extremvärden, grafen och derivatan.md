---
{"dg-publish":true,"permalink":"/main/matematik/uppgifter/4-extremvaerden-grafen-och-derivatan/","tags":["matematik"]}
---

## 4130

> [!question] Uppgift
> Låt $f(x)=x^3+ax^2+x$ där $a$ är en konstant
> För vilka värden av $a$ har $f$
> a) två lokala extrempunkter
> b) en terasspunkt

a)
$$
\begin{align*}
f(x) &= x^3 + ax^2 + x \\
f'(x) &= 3x^2 + 2ax + 1
\end{align*}
$$
För att ha två extrempunkter måste $f'(x) = 0$ vid två olika $x$, alltså att den har två olika lösningar
$$
\begin{align*}
f'(x) &= 0 \\
3x^2 + 2ax + 1 &= 0 \\
x^2 + \frac{2a}{3}x + \frac{1}{3} &= 0 \\
x &= -\frac{a}{3} \pm \sqrt{ \frac{a^2}{9} - \frac{1}{3}}
\end{align*}
$$
För att det ska finnas två lösningar måste diskriminanten (det under rottecknet) vara $>0$

$$
\begin{align*}
\frac{a^2}{9} - \frac{1}{3} &> 0 \\
\frac{a^2}{9} &> \frac{1}{3} \\
a^2 &> 3 \\
a &> \sqrt{ 3 } \mathrm{\ eller\ } a < -\sqrt{ 3 }
\end{align*}
$$
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

%skip 0°
\definecolor{color_red}{RGB}{238, 20, 1}
\definecolor{color_orange}{RGB}{223, 70, 0}
\definecolor{color_yellow}{RGB}{183, 112, 0}
% skip 120°
\definecolor{color_green}{RGB}{0, 163, 19}
\definecolor{color_teal}{RGB}{0, 168, 134}
\definecolor{color_blue}{RGB}{0, 158, 206}
% skip 240°
\definecolor{color_indigo}{RGB}{77, 105, 255}
\definecolor{color_violet}{RGB}{154, 76, 246}
\definecolor{color_pink}{RGB}{201, 48, 194}

\begin{document}
\begin{tikzpicture}
	\begin{axis}[
		width=10cm,
		height=10cm,
	    legend pos=north west,
	    xmin=-5, xmax=5,
	    ymin=-10, ymax=10,
		xlabel = \(x\),
		ylabel = \(f(x)\),
	]
	
	\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_red,
	    line width=0.3mm,
	]
	{x^3 + -3 * x^2 + x};
	\addlegendentry{\(a = -3\)}

		\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_orange,
	    line width=0.3mm,
	]
	{x^3 + -2 * x^2 + x};
	\addlegendentry{\(a = -2\)}
	
	\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_yellow,
	    line width=0.3mm,
	]
	{x^3 + -1 * x^2 + x};
	\addlegendentry{\(a = -1\)}

	\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_green,
	    line width=0.3mm,
	]
	{x^3 + 0 * x^2 + x};
	\addlegendentry{\(a = 0\)}

		\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_teal,
	    line width=0.3mm,
	]
	{x^3 + 1 * x^2 + x};
	\addlegendentry{\(a = 1\)}
	
	\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_blue,
	    line width=0.3mm,
	]
	{x^3 + 2 * x^2 + x};
	\addlegendentry{\(a = 2\)}

	\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_indigo,
	    line width=0.3mm,
	]
	{x^3 + 3 * x^2 + x};
	\addlegendentry{\(a = 3\)}
	
	\end{axis}
\end{tikzpicture}
\end{document}
```


b)
För att ha en terasspunkt måste $f'(x) = 0$ vid endast ett $x$, alltså att den har exakt en lösning. För att det ska finnas endast en lösning måste diskriminanten vara $= 0$

$$
\begin{align*}
\frac{a^2}{9} - \frac{1}{3} &= 0 \\
\frac{a^2}{9} &= \frac{1}{3} \\
a^2 &= 3 \\
a &= \pm \sqrt{ 3 }
\end{align*}
$$
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

%skip 0°
\definecolor{color_red}{RGB}{238, 20, 1}
\definecolor{color_orange}{RGB}{223, 70, 0}
\definecolor{color_yellow}{RGB}{183, 112, 0}
% skip 120°
\definecolor{color_green}{RGB}{0, 163, 19}
\definecolor{color_teal}{RGB}{0, 168, 134}
\definecolor{color_blue}{RGB}{0, 158, 206}
% skip 240°
\definecolor{color_indigo}{RGB}{77, 105, 255}
\definecolor{color_violet}{RGB}{154, 76, 246}
\definecolor{color_pink}{RGB}{201, 48, 194}

\begin{document}
\begin{tikzpicture}
	\begin{axis}[
		width=10cm,
		height=10cm,
	    legend pos=north west,
	    xmin=-5, xmax=5,
	    ymin=-10, ymax=10,
		xlabel = \(x\),
		ylabel = \(f(x)\),
	]
	
	\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_orange,
	    line width=0.3mm,
	]
	{x^3 + -sqrt(3) * x^2 + x};
	\addlegendentry{\(a = -\sqrt{3}\)}

		\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_blue,
	    line width=0.3mm,
	]
	{x^3 + sqrt(3) * x^2 + x};
	\addlegendentry{\(a = \sqrt{3}\)}
	
	\end{axis}
\end{tikzpicture}
\end{document}
```
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

%skip 0°
\definecolor{color_red}{RGB}{238, 20, 1}
\definecolor{color_orange}{RGB}{223, 70, 0}
\definecolor{color_yellow}{RGB}{183, 112, 0}
% skip 120°
\definecolor{color_green}{RGB}{0, 163, 19}
\definecolor{color_teal}{RGB}{0, 168, 134}
\definecolor{color_blue}{RGB}{0, 158, 206}
% skip 240°
\definecolor{color_indigo}{RGB}{77, 105, 255}
\definecolor{color_violet}{RGB}{154, 76, 246}
\definecolor{color_pink}{RGB}{201, 48, 194}

\begin{document}
\begin{tikzpicture}
	\begin{axis}[
		width=10cm,
		height=10cm,
	    legend pos=north west,
	    axis x line=center,
	    axis y line=center,
	    xmin=-5, xmax=5,
	    ymin=-10, ymax=10,
		xlabel = \(x\),
		ylabel = \(f'(x)\),
	]
	
	\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_orange,
	    line width=0.3mm,
	]
	{3*x^2 + -sqrt(3)*2 * x + 1};
	\addlegendentry{\(a = -\sqrt{3}\)}

		\addplot [
	    domain=-5:5, 
	    samples=100, 
	    color=color_blue,
	    line width=0.3mm,
	]
	{3*x^2 + sqrt(3)*2 * x + 1};
	\addlegendentry{\(a = \sqrt{3}\)}
	
	\end{axis}
\end{tikzpicture}
\end{document}
```

> [!note] Svar
> a) $a > \sqrt{ 3 } \mathrm{\ eller\ } a < -\sqrt{ 3 }$
> b) $a = \pm\sqrt{ 3 }$