---
tags:
  - kemi
  - organisk-kemi
dg-publish: true
status: draft
---
Alkener är omättade [[Main/Kemi/Kolväte\|kolväten]]. De har minst en dubbelbindning mellan två kol.

Alkener med endast en dubbelbindning har alltid molekylformeln $\ce{ C_{n}H_{2n} }$.

Den enklaste alkenen är eten, $\ce{ C_{2}H_{4} }$
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

\chemfig{C(-[3]H)(-[5]H)-C(-[1]H)(-[7]H)}

\end{document}
```

Alkaner kan omvandlas till [[Main/Kemi/Alkaner\|Alkaner]], [[Alkoholer\|Alkoholer]], [[Main/Kemi/Halogenalkaner\|Halogenalkaner]], [[Aminer\|Aminer]] och [[Polymerer\|Polymerer]].

## Alken → Alkan
[[Main/Kemi/Additionsreaktioner\|Additionsreaktion]]
Hydrogenering, behöver katalysator

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
    \chemnameinit
    {
      \chemfig{R-C(-[2]H)(-[6]H)-C(-[2]H)(-[6]H)-H}
    }
\schemestart
    \chemname
    {
      \chemfig{C(-[3]H)(-[5]R)=C(-[1]H)(-[7]H)}
    }
    {Alken}
  \+
  \chemfig{H_2}
  \arrow(.mid east--.mid west){->[][Pd/C]}
    \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-C(-[2]H)(-[6]H)-H}
    }
    {Alkan}

\schemestop

\end{document}
```

## Alken → Alkohol
[[Main/Kemi/Additionsreaktioner\|Additionsreaktion]]
Enligt [[Main/Kemi/Markovnikovs regel\|Markovnikovs regel]] bildas fler sekundära alkoholer.

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

\chemnameinit{\chemfig{R-C(-[2]OH)(-[6]H)-C(-[2]H)(-[6]H)-H}}
\schemestart
    \chemname
    {
      \chemfig{C(-[3]H)(-[5]R)=C(-[1]H)(-[7]H)}
    }
    {Alken}
  \+
  \chemfig{H_2O}
  \arrow(.mid east--.mid west){->[H$^{+}$]}
    \chemname
    {
      \chemfig{R-C(-[2]OH)(-[6]H)-C(-[2]H)(-[6]H)-H}
    }
    {Sekundär Alkohol\\(major)}
    \+
    \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-C(-[2]OH)(-[6]H)-H}
    }
    {Primär Alkohol\\(minor)}
\schemestop

\end{document}
```
## Alken → Halogenalkan
[[Main/Kemi/Additionsreaktioner\|Additionsreaktion]]

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

\chemnameinit{\chemfig{R-C(-[2]X)(-[6]H)-C(-[2]H)(-[6]H)-H}}
\schemestart
    \chemname
    {
      \chemfig{C(-[3]H)(-[5]R)=C(-[1]H)(-[7]H)}
    }
    {Alken}
  \+
  \chemfig{H-X}
  \arrow(.mid east--.mid west){->}
    \chemname
    {
      \chemfig{R-C(-[2]X)(-[6]H)-C(-[2]H)(-[6]H)-H}
    }
    {Sekundär Halogenalkan\\(major)}
    \+
    \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-C(-[2]X)(-[6]H)-H}
    }
    {Primär Halogenalkan\\(minor)}
\schemestop

\end{document}
```
## Alken → Amin
[[Main/Kemi/Additionsreaktioner\|Additionsreaktion]]

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

\chemnameinit{\chemfig{R-C(-[2]H)(-[6]H)-C(-[2]H)(-[6]NH_2)-H}}
\schemestart
    \chemname
    {
      \chemfig{C(-[3]H)(-[5]R)=C(-[1]H)(-[7]H)}
    }
    {Alken}
  \+
  \chemfig{NH_3}
  \arrow(.mid east--.mid west){->}
    \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-C(-[2]H)(-[6]NH_2)-H}
    }
    {Alkylamin}
\schemestop

\end{document}
```

## Alken → Polymer
[[Main/Kemi/Polymerisationsreaktioner\|Polymerisationsreaktion]]


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
    $n$
      \chemfig{C(-[3]H)(-[5]R)=C(-[1]H)(-[7]H)}
    }
    {Alken}
  \arrow(.mid east--.mid west){->}
    \chemname
    {
      \chemfig{R-C(-[2]H)(-[6]H)-C(-[2]H)(-[6]NH_2)-H}
    }
    {Alkylamin}
\schemestop

\end{document}
```
