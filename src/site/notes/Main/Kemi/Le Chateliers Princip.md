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
  > $Q=\frac{[\mathrm{B}]^1}{[\mathrm{A}]^2}=\frac{2}{4}=0.5$
  > $Q<K:\,$Reaktionen drivs åt höger
- **Förändring i temperatur**
  Förändring av temperatur påverkar [[Main/Kemi/Jämviktskonstant\|jämviktskonstanten]].
  Om temperaturen ökar och reaktionen är [[Main/Kemi/Entalpi#^exoterm\|exoterm]] kommer $K$ att sjunka och reaktionen kommer att gå åt vänster. Vice versa för sänkt temperatur.
  Om reaktionen är [[Main/Kemi/Entalpi#^endoterm\|endoterm]] kommer $K$ att öka med temperatur och reaktionen drivs åt höger.

> [!warning] Tillsats av katalysator påverkar ej jämvikten
> Eftersom en [[Katalysator\|katalysator]] påskyndar reaktionen lika mycket åt båda hållen, är v<sub>1</sub> och v<sub>2</sub> fortfarande lika stora.

## Exempel: 

$$\mathrm{N_{2}O_{4}}\,(g)\rightleftharpoons \mathrm{2NO_{2}}\,(g)\quad\Delta H=-57{,}2\,\mathrm{kJ}$$

Vid temperaturen $25$°$\mathrm{C}$ ($298{,}15\,\mathrm{K}$) är $K=76{,}536$
Det tillsätts $\mathrm{1{,}0\,mol\ N_{2}O_{4}}$ och $\mathrm{0{,}5\,mol\ NO_{2}}$
Volymen antas vara $1\,\mathrm{dm^3}$
Koncentrationerna för ämnena kan beräknas $n/V$ 
$\mathrm{[N_{2}O_{4}]=0{,}2\,M}\qquad\mathrm{[NO_{2}]=1{,}0\,M}$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\definecolor{color1}{RGB}{255, 0, 55}
\definecolor{color2}{RGB}{217, 82, 0}
\definecolor{color3}{RGB}{0, 132, 255}
\definecolor{color4}{RGB}{176, 0, 255}

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
	    ymin=0, ymax=1.1,
		xlabel = Tid,
		ylabel = Koncentration {[}M{]},
		xtick=\empty,
		extra x ticks={40},
		extra x tick labels={Jämvikt uppnådd},
		extra y ticks={0.6941, 0.0118},
		extra y tick labels={
			{0,69},
			{0,012}
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
	    color=color1,
	    line width=0.7mm,
	]
	{-0.4941*e^(-0.15*x) + 0.6941};
	\addlegendentry{\(\mathrm{[N_{2}O_{4}]}\)}

	\addplot [
	    domain=0:70, 
	    samples=100,
	    color=color3,
	    line width=0.7mm,
	]
	{0.9882*e^(-0.15*x) + 0.0118};
	\addlegendentry{\(\mathrm{[NO_2]}\)}
	
	\end{axis}
\end{tikzpicture}
\end{document}
```

$$
K
=\frac
{\mathrm{[NO_{2}]^{2}_{j}}}
{\mathrm{[N_{2}O_{4}]_{j}}}
=\frac{0{,}0118^{2}}{0{,}6941}
=2{,}0\cdot10^{-4}
$$

<br>

### Förändring i koncentration:

Här tillsätts 0.5 M N<sub>2</sub>O<sub>4</sub> till jämvikten, detta driver reaktionen åt höger eftersom [[Main/Kemi/Jämviktskonstant#Reaktionskvot\|$Q<K$]] 

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\definecolor{color1}{RGB}{255, 0, 55}
\definecolor{color2}{RGB}{217, 82, 0}
\definecolor{color3}{RGB}{0, 132, 255}
\definecolor{color4}{RGB}{176, 0, 255}

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
	    ymin=0, ymax=1.1,
		xlabel = Tid,
		ylabel = Koncentration {[}M{]},
		xtick=\empty,
		extra x ticks={20,60},
		extra x tick labels={
			\(\mathrm{N_{2}O_{4}}\) tillsätts,
			Ny jämvikt uppnådd
		},
		extra y ticks={0.94313, 0.01374},
		extra y tick labels={
			{0,94},
			{0,014}
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
	    color=color1,
	    line width=0.7mm,
	]
	{
		(x<20) * 0.6941 +
		(x>=20) * (-0.24903*e^(-0.15*(x-20)) + 0.94313)
		};
	\addlegendentry{\(\mathrm{[N_{2}O_{4}]}\)}

	\addplot [
	    domain=0:70, 
	    samples=300,
	    color=color2,
	    line width=0.7mm,
	    line cap=round,
	]
	{
		(x<20) * 0.0118 +
		(x>=20) * (0.49806*e^(-0.15*(x-20)) + 0.01374)
	};
	\addlegendentry{\(\mathrm{[NO_2]}\)}

	
	\end{axis}
\end{tikzpicture}
\end{document}
```

$$
K
=\frac
{\mathrm{[NO_{2}]^{2}_{j}}}
{\mathrm{[N_{2}O_{4}]_{j}}}
=\frac{0{,}01374^{2}}{0{,}94313}
=2{,}0\cdot10^{-4}
$$

$K$ är oförändrad eftersom koncentration inte påverkar jämviktskonstanten.

### Förändring i tryck/volym:

Här halveras trycket, vilket är detsamma som att fördubbla volymen, det driver reaktionen åt det håll med fler partiklar, i detta fall åt höger.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\definecolor{color1}{RGB}{255, 0, 55}
\definecolor{color2}{RGB}{217, 82, 0}
\definecolor{color3}{RGB}{0, 132, 255}
\definecolor{color4}{RGB}{176, 0, 255}

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
	    ymin=0, ymax=1.0,
		xlabel = Tid,
		ylabel = Koncentration {[}M{]},
		xtick=\empty,
		extra x ticks={20,60},
		extra x tick labels={
			Volymen minskas,
			Ny jämvikt uppnådd
		},
		extra y ticks={0.4701515, 0.009697},
		extra y tick labels={
			{0,47},
			{0,0097}
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
	    color=color2,
	    line width=0.7mm,
	    line cap=round,
	]
	{
		(x<20) * 0.94313 +
		(x>=20) * (0.0014135*e^(-0.15*(x-20)) + 0.4701515)
	};
	\addlegendentry{\(\mathrm{[N_{2}O_{4}]}\)}

	\addplot [
	    domain=0:70, 
	    samples=300,
	    color=color3,
	    line width=0.7mm,
	]
	{
		(x<20) * 0.01374 +
		(x>=20) * (-0.002827*e^(-0.15*(x-20)) + 0.009697)
	};
	\addlegendentry{\(\mathrm{[NO_2]}\)}

	
	\end{axis}
\end{tikzpicture}
\end{document}
```

$$
K
=\frac
{\mathrm{[NO_{2}]^{2}_{j}}}
{\mathrm{[N_{2}O_{4}]_{j}}}
=\frac{0{,}009697^{2}}{0{,}4701515}
=2{,}0\cdot10^{-4}
$$

$K$ är oförändrad eftersom tryck/volym inte påverkar jämviktskonstanten.

### Förändring i temperatur:

Temperaturen sänks med $\mathrm{200\,K}$ till $\mathrm{473.15\,K}$ vilket gör att $K$ blir större eftersom reaktionen är  exoterm, detta driver reaktionen åt höger.

Den nya jämviktskonstanten kan räknas ut med den integrerade Van ’t Hoffs ekvation:
$$
\ln\frac{K_{2}}{K_{1}}=\frac{\Delta H}{R}\left( \frac{1}{T_{1}}-\frac{1}{T_{2}}\right)
$$
Där $R$ är den allmänna gaskonstanten och $T$ är den absoluta temperaturen.

$$
\ln\frac{K_{2}}{2\cdot 10^{-4}}=\frac{-57.2\cdot10^{3}}{8.314}\left( \frac{1}{673.15}-\frac{1}{473.15}\right)
$$

Bryt ut $K_{2}$

$$
K_{2}=\exp\left( \frac{-57.2\cdot10^{3}}{8.314}\left( \frac{1}{673.15}-\frac{1}{473.15}\right) \right)\cdot2\cdot 10^{-4}
$$

$$
K_{2}=0.01504
$$