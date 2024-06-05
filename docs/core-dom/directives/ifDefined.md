## **Introduction**

**`ifDefined`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de conditionner l'affichage du contenu en fonction de la définition d'une variable ou d'une propriété.

## **Utilisation**

La directive **`ifDefined`** peut être utilisée dans les templates HTML pour conditionner l'affichage du contenu en fonction de la définition d'une variable ou d'une propriété. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { ifDefined } from '@lithium-framework/core/directives';

const value = 'Hello';

// Utilisation de ifDefined dans le template
const template = html`
  <div>
    <h1>Affichage conditionnel</h1>
    <p>${ifDefined(value)}</p>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- La variable **`value`** contient une chaîne de caractères.
- La directive **`ifDefined`** est utilisée pour afficher le contenu de **`value`** uniquement si **`value`** est défini. Si **`value`** est **`null`** ou **`undefined`**, aucun contenu n'est affiché.