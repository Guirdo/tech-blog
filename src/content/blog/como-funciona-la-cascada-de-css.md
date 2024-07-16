---
title: Cómo funciona la cascada de CSS
author: guirdo
description: La cascada es el algoritmo que decide que estilo tiene prioridad sobre otro.
tags: [CSS]
date: 2023-03-10 12:00:00 -06:00
image: https://res.cloudinary.com/dyuo7wfyi/image/upload/h_200,c_scale/v1678499519/website/articles/cascade_wlvqfd.webp 
imageAlt: Cascada de CSS
---
Empecemos con un ejemplo sencillo. Tenemos dos títulos, ambos con la clase `title`.

```html
<h2 class="title">
	Hola, esto es un título
</h2>

<h2 class="title" style="color: green">
	Hola, esto es otro título
</h2>
```

Y tenemos nuestro código CSS que hemos incluido en el `head` de nuestro html:

```css
.title {
	color: blue;
}

h2 {
	color:hotpink;
}
```

Tenemos declarado un color para la clase `title`, tenemos otro para los elementos `h2`, y además el segundo título tiene una declaración de estilos inline. **¿Qué color saldrá ganador para cada uno de los títulos?** Tómate tu tiempo y después puedes confirmar tu respuesta en seguida.

<details>
  <summary>Descubre la respuesta aquí</summary>
  <iframe height="400" style="width: 100%;" scrolling="no" title="cascada_1" src="https://codepen.io/Guirdo/embed/MWqEZMM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/Guirdo/pen/MWqEZMM">
    cascada_1</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>

  En el primer título ha ganado el color azul, y para el segundo el color verde. 
</details>

¿Por qué ha sucedido esto? Para el primero ha ganado el estilo por la especificidad del selector de clase que es más alta que la de un selector de elemento. En cambio, el segundo titulo ha resultado verde a pesar de que tiene la clase `title`, aquí la cascada has decido que el estilo inline que tiene este elemento es el ganador.

Ahora, si tenemos un proyecto más complejo donde trabajamos con un equipo con diferentes personas, y que pueden existir muchos más conflictos, o incluso hablando de un proyecto superpersonalizado como puede ser tu web personal o para un cliente, ahí es donde entender la cascada nos ahorrara varios malos ratos.

## ¿Qué es la cascada en CSS?

En simples palabras, **la cascada es el algoritmo que decide que estilo tiene prioridad sobre otro**. Esta contiene distintos pasos que determinan que estilos se van aplicar a nuestros documentos HTML. Visualmente sería algo parecido a la siguiente imagen, donde algunos chorros de agua caen desde distintas alturas en la misma cascada.


