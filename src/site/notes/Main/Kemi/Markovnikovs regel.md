---
{"dg-publish":true,"permalink":"/main/kemi/markovnikovs-regel/","tags":["kemi","organisk-kemi"]}
---

Markovnikovs regel är en regel inom [[Main/Kemi/Organisk kemi\|organisk kemi]] som följs vid de flesta [[Main/Kemi/Additionsreaktioner\|additionsreaktioner]].

Regeln lyder ungefär såhär:
> När $\ce{ H+ }$ attackerar en dubbelbindning kommer vätet att sätta sig på den kolatom med flest väten bundna till sig.

Anledningen till detta är att den [[Karbokatjon\|karbokatjon]] som skapas kommer att vara mest stabil, då kolet med den positiva [[Formell laddning\|formella laddningen]] i [[Intermediär\|intermediären]] kommer att vara bundet med fler andra kolatomer, detta leder till att de närliggande kolatomerna kan nästan dela med sig av sina elektroner så att laddningen blir mer jämnt fördelat i jonen.

I diagrammet nedan visas två möjliga reaktioner från en viss reaktant. Eftersom reaktion B skapar mer stabila molekyler än reaktion A är aktiveringsenergin för reaktion B lägre, detta leder till att fler produkt B skapas.

```tikz
\usetikzlibrary{arrows.meta, decorations.pathreplacing}

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

\begin{tikzpicture}[>=Straight Barb,scale=1]
\draw[thick, <->] (0,9)node[below left=2pt]{$E$} -- (0,0) -- (11,0);
\coordinate (A) at (0,3);
\coordinate (B) at (2,3);
\coordinate (C) at (4.8, 7); \draw[color_red] (C)++(0,0.25) node {reaktion A};
\coordinate (D) at (6.3,6.3);
\coordinate (E) at (7.4,6.6);
\coordinate (F) at (9.5,1.5);
\draw[thick, color_red, looseness=.7] (A) -- (B) to[out=0, in=180] (C) to[out=0, in=180] (D) to[out=0, in=180] (E) to[out=0, in=180] (F) --++ (1.5,0);
\coordinate (A1) at (0,3);
\coordinate (B1) at (2,3);
\coordinate (C1) at (4.8, 6); \draw[color_blue] (C1)++(0.1,-0.8) node {reaktion B};
\coordinate (D1) at (6.3,5.3);
\coordinate (E1) at (7.4,5.6);
\coordinate (F1) at (9.5,0.5);
\draw[thick, color_blue, looseness=.7] (A1) -- (B1) to[out=0, in=180] (C1) to[out=0, in=180] (D1) to[out=0, in=180] (E1) to[out=0, in=180] (F1) --++ (1.5,0);
\draw[dashed] (B) --++ (9,0);
\end{tikzpicture}

\end{document}
```
