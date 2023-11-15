---
{"dg-publish":true,"permalink":"/main/kemi/le-chateliers-princip/","tags":["kemi"]}
---

Le Châteliers Princip säger att en [[Main/Kemi/Kemisk jämvikt\|jämviktreaktion]] kommer motverka förändringar som utsätts till reaktionen:

- **Förändring i koncentration**
  När [[Koncentration\|koncentrationen]] av ett ämne blir högre på en sida kommer reaktionen gå åt andra sidan för att koncentrationen ska gå ner igen.
  Om koncentrationen för ett ämne blir lägre kommer reaktionen gå mot det ämnet.
- **Förändring i tryck/volym**
  När [[Tryck\|trycket]] ökar/volymen sjunker kommer reaktionen gå mot det håll med färre partiklar för att sänka trycket.
  När trycket sjunker/volymen ökar kommer reaktionen gå mot sidan med fler partiklar.
  > [!note]- Förklaring
  > Om $\mathrm{[A]}=1$ och $\mathrm{[B]}=1$ i en reaktion $\mathrm{2A \rightleftharpoons B}$
  > $K=\frac{[\mathrm{B}]^1}{[\mathrm{A}]^2}=\frac{1}{1}=1$
  > 
  > Volymen halveras / trycket fördubblas:
  > $\mathrm{[A]}=2$ och $\mathrm{[B]}=2$
  > $Q=\frac{[\mathrm{B}]^1}{[\mathrm{A}]^2}=\frac{2}{4}=0{,}5$
  > $Q<K:\,$Reaktionen drivs åt höger
