---
{"dg-publish":true,"permalink":"/main/gymnasiearbete/kod/","tags":["gymnasie-arbete","fysik","matematik","programmering"]}
---

```rust
Body {
	r: Vector3, // Position
	v: Vector3, // Hastighet
	a: Vector3, // Acceleration
}
```

$$
\begin{align*}
\boldsymbol{F}_{i} &= \sum_{j \neq i}^N G \cdot \frac{m_{1} \cdot m_{2}}{ |\boldsymbol{r}_{j} - \boldsymbol{r}_{i}|^2 } \cdot \hat{\boldsymbol{r}} \quad \text{d\"{a}r $N$ är det totala antalet kroppar} \\
\boldsymbol{F}_{i} &= \sum_{j \neq i}^N \frac{\boldsymbol{r}_{j} - \boldsymbol{r}_{i}}{ |\boldsymbol{r}_{j} - \boldsymbol{r}_{i}|^3 }
\end{align*}
$$

```rust
for i in 0..bodies.len() {
	bodies[i].a = 0;
	for j in 0..bodies.len() {
		if (i != j) {
			let r = (bodies[j].r - bodies[i].r)
			bodies[i].a += r / r.magnitude().powi(3);
		}
	}
}
```

```rust
DELTA_T = 0.0001;
loop {
	for i in 0..bodies.len() {
		// Räkna ut acceleration
	}

	for body in bodies {
		body.v += body.a * DELTA_T;
		body.r += body.v * DELTA_T;
	}
}
```