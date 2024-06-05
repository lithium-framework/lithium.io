## **Introduction**

**`choose`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de conditionner l'affichage du contenu en fonction d'une expression conditionnelle.

## **Utilisation**

La directive **`choose`** peut être utilisée dans les templates HTML pour conditionner l'affichage du contenu en fonction d'une expression conditionnelle. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { choose } from '@lithium-framework/core/directives';

const condition = true;

// Utilisation de choose dans le template
const template = html`
  <div>
    <h1>Choix du contenu</h1>
    ${choose(
      condition,
      html`<p>Contenu si la condition est vraie</p>`,
      html`<p>Contenu si la condition est fausse</p>`
    )}
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- La variable **`condition`** détermine si la condition est vraie ou fausse.
- La directive **`choose`** est utilisée pour afficher le contenu en fonction de la valeur de **`condition`**. Si **`condition`** est vraie, le premier argument de **`choose`** est affiché ; sinon, le deuxième argument est affiché.