![Una cascada entre unas rocas, donde el agua cae de distintas alturas](https://res.cloudinary.com/dyuo7wfyi/image/upload/v1678499519/website/articles/cascade_wlvqfd.webp)

## Pasos de la cascada

Estas serían las “caídas” de la cascada de CSS, empezando desde las más prioritarias:

### **Origen e importancia**

Este primer criterio esta basado en el origen de los estilos y de si son declarados como importantes o no, con el uso de `!important`.

1. **Declaración de transiciones:** aquellas, que con el uso de la propiedad `transition` , declaran la forma en que las propiedades de un selector se modifican con un tiempo y forma determinado.
2. **Declaraciones importantes del *user agent*:** estas son las que cada navegador aplica por defecto a los documentos HTML con `!important`.
3. **Declaraciones importantes del usuario:** las que el usuario mismo de nuestras páginas puede aplicar, ya sea con una extensión o a través de las herramientas de desarrollo del navegador.
4. **Declaraciones importantes del autor:** o sea, nosotros los desarrolladores que escribimos el código. 
5. **Declaraciones de animaciones:** esas que creamos a partir de `keyframes` y describimos de que forma las propiedades de un elemento cambiaran a través del tiempo.
6. **Declaraciones normales del autor.**
7. **Declaraciones normales del usuario.**
8. **Declaraciones normales del *user agent.***

### **Contexto**

Este se refiere al contexto en que los elementos están agrupados dentro del DOM, donde podemos tener *shadow trees*. Estos sub-arboles del DOM están encapsulados y pueden contener sus propios estilos sin afectar a los del árbol principal.

Veamos el siguiente ejemplo. Puse un titulo nativo con un color purpura que obtiene de la clase `title`. Luego creé un componente web llamado `mi-titulo` en un *shadow tree*, añadiéndole una clase con el mismo nombre que la anterior y además le agregue la propiedad `!important`.

<iframe height="400" style="width: 100%;" scrolling="no" title="cascada-webc-example" src="https://codepen.io/Guirdo/embed/JjaOjxx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Guirdo/pen/JjaOjxx">
  cascada-webc-example</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Si abres las herramientas de desarrollo del navegador podrás notar que mi componente web esta encapsulado en un `shadow-root`, por lo que existe en un contexto diferente al del resto del DOM. Es por eso que la regla `!important` dentro de este componente no afecta al título fuera de él.

### **Estilos `inline` de los elementos**

Estos son lo que encontramos adjuntos a los elementos en el mismo documento HTML, y su origen se considera parte de los estilos del autor. **Su especificidad es mucho más alta que cualquier otro selector**. De este caso ya vimos un ejemplo al principio.

### **Layers**

Layers, o capas en español, son una característica que recientemente se ha agregado a la [especificación de la cascada y herencia de CSS nivel 5](https://www.w3.org/TR/css-cascade-5/#layering). Las capas nos proveen una forma estructurada de balancear y organizar los estilos que provienen de un mismo origen.

**Entre los layers gana la que sea declarada al último**, y dentro de ellas siguen las misma reglas que en el criterio de origen e importancia. Las últimas declaraciones normales ganan, y con las importantes ganan las primeras.

<iframe height="400" style="width: 100%;" scrolling="no" title="cascada-layers" src="https://codepen.io/Guirdo/embed/xxaPbpx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Guirdo/pen/xxaPbpx">
  cascada-layers</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

En el ejemplo anterior podrás notar que agregué tres layers (`layerA`, `layerB` y `layerC`), pero en la primera línea del documento CSS declaré de forma explícita el orden con el cual deben ser interpretados. Como puse el `layerB` en la última posición se han aplicado sus estilos, pero sin esa primera línea hubiera ganado el `layerC`.

### Especificidad

La especificidad es calculada a partir del valor de cada tipo de los selectores. Esta da como resultado una triada de números (A, B, C) que representan que tan específica es una combinación de selectores. Donde:

- A representa a los selectores de ID.
- B representa a los selectores de clase, de atributo y pseudo-clases.
- C representa a los elementos y pseudo-elementos.

La combinación de selectores con el número más alto de especificidad gana.

```css
#greeting {/**/} /*(1, 0 ,0) */
#greeting::before {/**/} /* (1, 0, 1) */

nav > a:hover::before {/**/} /* (0, 1, 3) */

.text {/**/} /* (0, 1, 0) */
```

### Orden de aparición

Si ninguna de todas las anteriores resuelve el conflicto entre estilos, **la cascada le dará la victoria al último estilo que aparezca declarado**. Aquí también entra en juego la regla `@import`, pues su posición también afecta al orden de aparición. Por ejemplo:

```css
@import 'blocks.css';
@import 'utilities.css';
```

Aquí las declaraciones dentro de `utilities` serán las ganadoras sobre las de `blocks` porque las hemos importado al último en nuestro documento global de CSS. Parecido a como lo vimos con los layers, cuando declaramos su orden de forma explícita.

## Para terminar

Las cascada de CSS, que es de ahí de donde saca la “C”, es una parte fundamental de entender para cuando creemos nuestros estilos. En este artículo te resumí muy brevemente como funciona y la verdad es que este tema abre la oportunidad para hablar de los demás que la componen. 

Próximamente compartiré nuevos artículos más detallados sobre la especificidad y los layers, y otras cosas interesantes sobre CSS para ahorrarte los momentos de “no tengo idea que estoy haciendo” con este poderoso lenguaje.

Hasta la próxima, y sigue construyendo la web 🌐.

### Referencias

* [CSS Cascading and Inheritance Level 5](https://www.w3.org/TR/css-cascade-5/)
* [CSS Style Attributes](https://www.w3.org/TR/css-style-attr/)
* [Usando shadow DOM](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM)
* [Youtube: The CSS Cascade, a deep dive | Bramus Van Damme | CSS Day 2022](https://www.youtube.com/watch?v=zEPXyqj7pEA)
