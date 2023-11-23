---
{"dg-publish":true,"permalink":"/main/kemi/buffertloesning/","tags":["kemi","jämvikter","syra-bas"]}
---

En buffertlösning är en vattenlösning som består av en svag [[Syror\|syra]] och dess korresponderande [[Baser\|bas]].

$$
\mathrm{\underset{ syra }{ HA }} \rightleftharpoons \mathrm{H^+ + \underset{ bas }{ A^- }}
$$

Denna lösning håller [[pH\|pH]]-värdet konstant om fler H<sup>+</sup> eller OH<sup>-</sup>-joner tillsätts, eftersom [[Main/Kemi/Kemisk jämvikt\|jämvikten]] kommer att behålla samma [[Main/Kemi/Jämviktskonstant\|jämviktskonstant]].

När H<sup>+</sup> eller OH<sup>-</sup> tillsätts kommer basen respektive syran att protolyseras
$$
\begin{align*}
\mathrm{HA + OH^-} &\rightarrow \mathrm{A^- + H_{2}O} \\
\mathrm{A^- + H_{3}O^+} &\rightarrow \mathrm{HA + H_{2}O}
\end{align*}
$$

Om för mycket tillsätts kommer allt ha protolyserats och bufferten kommer inte längre att hålla, och då kommer pH att förändras igen.

När $\mathrm{[HA]=[A^-]}$ i en buffert är [[Main/Kemi/Syra-bas konstant\|$\mathrm{p}K_\mathrm{a}=\mathrm{pH}$]]. Annars kommer pH av bufferten att ligga omkring $\mathrm{p}K_\mathrm{a}$

### Exempel: Ättikssyra $\mathrm{CH_{3}COOH}$

$\mathrm{[CH_{3}COOH]=[CH_{3}COO^-]=1\,M}$ från början. Eftersom $\mathrm{p}K_\mathrm{a} = 4{,}74$ för ättikssyra, kommer 

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
	    legend style={
			at={(0.5,1.07)},
			anchor=north,
			legend columns=-1
		},
	    xmin=0, xmax=70,
	    ymin=0, ymax=14,
	    xtick=\empty,
		xlabel = Tillsatt $\mathrm{OH^-}$,
		ylabel = pH,
		extra x ticks={20},
		extra x tick labels={HA tar slut},
		extra x tick style={
			grid=major, 
			dashed,
		},
	]
	
	\addplot [
	    domain=0:70, 
	    samples=200, 
	    color=color_red,
	    line width=0.7mm,
	]
	{
		(x<20) * 4.74 +
		and(x>=20, x<40) * (-0.4 * ln(-0.05*(x-40)) + 4.74) +
		(x>=40) * (0.4 * ln(0.05*(x-40)) + 13)
	};
	
	\end{axis}
\end{tikzpicture}
\end{document}
```



