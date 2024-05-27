## **Introduction**

**`map`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de transformer une liste d'éléments en une liste d'éléments HTML en utilisant une fonction de mapping.

## **Utilisation**

La directive **`map`** peut être utilisée dans les templates HTML pour transformer une liste d'éléments en une liste d'éléments HTML en utilisant une fonction de mapping. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { map } from '@lithium-framework/core/directives';

const items = ['Item 1', 'Item 2', 'Item 3'];

// Utilisation de map dans le template
const template = html`
  <div>
    <h1>Liste d'éléments</h1>
    <ul>
      ${map(items, (item, index) => html`<li>${item} (${index + 1})</li>`)}
    </ul>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);
```

Dans cet exemple :

- Le tableau **`items`** contient une liste d'éléments.
- La directive **`map`** est utilisée pour transformer chaque élément de **`items`** en un élément **`<li>`** dans une liste **`<ul>`**. La fonction de mapping reçoit chaque élément et son index dans le tableau, et retourne un élément HTML.