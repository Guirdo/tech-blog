---
title: "Fuentes responsivas con CSS: la función clamp y el escalamiento modular"
author: guirdo
description: Con una simple linea de CSS ajusta el tamaño de fuente a cualquier dispositivo
tags: [a11y, CSS]
date: 2023-05-11 21:30:00 -06:00
image: https://res.cloudinary.com/dyuo7wfyi/image/upload/h_200,c_scale/v1683859555/website/articles/clamp_vr10xj.webp
imageAlt: Fuentes responsivas
---

La parte más importante y de lo que están hechas principalmente nuestras páginas web es el texto. Es a través de este que transmitimos el mensaje que queremos hacer llegar a las personas que nos visitan. Es por eso que debemos asegurarnos de que la fuente que utilicemos sea legible tanto para dispositivos pequeños y grandes, así como para personas con discapacidades visuales.

En este artículo hablaré sobre cómo podemos configurar el tamaño de las fuentes para que este sea responsivo y sobre el escalamiento modular para la jerarquización de los títulos, subtítulos y demás textos.

## Función clamp de CSS

La función clamp de CSS “sujeta” un valor preferido entre un valor mínimo y un máximo. Si el valor preferido llegara a ser más pequeño que el mínimo, tomará el valor mínimo, y si el valor preferido llegara a ser más grande que el valor máximo, no sobrepasará este último. Checa el siguiente ejemplo:

<iframe height="300" style="width: 100%;" scrolling="no" title="clamp-example-01" src="https://codepen.io/Guirdo/embed/mdzXXvo?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Guirdo/pen/mdzXXvo">
  clamp-example-01</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

En este ejemplo, conforme vayamos cambiando el ancho de la ventana, el tamaño de la fuente cambiará de forma fluida. 

El tamaño mínimo para la fuente es de `1rem`, que es equivalente a `16px` en la mayoría de los casos, pero habrá algún usuario que cambiará la preferencias de su navegador y el tamaño preferido sería uno más pequeño o grande.

En el tamaño preferido utilizamos la unidad de medida `vi`, que se refiere al tamaño del *viewport inline*, lo que es igual al ancho de la ventana cuando la dirección de lectura es horizontal. `0.5vi` equivale al 0.5% del ancho del viewport.

Por último, en el tamaño máximo utilizamos `1.5rem`, lo que sería equivalente a incrementar el tamaño de la fuente hasta 1.5 veces.

Y con esta simple línea de CSS nos bastaría para que el tamaño de nuestras fuentes respondan al tamaño de la pantalla y preferencias del usuario. Sin embargo, podemos ir más allá con el siguiente tema.

## Escalamiento modular

El escalamiento modular es un algoritmo que nos permite escalar el tamaño de nuestras fuentes de la misma forma en que en la música se crean las armonías, para así añadir una armonía visual a la jerarquía de los textos.

<iframe height="300" style="width: 100%;" scrolling="no" title="arithmetic-serie" src="https://codepen.io/Guirdo/embed/poxVbPE?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Guirdo/pen/poxVbPE">
  arithmetic-serie</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

En este ejemplo, la diferencia entre cada tamaño de las fuentes es de 0.5rem, la cual es regular y se denomina una **serie aritmética**, pero en la parte visual la diferencia no es cohesiva, pues la proporción entre cada tamaño varia. Por ejemplo, entre el tamaño `--fs-sm = 1rem` y el `--fs-md = 1.5rem` su proporción es de 1.5, pero entre `--fs-xl = 2.5rem` y `--fs-xxl = 3rem` es de 0.83.

Para crear una proporción regular utilizaremos una **serie armónica**, la cual es una secuencia de fracciones basada en una serie aritmética que incrementa por 1.

```html
1,2,3,4,5,6 // Serie aritmética
1,½,⅓,¼,⅕,⅙ // Serie armónica
```

Checa el siguiente ejemplo, utilizando la función clamp:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="RweyRmb" data-editable="true" data-user="Guirdo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Guirdo/pen/RweyRmb">
  harmonic-series</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Primero establecemos la proporción que deseamos en la variable `--ratio` . Luego establecemos un tamaño base, que este caso fue `--fs-md` en el cuál utilizamos la función clamp para que el tamaño se vaya ajustando al tamaño de la pantalla. 

Para disminuir el tamaño de fuente debemos de dividir el tamaño anterior entre el radio, como pasa con `--fs-sm: calc(var(--fs-md) / var(--ratio))` , y así sucesivamente con tamaños más pequeños.

Para incrementar el tamaño debemos multiplicar el tamaño anterior por el radio, como pasa con `--fs-lg: calc(var(--fs-md) * var(--ratio))` , y así sucesivamente con los siguientes tamaños.

## Para terminar

Estos dos temas son uno de los tantos pasos que se necesitan para asegurar la legibilidad de los textos en nuestras páginas web. Espero te haya servido y en seguida te dejo enlaces a artículos relacionados y herramientas que te servirán.

Hasta la proxima, y sigue construyendo para la web 🌐.

### Enlaces útiles

- [Type Scale](https://typescale.com/): herramienta que te ayudará a elegir la proporción que tu proyecto necesita.
- [Modular scale](https://every-layout.dev/rudiments/modular-scale/): artículo sobre el escalamiento modular del proyecto Every Layout.
- [Great Typography with Modern CSS (with Mike Mai) | Some Antics](https://youtu.be/kHgwY5mTHVU): video donde Ben Myers y Mike Mai implementan consensos para la tipografía de las páginas web.