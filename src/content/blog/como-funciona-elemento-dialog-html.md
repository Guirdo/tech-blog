---
title: "Cómo funciona el elemento dialog de HTML"
author: guirdo
description: Breve introducción al elemento dialog de HTML y algunas consideraciones que tomar en cuenta antes de utilizarlo
tags: [html,frontend]
date: 2023-09-14 13:30:00 -06:00
image: https://res.cloudinary.com/dyuo7wfyi/image/upload/h_200,c_scale/v1694715914/website/articles/dialog-html_rhek1c.webp
imageAlt: "¿Qué es el elemento dialog de HTML?"
---

Los cuadros de diálogo son otra parte importante de las páginas web hoy en día. Los has visto cuando visitas una página y lo primero que te sale es el cuadro donde te informan que utilizan cookies. Otro ejemplo de ellos es cuando estamos en una página del gobierno y sale un diálogo que nos avisa que nuestra sesión esta por expirar.

En este artículo te hablaré de cómo utilizar el elemento `dialog` de HTML, qué consideraciones debes tomar antes de utilizarlos y demás características que nos ofrece este elemento para crear cuadros de diálogo en nuestra páginas web de forma nativa.

## Qué es el elemento `dialog`

El elemento `dialog` nos sirve para crear cuadros de diálogo en HTML. Los cuadros de diálogo sirven para pedir al usuario un dato, una confirmación o mostrar información de forma breve, además interrumpen el flujo normal de usuario en la página.

Para utilizarlo en nuestro documentos HTML, simplemente agregamos una etiqueta `dialog`. Este elemento también incluye la propiedad `open`, la cuál muestra el cuadro de diálogo sin la necesidad de JavaScript.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWJprzX" data-user="Guirdo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Guirdo/pen/QWJprzX">
  dialog-01</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Para cerrar un elemento `dialog`, necesitamos utilizar el método `close()` en JavaScript.

## Consideraciones antes de utilizar `dialog`

Antes si quiera de explicar con más detalles sobre este elemento, quiero darte unas recomendaciones de cuando sí y cuando no utilizarlo, ya que este elemento interrumpe el flujo normal de navegación del usuario en nuestras páginas, por lo que hacer mal uso de este puede ser contraproducente.

Los cuadros de diálogo se utilizan para tareas muy sencillas y específicas. Entre esas tareas se encuentran mostrar información importante, confirmaciones y la obtención de datos del usuario de forma breve.

**Utilizalos para:**
  * Enfocar la atención del usuario en algo en específico.
  * Obtener datos del usuario de forma breve.
  * Pedir al usuario su confirmación.
  * Mostrar información relevante y concisa.

**No lo utilices si:**

  * No estas mostrando información relevante al flujo actual del usuario.
  * Solicitas al usuario una gran cantidad de datos.
  * Planeas usarlo como reemplazo de páginas o apps enteras.
  * El usuario no lo puede invocar.

Teniendo esto en cuenta, podemos continuar con las siguientes características de este elemento.

## Tipos de elementos `dialog`

Existen dos tipos de elementos `dialog`, que son el modal y el no-modal. A continuación veremos sus principales características y diferencias entre sí.

### Modal

El tipo modal es aquel que se posiciona sobre todo los demás elementos de nuestra página y atrapa por completo el flujo y el enfoque (o focus) del usuario.

Para crear un `dialog` de tipo modal necesitamos hacerlo con JavaScript, con el método `showModal()`. 

Para cerrarlo existen dos opciones: la primera es colocar un botón que invoque al método `close()` y la segunda es que el usuario presione la tecla `Escape` en su teclado.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="zYMZaqz" data-user="Guirdo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Guirdo/pen/zYMZaqz">
  dialog-02</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Este elemento `dialog` se posicionará al centro de la pantalla y contará con el pseudo-elemento `::backdrop`, que es una caja, del tamaño del `viewport`, que se renderiza debajo de los elementos que se encuentran en el `top-layer`.

<aside>
💡 El `top-layer` o capa superior es una capa que los navegadores crean para colocar elementos que deben estar sobre todos los demás elementos de la página.
</aside>

### No modal

Un `dialog` de tipo no modal no será colocado en el `top-layer` , sino que su posición frente a los demás elementos se manejará con el `z-index` . Esto significa que no interrumpirá por completo el flujo normal del usuario. Este tipo de cuadros de dialogo se ocupan para mostrar información no crítica o tareas opcionales. 

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="gOQRjGO" data-user="Guirdo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Guirdo/pen/gOQRjGO">
  dialog-03</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Para abrir un diálogo no modal debemos utilizar el método `show()` . Para cerrarlo solo podemos hacerlo con el método `close()`, por lo que necesitaremos un botón para que el usuario pueda cerrarlo.

## Cómo obtener datos desde un `dialog`

Para obtener una entrada por parte del usuario, podemos utilizar un elemento `form` dentro de un `dialog`. El `form` utilizará el `method=dialog` y dentro tendrá botones con los valores que queremos que el usuario responda a nuestro formulario. Checa el siguiente ejemplo:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="WNLpYXm" data-user="Guirdo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Guirdo/pen/WNLpYXm">
  dialog-04</a> by Sebastian Méndez (<a href="https://codepen.io/Guirdo">@Guirdo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

En JavaScript podemos utilizar la propiedad `dialog.returnValue`, que guardará el valor del botón que haya presionado el usuario. Como lo habrás notado, en el evento `close` es necesario reiniciar el valor de `dialog.returnValue`.

Por defecto los botones son de tipo `submit` , sobre todo cuando están dentro de un elemento `form`, es por ello que junto a `form method=”dialog”`, el elemento `dialog` se cierra sin utilizar el método `close()` .

Como mencioné más arriba, la tecla `Escape` es otra opción para cerrar los diálogos de tipo modal, pero además detona al evento `cancel` y después el evento `close`. 

## Para terminar

Recapitulando, te recuerdo que debes utilizar este elemento con responsabilidad, ya que el diálogo puede ser un elemento molesto si lo ocupas demasiado. También evita sobrecargar los diálogos de mucha información o tareas complejas. 

Te invito a consultar las referencias que te dejo abajo para que profundices en estos detalles de experiencia de usuario.

Hasta aquí termina el artículo de hoy. Espero que haya sido útil y que empieces a utilizarlo en tus proyectos. Sigue construyendo para la web 🌐.

### Referencias

- [📺 Dialog dilemmas and modal mischief: a deep dive into popovers](https://www.youtube.com/watch?v=XaO2mZnIOzs): conferencia parte del CSS Day 2023 impartida por Hiddie de Vries
- [Modalz modalz modalz](https://modalzmodalzmodalz.com/): página que habla sobre que deberíamos dejar de utilizar tantos modales, y da razones para cuando si y cuando no utilizarlo.
- [Carbon Design System - Dialogs](https://carbondesignsystem.com/patterns/dialog-pattern/): página sobre el patrón de los diálogos del sistema de diseño Carbon de IBM.
