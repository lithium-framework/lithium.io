# sample - counter

## Exemple de compteur

Cet exemple montre comment créer un compteur interactif en utilisant `createState`, `useState` et `useStyle`.

```typescript
import { html, render, createState } from '@lithium-framework/core-dom';
import { useState, useStyle } from '@lithium-framework/core-dom/directives';

function MyCounter() {
  let [counter, setCounter] = createState<number>(0);

  return html`
    <div style=${useStyle({ display: 'flex' })}>
      <p>${useState(counter)}</p>
      <button @mousedown=${() => setCounter(counter + 1)}>Add</button>
    </div>
  `;
}

render(MyCounter(), document.body);
```

## Explication :

- createState : Crée un état réactif pour le compteur.
- useState : Rend l'état réactif dans le template.
- useStyle : Applique des styles en ligne de manière réactive.
- setCounter : Met à jour l'état du compteur lorsqu'on clique sur le bouton.