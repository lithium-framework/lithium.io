## **Introduction**

**`until`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de rendre un contenu temporaire jusqu'à ce qu'une promesse soit résolue, offrant une manière élégante de gérer le rendu de contenu asynchrone.

## **Utilisation**

La directive **`until`** peut être utilisée dans les templates HTML pour rendre du contenu temporaire jusqu'à ce qu'une promesse soit résolue. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { until } from '@lithium-framework/core/directives';

// Une fonction simulant une requête asynchrone
const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve('Données chargées !'), 2000);
});

// Utilisation de until dans le template
const template = html`
  <div>
    <h1>Chargement asynchrone</h1>
    <p>${until(fetchData, html`<span>Chargement...</span>`)}</p>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- La fonction **`fetchData`** simule une requête asynchrone qui se résout après 2 secondes.
- La directive **`until`** est utilisée pour afficher le message "Chargement..." jusqu'à ce que **`fetchData`** soit résolue. Une fois résolue, le contenu de la promesse (**`'Données chargées !'`**) est affiché.