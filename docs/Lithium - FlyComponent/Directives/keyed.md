## **Introduction**

**`keyed`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet d'optimiser le rendu d'une liste d'éléments en utilisant des clés uniques pour chaque élément.

## **Utilisation**

La directive **`keyed`** peut être utilisée dans les templates HTML pour optimiser le rendu d'une liste d'éléments en utilisant des clés uniques pour chaque élément. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { keyed } from '@lithium-framework/core/directives';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Utilisation de keyed dans le template
const template = html`
  <div>
    <h1>Liste d'éléments</h1>
    <ul>
      ${keyed(
        items,
        (item) => item.id,
        (item) => html`<li>${item.name}</li>`
      )}
    </ul>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- Le tableau **`items`** contient une liste d'éléments avec des identifiants uniques.
- La directive **`keyed`** est utilisée pour optimiser le rendu de la liste en utilisant les identifiants uniques comme clés. Cela permet à Lit de mettre à jour efficacement la liste lorsque les données changent.