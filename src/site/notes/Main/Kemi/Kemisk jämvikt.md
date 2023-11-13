---
{"dg-publish":true,"permalink":"/main/kemi/kemisk-jaemvikt/","tags":["kemi"]}
---

Kemisk jämvikt beskriver en reaktion där inte all reaktant reagerar till produkt
$$
\mathrm{A+B}\rightleftharpoons \mathrm{C+D}\qquad\mathrm{\Delta}H
$$
Reaktionens hastighet åt höger kan betecknas $v_{1}$, den åt vänster $v_{2}$.

I jämvikt kommer $v_{1}=v_{2}$ och koncentrationen av reaktanterna och produkterna kommer inte att förändras. När reaktionen inte ligger i jämvikt finns en “nettoreaktion” åt antingen höger eller vänster, $v=v_{1}-v_{2}$

**Exempel:**  $\mathrm{A+B}\rightleftharpoons \mathrm{C+D}$
$[\mathrm{A}]=[\mathrm{B}]=1{,}00\,\mathrm{M}$
$[\mathrm{C}]=[\mathrm{D}]=0{,}00\,\mathrm{M}$
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
		height=8cm,
	    legend style={
			at={(0.5,1.1)},
			anchor=north,
			legend columns=-1
		},
	    xmin=0, xmax=70,
	    ymin=0, ymax=10,
		ymajorgrids=true,
		grid style=dashed,
		xlabel = Tid,
		ylabel = Hastighet,
		xtick = \empty,
		ytick = \empty,
		extra x ticks={40},
		extra x tick labels={Jämvikt uppnådd},
		extra x tick style={
			grid=major, 
			dashed,
		},
	]
	
	\addplot [
	    domain=0:70, 
	    samples=100, 
	    color=color_red,
	    line width=0.7mm,
	]
	{5*e^(-0.15*x) + 3};
	\addlegendentry{\(v_{1}\)}
	
	\addplot [
	    domain=0:70, 
	    samples=100, 
	    color=color_blue,
	    line width=0.7mm,
	]
	{-3*e^(-0.15*x) + 3};
	\addlegendentry{\(v_{2}\)}
	
	\end{axis}

	\begin{axis}[
		yshift=-9cm,
		width=10cm,
		height=8cm,
	    legend style={
			at={(0.5,1.12)},
			anchor=north,
			legend columns=-1
		},
	    xmin=0, xmax=70,
	    ymin=0, ymax=1.2,
		ymajorgrids=true,
		grid style=dashed,
		xlabel = Tid,
		ylabel = Koncentration,
		xtick = \empty,
		ytick = \empty,
		extra x ticks={40},
		extra x tick labels={Jämvikt uppnådd},
		extra x tick style={
			grid=major, 
			dashed,
		},
	]

	\addplot [
	    domain=0:70, 
	    samples=100, 
	    color=color_red,
	    line width=0.7mm,
	]
	{0.4*e^(-0.15*x) + 0.6};
	\addlegendentry{{[}A{]}={[}B{]}}
	
	\addplot [
	    domain=0:70, 
	    samples=100, 
	    color=color_blue,
	    line width=0.7mm,
	]
	{-0.4*e^(-0.15*x) + 0.4};
	\addlegendentry{{[}C{]}={[}D{]}}

	\end{axis}
\end{tikzpicture}
\end{document}
```

<br>

Var jämvikten ligger bestäms av [[Main/Kemi/Jämviktskonstant\|Jämviktskonstanten]]

Jämvikten/Nettoreaktionen påverkas enligt [[Main/Kemi/Le Chateliers Princip\|Le Chateliers Princip]]