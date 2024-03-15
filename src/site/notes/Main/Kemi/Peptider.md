---
{"dg-publish":true,"permalink":"/main/kemi/peptider/","tags":["kemi","organisk-kemi","biokemi"]}
---

Peptider är sammanlänkade [[Main/Kemi/Aminosyror\|aminosyror]]

- Dipeptid: 2 st aminosyror
- Tripeptid: 3 st aminosyror
- Oligopeptid: <10 st aminosyror
- Polypeptid: <50 st aminosyror

Bildning av peptid (dipeptid nedan) sker genom en [[Kondensationsreaktion\|kondensationsreaktion]]. En amidbindning/peptidbindning skapas. Peptidbindningen är mycket stabil och har en halveringstid på ~300-600 år.

```chemfig
\usepackage{chemfig}

\begin{document}

\LARGE
\setchemfig{
	atom sep=1.8em,
	arrow double sep = 0.2em,
	double bond sep = 0.2em,
	bond offset = 0.2em,
	bond style={
		line width=0.05em
	},
	arrow style = thick,
}

\schemestart
  \chemfig{N(-[3]H)(-[5]H)-C(-[6]R)(-[2]H)-C(=[1]O)-[7]OH}
  \+
  \chemfig{N(-[3]H)(-[5]H)-C(-[6]R)(-[2]H)-C(=[1]O)-[7]OH}
  
  \arrow(.mid east--.mid west){->}

\subscheme{
      \chemfig{N(-[3]H)(-[5]H)-C(-[6]R)(-[2]H)-C(=[2]O)-N(-[6]H)-C(-[6]R)(-[2]H)-C(=[1]O)-[7]OH}
      \arrow(.south--.north){<=>}[-90]
      \chemfig{N(-[3]H)(-[5]H)-C(-[6]R)(-[2]H)-C(-[2]O{^-})=\chemabove{N}{\oplus}(-[6]H)-C(-[6]R)(-[2]H)-C(=[1]O)-[7]OH}
	}
	\+
	\chemfig{H_2O}
\schemestop

\end{document}
```

N-terminal på vänster sida, C-terminal på höger sida.

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

\chemname
{
  \chemfig{N(-[3]H)(-[5]H)-C(-[6]H)(-[2]H)-C(=[2]O)-N(-[6]H)-C(-[7]C(-[5]H)(-[7]H)-[1]H)(-[3]H)-[1]C(=[2]O)-OH}
}
{Glycylalanin}

\end{document}
```
