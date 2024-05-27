## **Introduction**

**`styleMap`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet d'appliquer des styles en ligne à un élément en utilisant un objet de styles.

## **Utilisation**

La directive **`styleMap`** peut être utilisée dans les templates HTML pour appliquer des styles en ligne à un élément en utilisant un objet de styles. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { styleMap } from '@lithium-framework/core/directives';

const styles = {
  color: 'blue',
  backgroundColor: 'lightgray',
  padding: '10px',
  borderRadius: '5px',
};

// Utilisation de styleMap dans le template
const template = html`
  <div>
    <h1>Application de styles en ligne</h1>
    <p style=${styleMap(styles)}>Ce texte est stylé avec styleMap.</p>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);
```

Dans cet exemple :

- L'objet **`styles`** contient des paires clé-valeur représentant des propriétés CSS et leurs valeurs.
- La directive **`styleMap`** est utilisée pour appliquer les styles définis dans **`styles`** à l'élément **`<p>`**. Chaque propriété CSS de l'objet **`styles`** est appliquée en tant que style en ligne à l'élément.