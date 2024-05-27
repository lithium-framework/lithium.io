## **Introduction**

**`guard`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de conditionner l'affichage du contenu en fonction de plusieurs expressions conditionnelles.

## **Utilisation**

La directive **`guard`** peut être utilisée dans les templates HTML pour conditionner l'affichage du contenu en fonction de plusieurs expressions conditionnelles. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { guard } from '@lithium-framework/core/directives';

const condition1 = true;
const condition2 = false;

// Utilisation de guard dans le template
const template = html`
  <div>
    <h1>Contenu conditionnel</h1>
    ${guard(
      condition1,
      condition2,
      html`<p>Contenu affiché si toutes les conditions sont vraies</p>`,
      html`<p>Contenu affiché si au moins une condition est fausse</p>`
    )}
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- Les variables **`condition1`** et **`condition2`** déterminent si les conditions sont vraies ou fausses.
- La directive **`guard`** est utilisée pour afficher le contenu en fonction des valeurs des conditions. Si toutes les conditions sont vraies, le premier argument de **`guard`** est affiché ; sinon, le deuxième argument est affiché.