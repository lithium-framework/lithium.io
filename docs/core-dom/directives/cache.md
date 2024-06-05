## **Introduction**

**`cache`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de mettre en cache le résultat d'un rendu pour éviter les calculs répétés lors de l'affichage de contenu statique ou peu fréquemment modifié.

## **Utilisation**

La directive **`cache`** peut être utilisée dans les templates HTML pour mettre en cache le contenu statique ou peu modifié. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { cache } from '@lithium-framework/core/directives';

function renderStaticContent() {
  console.log('Rendering static content...');
  return html`<div>Contenu statique</div>`;
}

// Utilisation de cache dans le template
const template = html`
  <div>
    <h1>Contenu statique mis en cache</h1>
    ${cache(renderStaticContent())}
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- La fonction **`renderStaticContent`** génère du contenu statique.
- La directive **`cache`** est utilisée pour mettre en cache le résultat de **`renderStaticContent`**. Lorsque la directive est évaluée, elle vérifie si le contenu est déjà en cache. Si c'est le cas, le contenu mis en cache est directement utilisé ; sinon, le contenu est généré par **`renderStaticContent`** puis mis en cache pour les appels ultérieurs.
- Le contenu statique est affiché dans l'élément **`<div>`** du template.