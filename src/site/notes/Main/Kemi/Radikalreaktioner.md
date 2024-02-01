---
{"dg-publish":true,"permalink":"/main/kemi/radikalreaktioner/"}
---

Radikalreaktioner är en sorts [[Main/Kemi/Reaktionsmekanismer\|reaktionsmekanism]] där radikaler inducerar substitutions-, additions- eller eliminationsreaktioner. De består alltid av tre steg:

1. **Initiering** - [[Fria radikaler\|Fria radikaler]] bildas.
2. **Propagering** - Kedjereaktion där fria radikaler reagerar med andra molekyler och bildar nya radikaler.
3. **Terminering** - Reaktionskedjan bryts när två radikaler reagerar med varandra → Inga nya radikaler bildas

## Ex Substitution: Bildning av klormetan

### 1. Initiering

UV-strålning bryter bindningen i en klormolekyl vilket skapar fria radikaler.

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
      \chemfig{Cl-Cl}
    }
    {Klorgas}
  \arrow(.mid east--.mid west){->[$\hbar\nu$]}
  \chemname
    {
      \chemfig{
       \lewis{0.,Cl}
       \+
       \lewis{0.,Cl}
      }
    }
    {Fria radikaler}
\schemestop

\end{document}
```

### Propagering

Radikalen reagerar med metan för att skapa väteklorid och sedan klormetan. Det finns fortfarande en radikal i slutet av detta.

#### 1.

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
    \lewis{0.,Cl}
    \+
    \chemname
    {
      \chemfig{H-C(-[2]H)(-[6]H)-H}
    }
    {Metan}
  \arrow(.mid east--.mid west){->}
  \chemname
    {
      \chemfig{H-\lewis{0.,C}(-[2]H)(-[6]H)}
    }
    {\qquad Metylradikal}
  \+{2em}
  \chemname
	{
	  \chemfig{H-Cl}
	}
	{Väteklorid}
  
\schemestop

\end{document}
```

#### 2.

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
      \chemfig{H-\lewis{0.,C}(-[2]H)(-[6]H)}
    }
    {\qquad Metylradikal}
  \+{2em}
  \chemname
    {
      \chemfig{Cl-Cl}
    }
    {Klorgas}
  \arrow(.mid east--.mid west){->}
  \chemname
    {
      \chemfig{H-C(-[2]H)(-[6]H)-Cl}
    }
    {Klormetan}
  \+
  \lewis{0.,Cl}
  
\schemestop

\end{document}
```

### Terminering

Två radikaler reagerar med varandra och en bindning bildas av de fria elektronerna. I detta fall finns det tre olika sätt att leda till terminering.

#### 1.

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
      \chemfig{H-\lewis{0.,C}(-[2]H)(-[6]H)}
      \+
      \chemfig{\lewis{4.,C}(-[2]H)(-[6]H)-H}
    }
    {Metylradikaler}
  \arrow(.mid east--.mid west){->}
  \chemname
    {
      \chemfig{H-C(-[2]H)(-[6]H)-C(-[2]H)(-[6]H)-H}
    }
    {Etan}
  
\schemestop

\end{document}
```

#### 2.

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
      \chemfig{\lewis{0.,Cl}}
      \+
      \chemfig{\lewis{4.,Cl}}
    }
    {Klorradikaler}
  \arrow(.mid east--.mid west){->}
  \chemname
    {
      \chemfig{Cl-Cl}
    }
    {Klorgas}
  
\schemestop

\end{document}
```

#### 3.

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
	{
	  \chemfig{H-\lewis{0.,C}(-[2]H)(-[6]H)}
	  \+
	  \chemfig{\lewis{4.,Cl}}
	}
  \arrow(.mid east--.mid west){->}
    {
      \chemfig{H-C(-[2]H)(-[6]H)-Cl}
    }
  
\schemestop

\end{document}
```

## Ex Addition: 


## Ex Elimination: 

