## **Introduction**

**`ref`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de référencer des éléments DOM afin de les manipuler directement dans le code JavaScript.

## **Utilisation**

La directive **`ref`** peut être utilisée dans les templates HTML pour obtenir une référence à un élément DOM. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { ref , createRef } from '@lithium-framework/core/directives';

const myElementRef: Ref<HTMLElement> = createRef();

function handleClick() {
  if (myElementRef.value) {
    myElementRef.value.style.color = 'red';
  }
}

// Utilisation de ref dans le template
const template = html`
  <div>
    <h1>Référencement d'un élément</h1>
    <p ${ref(myElementRef)}>Ce texte deviendra rouge quand vous cliquez sur le bouton.</p>
    <button @click=${handleClick}>Cliquez moi</button>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);
```

Dans cet exemple :

- **`createRef`** est utilisé pour créer une référence (**`myElementRef`**) à un élément DOM.
- La directive **`ref`** est utilisée pour lier **`myElementRef`** à l'élément **`<p>`**.
- La fonction **`handleClick`** manipule directement l'élément DOM référencé pour changer sa couleur en rouge lorsqu'un bouton est cliqué.