- **Förändring i temperatur**
  Förändring av temperatur påverkar [[Main/Kemi/Jämviktskonstant\|jämviktskonstanten]].
  Om temperaturen ökar och reaktionen är [[Main/Kemi/Entalpi#^exoterm\|exoterm]] kommer $K$ att sjunka och reaktionen kommer att gå åt vänster. Vice versa för sänkt temperatur.
  Om reaktionen är [[Main/Kemi/Entalpi#^endoterm\|endoterm]] kommer $K$ att öka med temperatur och reaktionen drivs åt höger.

> [!warning] Tillsats av katalysator påverkar ej jämvikten
> Eftersom en [[Katalysator\|katalysator]] påskyndar reaktionen lika mycket åt båda hållen, är $v_{1}$ och $v_{2}$  fortfarande lika stora.

## Exempel: 

$$\mathrm{N_{2}O_{4}(g)}\rightleftharpoons \mathrm{2NO_{2}(g)}\quad\Delta H=57{,}2\,\mathrm{kJ}$$

Vid temperaturen  $400\,\mathrm{K}$ är $K=1{,}44$
Det tillsätts $\mathrm{1{,}0\,mol\ N_{2}O_{4}}$ och $\mathrm{0{,}5\,mol\ NO_{2}}$
Volymen antas vara $1\,\mathrm{dm^3}$
Koncentrationerna för ämnena kan beräknas $n/V$ 
$\mathrm{[N_{2}O_{4}]=1{,}0\,M}\qquad\mathrm{[NO_{2}]=0{,}5\,M}$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\definecolor{color_red}{RGB}{238, 20, 1}
\definecolor{color_blue}{RGB}{0, 158, 206}

\begin{document}
\begin{tikzpicture}
	\begin{axis}[
		width=10cm,
		height=7cm,
		legend style={
			at={(0.5,1.15)},
			anchor=north,
			legend columns=-1
		},
	    xmin=0, xmax=70,
	    ymin=0, ymax=1.4,
		xlabel = Tid,
		ylabel = Koncentration {[}M{]},
		xtick=\empty,
		extra x ticks={40},
		extra x tick labels={Jämvikt uppnådd},
		extra y ticks={0.7354, 1.0292},
		extra y tick labels={
			{0,74},
			{1,03}
		},
		extra x tick style={
			grid=major, 
			dashed,
		},
		extra y tick style={
			ticklabel pos=right,
			y tick style={
				draw=none,
			}
		},
	]
	
	\addplot [
	    domain=0:70, 
	    samples=100, 
	    color=color_red,
	    line width=0.7mm,
	]
	{0.2646*e^(-0.15*x) + 0.7354};
	\addlegendentry{\(\mathrm{[N_{2}O_{4}]}\)}

	\addplot [
	    domain=0:70, 
	    samples=100,
	    color=color_blue,
	    line width=0.7mm,
	]
	{-0.5292*e^(-0.15*x) + 1.0292};
	\addlegendentry{\(\mathrm{[NO_2]}\)}
	
	\end{axis}
\end{tikzpicture}
\end{document}
```

$$
K = \frac
{\mathrm{[NO_{2}]^{2}_{j}}}
{\mathrm{[N_{2}O_{4}]_{j}}}
=\frac{1{,}0292^{2}}{0{,}7354}
=1{,}44
$$

<br>

### Förändring i koncentration:

Här tillsätts $0{,}5\,\mathrm{M}\ \mathrm{N_{2}O_{4}}$ till jämvikten, detta driver reaktionen åt höger eftersom [[Main/Kemi/Jämviktskonstant#Reaktionskvot\|$Q<K$]] 

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\definecolor{color_red}{RGB}{238, 20, 1}
\definecolor{color_blue}{RGB}{0, 158, 206}

\begin{document}
\begin{tikzpicture}
	\begin{axis}[
		width=10cm,
		height=7cm,
	    legend style={
			at={(0.5,1.15)},
			anchor=north,
			legend columns=-1
		},
	    xmin=0, xmax=70,
	    ymin=0, ymax=1.4,
		xlabel = Tid,
		ylabel = Koncentration {[}M{]},
		xtick=\empty,
		extra x ticks={20,60},
		extra x tick labels={
			\(\mathrm{N_{2}O_{4}}\) tillsätts,
			Ny jämvikt uppnådd
		},
		extra y ticks={1.1161, 1.2678},
		extra y tick labels={
			{1,12},
			{1,27}
		},
		extra x tick style={
			grid=major, 
			dashed,
		},
		extra y tick style={
			ticklabel pos=right,
			y tick style={
				draw=none,
			}
		},
	]
	
	\addplot [
	    domain=0:70, 
	    samples=200, 
	    color=color_red,
	    line width=0.7mm,
	]
	{
		(x<20) * 0.7354 +
		(x>=20) * (0.1193*e^(-0.15*(x-20)) + 1.1161)
		};
	\addlegendentry{\(\mathrm{[N_{2}O_{4}]}\)}

	\addplot [
	    domain=0:70, 
	    samples=300,
	    color=color_blue,
	    line width=0.7mm,
	    line cap=round,
	]
	{
		(x<20) * 1.0292 +
		(x>=20) * (-0.2386*e^(-0.15*(x-20)) + 1.2678)
	};
	\addlegendentry{\(\mathrm{[NO_2]}\)}

	
	\end{axis}
\end{tikzpicture}
\end{document}
```

$$
\begin{align}
Q &= \frac
{\mathrm{[NO_{2}]^{2}}}
{\mathrm{[N_{2}O_{4}]}}
=\frac{1{,}0292^{2}}{1{,}2354}
=0{,}857
\\
K &= \frac
{\mathrm{[NO_{2}]^{2}_{j}}}
{\mathrm{[N_{2}O_{4}]_{j}}}
=\frac{1{,}2678^{2}}{1{,}1161}
=1{,}44
\end{align}
$$

$K$ är oförändrad eftersom koncentration inte påverkar jämviktskonstanten.

### Förändring i tryck/volym:

Här halveras trycket, vilket är detsamma som att fördubbla volymen, det driver reaktionen åt det håll med fler partiklar, i detta fall åt höger.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\definecolor{color_red}{RGB}{238, 20, 1}
\definecolor{color_blue}{RGB}{0, 158, 206}

\begin{document}
\begin{tikzpicture}
	\begin{axis}[
		width=10cm,
		height=7cm,
	    legend style={
			at={(0.5,1.15)},
			anchor=north,
			legend columns=-1
		},
	    xmin=0, xmax=70,
	    ymin=0, ymax=1.5,
		xlabel = Tid,
		ylabel = Koncentration {[}M{]},
		xtick=\empty,
		extra x ticks={20,60},
		extra x tick labels={
			Volymen ökas,
			Ny jämvikt uppnådd
		},
		extra y ticks={0.4656, 0.8188},
		extra y tick labels={
			{0,47},
			{0,82}
		},
		extra x tick style={
			grid=major, 
			dashed,
		},
		extra y tick style={
			ticklabel pos=right,
			y tick style={
				draw=none,
			}
		},
	]

	\addplot [
	    domain=0:70, 
	    samples=300,
	    color=color_red,
	    line width=0.7mm,
	    line cap=round,
	]
	{
		(x<20) * 1.1161 +
		(x>=20) * (0.09245*e^(-0.15*(x-20)) + 0.4656)
	};
	\addlegendentry{\(\mathrm{[N_{2}O_{4}]}\)}

	\addplot [
	    domain=0:70, 
	    samples=300,
	    color=color_blue,
	    line width=0.7mm,
	]
	{
		(x<20) * 1.2678 +
		(x>=20) * (-0.1849*e^(-0.15*(x-20)) + 0.8188)
	};
	\addlegendentry{\(\mathrm{[NO_2]}\)}

	
	\end{axis}
\end{tikzpicture}
\end{document}
```

$$
\begin{align}
Q &= \frac
{\mathrm{[NO_{2}]^{2}}}
{\mathrm{[N_{2}O_{4}]}}
=\frac{0{,}6339^{2}}{0{,}55805}
=0{,}72
\\
K &= \frac
{\mathrm{[NO_{2}]^{2}_{j}}}
{\mathrm{[N_{2}O_{4}]_{j}}}
=\frac{0{,}8188^{2}}{0{,}4656}
=1{,}44
\end{align}
$$

$K$ är oförändrad eftersom tryck/volym inte påverkar jämviktskonstanten.

### Förändring i temperatur:

Temperaturen höjs med $\mathrm{100\,K}$ till $\mathrm{500\,K}$ vilket gör att $K$ blir större eftersom reaktionen är endoterm, detta driver reaktionen åt höger.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\definecolor{color_red}{RGB}{238, 20, 1}
\definecolor{color_blue}{RGB}{0, 158, 206}

\begin{document}
\begin{tikzpicture}
	\begin{axis}[
		width=10cm,
		height=7cm,
	    legend style={
			at={(0.5,1.15)},
			anchor=north,
			legend columns=-1
		},
	    xmin=0, xmax=70,
	    ymin=0, ymax=1.8,
		xlabel = Tid,
		ylabel = Koncentration {[}M{]},
		xtick=\empty,
		extra x ticks={20,60},
		extra x tick labels={
			Volymen ökas,
			Ny jämvikt uppnådd
		},
		extra y ticks={0.06415, 1.6217},
		extra y tick labels={
			{0,06},
			{1,62}
		},
		extra x tick style={
			grid=major, 
			dashed,
		},
		extra y tick style={
			ticklabel pos=right,
			y tick style={
				draw=none,
			}
		},
	]

	\addplot [
	    domain=0:70, 
	    samples=300,
	    color=color_red,
	    line width=0.7mm,
	    line cap=round,
	]
	{
		(x<20) * 0.4656 +
		(x>=20) * (0.40145*e^(-0.15*(x-20)) + 0.06415)
	};
	\addlegendentry{\(\mathrm{[N_{2}O_{4}]}\)}

	\addplot [
	    domain=0:70, 
	    samples=300,
	    color=color_blue,
	    line width=0.7mm,
	]
	{
		(x<20) * 0.8188 +
		(x>=20) * (-0.8029*e^(-0.15*(x-20)) + 1.6217)
	};
	\addlegendentry{\(\mathrm{[NO_2]}\)}

	
	\end{axis}
\end{tikzpicture}
\end{document}
```

$$
\begin{align}
Q &= \frac
{\mathrm{[NO_{2}]^{2}}}
{\mathrm{[N_{2}O_{4}]}}
=\frac{0{,}8188^{2}}{0{,}4656}
=1{,}44
\\
K &= \frac
{\mathrm{[NO_{2}]^{2}_{j}}}
{\mathrm{[N_{2}O_{4}]_{j}}}
=\frac{1{,}6217^{2}}{0{,}06415}
=41{,}0
\end{align}
$$

Jämviktskonstanten för denna reaktion är alltså $41$ vid $500\,\mathrm{K}$.

![Jämviktskonstanter.png](/img/user/Main/Kemi/J%C3%A4mviktskonstanter.png)