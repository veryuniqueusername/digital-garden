---
{"dg-publish":true,"permalink":"/main/kemi/proteiner/","tags":["#kemi","#organisk-kemi","biokemi"]}
---

Ett protein är en veckad [[Main/Kemi/Peptider\|polypeptid]].

- Fiberprotein
	- α-ketarin
		- Finns i håret
	- β-keratin
		- Finns i naglarna
- Globulärt protein
	- Enzym
	- Hormon
	- Antikropp

### Proteinstruktur

![Proteinstrukturer.png](/img/user/Main/Kemi/Proteinstrukturer.png)

#### Primär struktur

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

\chemname{\chemfig{N(-[3]H)(-[5]H)-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-\bigcirc-C(=[1]O)(-[7]O-H)}}
{Aminosyrasekvensen = vilken ordning a.s. kommer i\\}
\end{document}
```

#### Sekundär struktur

Sekundära strukturer kan vara i α-helix form eller β-flak/plattor/lameller form.


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


  \chemfig{-[,,,,thick,dashed]C(-[2]H)(-[6]R)-N(-[6]H-[6,1.5,,,thick,dotted]O=[6]C(-[4]C(-[2]H)(-[6]R)-[4,,,,thick,dashed])-N(-[6]H)-C(-[2]H)(-[6]R)-[,,,,thick,dashed])-C(=[2]O)-C(-[2]H)(-[6]R)-[,,,,thick,dashed]}

\end{document}
```

#### Tertiär struktur

- Sidokedjorna bestämmer veckningen.
- Strukturen stabiliseras med svaga bindningar.
	- Vätebindning
	- Dipol-dipol bindning
	- van der Waals bindningar ⇒ ger upphov till den hydrofoba effekten
	- Jonbindning
	- Kovalent bindning ⇒ disulfidbryggor mellan cysteinrester $\ce{ R_{1}-S-S-R_{2} }$ ⇒ leder till lockigt hår

Proteinstrukturer är känsliga till yttre förändringar såsom
- Temperaturhöjning
- pH-förändring
- Organiska lösningsmedel
- Tungmetalljoner
- Detergenter, lösningsmedel
Eftersom dessa bryter den tertiära strukturen ⇒ **Denaturering**

#### Kvartär struktur

- Består av flera olika tertiära strukturer, också kallade subenheter.
- Har ofta en prostetisk grupp som binder samman dem. T.ex. en metalljon eller “hemgrupp” (som hemoglobin, Hb).