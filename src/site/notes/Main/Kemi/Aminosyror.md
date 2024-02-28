---
{"dg-publish":true,"permalink":"/main/kemi/aminosyror/","tags":["kemi","organisk-kemi","biokemi"]}
---


```chemfig
\usepackage{chemfig}

\begin{document}

\LARGE
\setchemfig{
	atom sep=2.5em,
	double bond sep = 0.2em,
	bond offset = 0.2em,
	bond style={
		line width=0.05em
	},
	arrow style = thick,
}

\schemestart

\chemname{\chemfig{N(-[3]H)(-[5]H)-C(-[6]R)(-[2]H)-C(=[1]O)-[7]OH}}
{Allmän form av amino-\\syra i ofysiologisk form}

\arrow(.mid east--.mid west)[,,,draw=none]

\chemname{\chemfig{\chemabove{N}{\oplus}(-[:140]H)(-[:200]H)(-[:250]H)-C(-[6]R)(-[2]H)-C(=[1]O)-[7]O{^-}}}
{Amfojon/Zwitterjon}

\schemestop

\end{document}
```

Ip (pI) = pH : nettoladdningen för aminosyran är noll.
Ip (pI) < pH : nettoladdningen för aminosyran är negativ.
Ip (pI) > pH : nettoladdningen för aminosyran är positiv.

$$\mathrm{Ip}=\frac{\mathrm{p}K_{a1}+\mathrm{p}K_{a2}}{2}$$
Uppgift 11.7 i boken typ

Man kan separera aminosyror efter deras laddning genom att använda olika buffertar.
T.ex. elektrofores och jonbyteskromatografi.