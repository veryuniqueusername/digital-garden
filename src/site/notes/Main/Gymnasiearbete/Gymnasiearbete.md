---
{"dg-publish":true,"permalink":"/main/gymnasiearbete/gymnasiearbete/","tags":["gymnasie-arbete"]}
---

Detta gymnasiearbete går ut på att hitta lösningar till [trekropparsproblemet](https://en.wikipedia.org/wiki/Three-body_problem), det vill säga att hitta startpositioner där de tre kropparna hamnar i en stabil bana.

Eftersom det inte finns några analytiska lösningar till problemet måste det lösas numeriskt, alltså att testa värden och sedan simulera hur kropparna skulle röra sig.

Det finns 18 variabler som styr startpositionen; varje kropp har 3 variabler för position $\boldsymbol{r}_{i}=(x_{i}, y_{i}, z_{i})$ och 3 variabler för rörelsemängd $\boldsymbol{p}_{i}=(p^x_{i}, p^y_{i}, p^z_{i})$ vilket ger alla dessa variabler som kan förändras.
$$
\begin{bmatrix}
x_{1} \\ y_{1} \\ z_{1}
\end{bmatrix}
\begin{bmatrix}
x_{2} \\ y_{2} \\ z_{2}
\end{bmatrix}
\begin{bmatrix}
x_{2} \\ y_{2} \\ z_{2}
\end{bmatrix}
$$
$$
\begin{bmatrix}
p^x_{1} \\ p^y_{1} \\ p^z_{1}
\end{bmatrix}
\begin{bmatrix}
p^x_{2} \\ p^y_{2} \\ p^z_{2}
\end{bmatrix}
\begin{bmatrix}
p^x_{2} \\ p^y_{2} \\ p^z_{2}
\end{bmatrix}
$$

Efter att ha bestämt startpositionen för systemet görs dessa 3 steg om och om tills ett visst kriterium har uppnåtts
1. Beräkna alla krafter som finns i systemet
2. Uppdatera rörelsemängden för varje kropp efter en liten tid $\Delta t$
3. Uppdatera positionen för varje kropp efter en liten tid $\Delta t$

Kriterierna som kan användas är, i denna ordning
1. Om kropparna är för långt ifrån varandra kan simulationen stoppas och värdena kastas bort
2. Om alla tre kroppar når sin ursprungliga position med samma rörelsemängd är systemet periodisk och sparas
3. Om en lång tid har gått kan systemet antas vara för kaotiskt och kastas bort