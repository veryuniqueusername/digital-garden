---
{"dg-publish":true,"permalink":"/main/kemi/det-organiska-stamtraedet/"}
---

```tikz
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

\usetikzlibrary{arrows,decorations.pathmorphing,backgrounds,positioning,fit,matrix,shapes.geometric}

\tikzstyle{arrow} = [thick,->,>=stealth]

\tikzstyle{box} = [draw,rounded corners=0.1cm, minimum width=2.5cm, minimum height=0.6cm]

\begin{document}

\begin{tikzpicture}[node distance=1.5cm]

\node[box] (an) {Alkan};
\node[box, above=of an] (halo) {Halogenalkan};
\node[box, left=of halo] (en) {Alken};
\node[box, right=of halo] (amin) {Alkylamin};
\node[box, above=of halo] (ol) {Alkohol};
\node[box, above=of ol] (al) {Aldehyd};
\node[box, left=of al] (ester) {Ester};
\node[box, above right=0cm and 1.5cm of ol] (on) {Keton};
\node[box, below right=0cm and 1.5cm of ol] (eter) {Eter};
\node[box, above=of al] (syra) {Karboxylsyra};
\node[box, above=of syra] (halosyra) {Halogenkarboxylsyra};
\node[box, left=of halosyra] (hydroxisyra) {Hydroxisyra};
\node[box, right=of halosyra] (aminosyra) {Aminosyra};

\draw[arrow, color_pink] (an.90) -- node[sloped,above] {sub} (halo.-90);

\draw[arrow, color_blue] (en.-15) -- node[sloped, anchor=center,below] {add} (an.165);

\draw[arrow, color_red] ([yshift=.4ex]halo.180) -- node[sloped,above] {elim} ([yshift=.4ex]en.0);

\draw[arrow, color_blue] ([yshift=-.4ex]en.0) -- node[sloped,below] {add} ([yshift=-.4ex]halo.180);

\draw[arrow, color_pink] (halo.0) -- node[sloped,below] {sub} (amin.180);

\draw[arrow, color_pink] (halo.90) -- node[sloped,above] {sub} (ol.-90);

\draw[arrow, color_teal] (ol.165) -- node[sloped,below] {kond} (ester.0);

\draw[arrow, color_orange] (ol.0) -- node[sloped,above] {ox \(2^\circ\)} (on.180);

\draw[arrow, color_teal] (ol.0) -- node[sloped,below] {kond} (eter.180);

\draw[arrow, color_orange] (ol.90) -- node[sloped,above] {ox \(1^\circ\)} (al.-90);

\draw[arrow, color_orange] (al.90) -- node[sloped,above] {ox} (syra.-90);

\draw[arrow, color_teal] (syra.-165) -- node[sloped,above] {kond} (ester.0);

\draw[arrow, color_pink] (syra.90) -- node[sloped,above] {sub} (halosyra.-90);

\draw[arrow, color_pink] (halosyra.180) -- node[sloped,below] {sub} (hydroxisyra.0);

\draw[arrow, color_pink] (halosyra.0) -- node[sloped,below] {sub} (aminosyra.180);

\end{tikzpicture}

\end{document}
```
