## **Introduction**

**`range`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de générer une séquence de nombres entiers.

## **Utilisation**

La directive **`range`** peut être utilisée dans les templates HTML pour générer une séquence de nombres entiers. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { range } from '@lithium-framework/core/directives';

// Utilisation de range dans le template
const template = html`
  <div>
    <h1>Séquence de nombres</h1>
    <ul>
      ${range(1, 5).map((num) => html`<li>${num}</li>`)}
    </ul>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- La directive **`range`** est utilisée pour générer une séquence de nombres entiers de 1 à 5.
- En utilisant la méthode **`map`**, chaque nombre dans la séquence est transformé en un élément **`<li>`** dans une liste **`<ul>`**.