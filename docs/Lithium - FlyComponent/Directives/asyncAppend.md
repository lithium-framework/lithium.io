## **Introduction**

**`asyncAppend`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet d'ajouter de manière asynchrone du contenu à un élément DOM, à mesure que les données deviennent disponibles.

## **Utilisation**

La directive **`asyncAppend`** peut être utilisée dans les templates HTML pour ajouter du contenu dynamique de manière asynchrone. Voici un exemple simple :

```tsx
import { html, render } from '@lithium-framework/core';
import { asyncAppend } from '@lithium-framework/core/directives';
import { fetchPosts } from './api'; // Fonction qui retourne une promesse de liste de posts

async function renderPosts() {
  const posts = await fetchPosts(); // Appel asynchrone à l'API pour récupérer les posts
  return html`
    <ul>
      ${posts.map(post => html`<li>${post.title}</li>`)}
    </ul>
  `;
}

// Utilisation de asyncAppend dans le template
const template = html`
  <div>
    <h1>Liste des posts</h1>
    <div>
      ${asyncAppend(renderPosts())}
    </div>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);
```

Dans cet exemple :

- La fonction **`renderPosts`** effectue une opération asynchrone (par exemple, une requête réseau) pour récupérer une liste de posts.
- La directive **`asyncAppend`** est utilisée pour ajouter de manière asynchrone le contenu généré par **`renderPosts`** à l'élément **`<div>`** du template.
- Lorsque les données deviennent disponibles, la directive met à jour de manière asynchrone le contenu de l'élément DOM.