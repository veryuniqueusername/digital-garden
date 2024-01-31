---
{"dg-publish":true,"permalink":"/main/kemi/alkaner/","tags":["kemi","organisk-kemi"]}
---

Alkaner är mättade [[Main/Kemi/Kolväte\|kolväten]], alltså kolväten med endast enkelbindningar.

Alkaner har alltid molekylformeln $\ce{ C_{n}H_{2n+2} }$.

Den enklaste alkanen är metan, $\ce{ CH_{4} }$.

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
\chemfig{H-C(-[2]H)(-[6]H)-H}
\end{document}
```

Alkaner kan omvandlas till [[Main/Kemi/Alkener\|Alkener]], [[Alkoholer\|Alkoholer]] och [[Main/Kemi/Halogenalkaner\|Halogenalkaner]].

## Alkan → Alken
[[Main/Kemi/Radikalreaktioner\|Radikalreaktion]], [[Eliminationsreaktioner\|Eliminationsreaktion]]
Dehydrogenering, behöver en väldigt stark katalysator

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
  \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-C(-[2]H)(-[6]H)-H}
    }
    {Alkan}
  \arrow(.mid east--.mid west){->}
  \chemname
    {
      \chemfig{C(-[3]H)(-[5]R)=C(-[1]H)(-[7]H)}
    }
    {Alken}
  \+
  \chemfig{H_2}
\schemestop

\end{document}
```

## Alkan → Alkohol
[[Main/Kemi/Radikalreaktioner\|Radikalreaktion]], [[Main/Kemi/Substitutionsreaktioner\|Substitutionsreaktion]]
Vatten bryts till OH-radikal och H-radikal.

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
  \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-H}
    }
    {Alkan}
  \+
  \chemname
    {
      \chemfig{H_2O}
    }
	{Vatten}
  \arrow(.mid east--.mid west){->[$\hbar\nu$]}
  \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-OH}
    }
    {Alkohol}
\schemestop

\end{document}
```

## Alkan → Halogenalkan
[[Main/Kemi/Radikalreaktioner\|Radikalreaktion]], [[Main/Kemi/Substitutionsreaktioner\|Substitutionsreaktion]]

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
  \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-H}
    }
    {Alkan}
  \+
  \chemname
    {
      \chemfig{X-X}
    }
	{Halogen}
  \arrow(.mid east--.mid west){->[$\hbar\nu$]}
  \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-X}
    }
    {Halogenalkan}
	\+
	\chemfig{H-X}
\schemestop

\end{document}
```
