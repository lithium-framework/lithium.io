## **Introduction**

**`repeat`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de générer des listes d'éléments de manière performante en utilisant des clés pour optimiser les mises à jour du DOM.

## **Utilisation**

La directive **`repeat`** peut être utilisée dans les templates HTML pour générer des listes d'éléments de manière performante. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { repeat } from '@lithium-framework/core/directives';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Utilisation de repeat dans le template
const template = html`
  <div>
    <h1>Liste d'éléments</h1>
    <ul>
      ${repeat(
        items,
        item => item.id,
        item => html`<li>${item.name}</li>`
      )}
    </ul>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- Le tableau **`items`** contient une liste d'objets avec des identifiants uniques.
- La directive **`repeat`** est utilisée pour générer de manière performante une liste d'éléments **`<li>`** à partir du tableau **`items`**.
- La fonction **`item => item.id`** est utilisée pour fournir une clé unique pour chaque élément, ce qui permet à Lit d'optimiser les mises à jour du DOM.
- La fonction **`item => html`** est utilisée pour générer le contenu HTML de chaque élément de la liste.