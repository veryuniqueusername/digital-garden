---
{"dg-publish":true,"permalink":"/main/matematik/uppgifter/3-deriveringsregler/","tags":["matematik"]}
---

## 3248

> [!question] Uppgift
> För vilka värden på konstanten $c$ har funktionen $f(x)=x^3-x+c$ en tangent med riktningskoefficienten $2$ som dessutom går genom origo?

Först derivera $f(x)$

$$
\begin{align*}
f(x) &= x^3-x+c \\
f^\prime(x) &= 3x^2-1
\end{align*}
$$

Vid $x$ måste $f^\prime(x)=2$, och $f(x)=2x$ eftersom linjen ska gå genom origo.

$$
\begin{cases*}
3x^2-1 = 2 \\
x^3-x+c = 2x
\end{cases*}
$$

Lös för $x$

$$
\begin{align*}
3x^2-1 &= 2 \\
3x^2 &= 3 \\
x^2 &= 1 \\
x &= \pm 1
\end{align*}
$$

Använd denna $x$ för att lösa för $c$

$$
\begin{align*}
x^3-x+c &= 2x \\
c &= -x^3+3x \\
c_{1} &= -1^3 + 3 \cdot 1 = 2 \\
c_{2} &= -(-1)^3 + 3 \cdot (-1) = -2 \\
\end{align*}
$$

> [!note] Svar
> $c_{1}=2 , \ c_{2}=-2\quad$ genom punkterna $(1,2)$ respektive $(-1,-2)$