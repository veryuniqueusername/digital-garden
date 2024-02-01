---
{"dg-publish":true,"permalink":"/main/kemi/additionsreaktioner/","tags":["kemi","organisk-kemi"]}
---

En additionsreaktion är en [[Main/Kemi/Reaktionsmekanismer\|reaktionsmekanism]] där ett omättat [[Main/Kemi/Kolväte\|kolväte]] adderar en molekyl för att bilda ett mättat kolväte. Additionsreaktioner följer [[Main/Kemi/Markovnikovs regel\|Markovnikovs regel]].

I en additionsreaktion attackerar en dubbel-/trippelbindning molekylen och bildar en [[Intermediär\|intermediär]] och en anjon, därefter attackerar anjonen det positiva kolet i intermediären.

En graf för [[Gibbs fria energi\|Gibbs fria energi]] har då två toppar, där intermediären sitter i dale emellan dem.

## Exempel Etyn + Brom

```chemfig
\usepackage{chemfig}
\begin{document}
\LARGE
\setchemfig{
	atom sep=2em,
	double bond sep = 0.2em,
	bond offset = 0.1em,
	bond style={
		line width=0.05em
	},
	arrow style = thick,
}
\schemestart
\subscheme{
  \chemname
    {
	    \chemfig{H-C~C-H}
    }
    {Etyn}
  \+
  $n$ \chemfig{Br-Br}
}
  \arrow(a--){0}
\arrow(@{a}.mid east--.192){->}[50, 1.22]\chemfig{C(-[3]H)(-[5]Br)=C(-[7]H)(-[1]Br)}{\textit{trans}-1,2-dibromoeten}
\arrow(@{a}.mid east--.mid west){->}[0, 0.8]\chemfig{C(-[3]Br)(-[5]H)=C(-[7]H)(-[1]Br)}{\textit{cis}-1,2-dibromoeten}
\arrow(@{a}.mid east--.160){->}[-50, 1.22]\chemfig{Br-C(-[2]H)(-[6]Br)-C(-[6]H)(-[2]Br)-Br}{ 1,1,2,2-tetrabromoetan}
\schemestop

\end{document}
```

### Reaktionsmekanism

För 1,2-dibromoeten:

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

	\chemnameinit{
		\chemfig{C(-[3]H)(-[5]Br)={C}(-[7]H)}
	}

\schemestart
	\chemname{
	\chemfig{H-@{a}C~C-H}
	}{Etyn}
	\+
	\chemfig{@{b}Br-Br}
	
	\arrow(.mid east--.mid west){->}

	\chemname{
		\chemfig{C(-[3]H)(-[5]Br)=@{plus}{C}(-[7]H)}
	}{Karbokatjon\\intermediär}
	\+
	\chemfig{Br^{-}}

\schemestop{}

\chemmove{
\node[circle, draw, inner sep=0pt] at ([xshift=-4.7cm, yshift=5mm]plus) {$+$};
\draw[red,thick,shorten <=2pt,shorten >=1pt](a)++(-16.6, -0.3).. controls +(-60:12mm) and +(-120:12mm)..+(4.0, 0);
\draw[red,thick,shorten <=2pt,shorten >=1pt](b)++(-10.6, 0.1).. controls +(+90:3mm) and +(+120:4mm)..+(0.6, 0.2);
}

\end{document}
```


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
	\chemfig{C(-[3]H)(-[5]Br)=@{plus}{C}(-[7]H)}
	\+
	\chemfig{@{a}Br^{-}}
	
	\arrow(.mid east--.mid west){->}
	
	\chemfig{C(-[3]H)(-[5]Br)={C}(-[7]H)-[1]Br}

\schemestop{}

\chemmove{
\node[circle, draw, inner sep=0pt] at ([xshift=-11.3cm, yshift=5mm]plus) {$+$};
\draw[red,thick,shorten <=2pt,shorten >=1pt](a)++(-7.6, 0.3).. controls +(+90:9mm) and +(+45:6mm)..+(-2.0, 0.5);
}

\end{document}
```


För tetrabromoetan:

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

	\chemnameinit{
		\chemfig{C(-[3]H)(-[5]Br)={C}(-[7]H)}
	}

\schemestart
	\chemfig{@{a}C(-[3]H)(-[5]Br)={C}(-[7]H)-[1]Br}
	\+
	\chemfig{@{b}Br-Br}
	
	\arrow(.mid east--.mid west){->}

	\chemname{
		\chemfig{Br-C(-[2]H)(-[6]Br)-@{plus}{C}(-[6]H)-Br}
	}{Karbokatjon\\intermediär}
	\+
	\chemfig{Br^{-}}

\schemestop{}

\chemmove{
\node[circle, draw, inner sep=0pt] at ([xshift=-7.1cm, yshift=6mm]plus) {$+$};
\draw[red,thick,shorten <=2pt,shorten >=1pt](a)++(-15.8, -0.2).. controls +(-90:21mm) and +(-90:20mm)..+(3.7, -0.1);
\draw[red,thick,shorten <=2pt,shorten >=1pt](b)++(-11.5, 0.1).. controls +(+90:3mm) and +(+120:4mm)..+(0.6, 0.2);
}

\end{document}
```


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

	\chemnameinit{
		\chemfig{C(-[3]H)(-[5]Br)={C}(-[7]H)}
	}

\schemestart

	\chemfig{Br-C(-[2]H)(-[6]Br)-@{plus}{C}(-[6]H)-Br}
	\+
	\chemfig{@{a}Br^{-}}
	
	\arrow(.mid east--.mid west){->}


	\chemfig{Br-C(-[2]H)(-[6]Br)-{C}(-[2]Br)(-[6]H)-Br}

\schemestop{}

\chemmove{
\node[circle, draw, inner sep=0pt] at ([xshift=-14.5cm, yshift=6mm]plus) {$+$};
\draw[red,thick,shorten <=2pt,shorten >=1pt](a)++(-8.6, 0.3).. controls +(+135:9mm) and +(+45:6mm)..+(-2.7, 0);
}

\end{document}
```

