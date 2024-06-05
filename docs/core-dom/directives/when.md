## **Introduction**

**`when`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de rendre du contenu conditionnellement, en fonction d'une expression booléenne.

## **Utilisation**

La directive **`when`** peut être utilisée dans les templates HTML pour rendre du contenu conditionnellement en fonction d'une expression booléenne. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { when } from '@lithium-framework/core/directives';

const isLoggedIn = true;

// Utilisation de when dans le template
const template = html`
  <div>
    <h1>Contenu conditionnel</h1>
    ${when(
      isLoggedIn,
      () => html`<p>Bienvenue, utilisateur connecté !</p>`,
      () => html`<p>Veuillez vous connecter.</p>`
    )}
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- La variable **`isLoggedIn`** détermine si l'utilisateur est connecté.
- La directive **`when`** est utilisée pour rendre conditionnellement du contenu HTML en fonction de la valeur de **`isLoggedIn`**. Si **`isLoggedIn`** est vrai, le message "Bienvenue, utilisateur connecté !" est affiché. Sinon, le message "Veuillez vous connecter." est affiché.