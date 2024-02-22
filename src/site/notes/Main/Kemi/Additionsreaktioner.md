---
{"dg-publish":true,"permalink":"/main/kemi/additionsreaktioner/","tags":["kemi","organisk-kemi"]}
---

En additionsreaktion är en [[Main/Kemi/Reaktionsmekanismer\|reaktionsmekanism]] där ett omättat [[Main/Kemi/Kolväte\|kolväte]] adderar en molekyl för att bilda ett mättat kolväte. Additionsreaktioner följer [[Main/Kemi/Markovnikovs regel\|Markovnikovs regel]].

I en additionsreaktion attackerar en dubbel-/trippelbindning molekylen och bildar en [[Intermediär\|intermediär]] och en anjon, därefter attackerar anjonen det positiva kolet i intermediären.

En graf för [[Gibbs fria energi\|Gibbs fria energi]] har då två toppar, där intermediären sitter i dalen emellan dem. Additionsreaktioner är också nästan alltid [[Main/Kemi/Entalpi#^exoterm\|exoterma]].

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

\begin{tikzpicture}[>=Straight Barb]
\draw[thick, <->] (0,6.5)node[below left=2pt]{$E$} -- (0,0) -- (8.5,0);
\coordinate (A) at (0,2.5);
\coordinate (B) at (1.5,2.5); \draw (B)++(-0.5,-0.25) node {reaktant};
\coordinate (C) at (3.0, 4.5);
\coordinate (D) at (3.8,3.8); \draw (D)++(0,-0.25) node {intermediär};
\coordinate (E) at (4.6,4.2);
\coordinate (F) at (5.8,1.8); \draw (F)++(0.5,-0.25) node {produkt};
\draw[thick, color_red, looseness=.7] (A) -- (B) to[out=0, in=180] (C) to[out=0, in=180] (D) to[out=0, in=180] (E) to[out=0, in=180] (F) --++ (2,0);
\draw[dashed] (B) --++ (6.5,0);
\draw[decorate, decoration=brace, thick] (8.1,2.5)--node[right]{$\Delta G$}(8.1,1.8);
\end{tikzpicture}

\end{document}
```


## Ex: Etyn + Brom

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

