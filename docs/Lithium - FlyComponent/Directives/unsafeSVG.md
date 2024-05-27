## **Introduction**

**`unsafeSVG`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet d'insérer du contenu SVG non échappé dans le DOM, permettant ainsi de rendre du contenu SVG brut. **Attention** : L'utilisation de **`unsafeSVG`** peut introduire des vulnérabilités XSS (Cross-Site Scripting) si le contenu inséré n'est pas contrôlé.

## **Utilisation**

La directive **`unsafeSVG`** peut être utilisée dans les templates HTML pour insérer du contenu SVG brut dans le DOM. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { unsafeSVG } from '@lithium-framework/core/directives';

const rawSVG = `
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>
`;

// Utilisation de unsafeSVG dans le template
const template = html`
  <div>
    <h1>Insertion de SVG non échappé</h1>
    ${unsafeSVG(rawSVG)}
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- La variable **`rawSVG`** contient une chaîne de caractères avec du contenu SVG brut.
- La directive **`unsafeSVG`** est utilisée pour insérer le contenu de **`rawSVG`** dans le DOM à l'endroit spécifié dans le template.

## **Attention**

L'utilisation de **`unsafeSVG`** peut introduire des vulnérabilités XSS (Cross-Site Scripting) si le contenu inséré provient de sources non fiables. Assurez-vous de valider et de nettoyer le contenu SVG brut avant de l'insérer dans le DOM pour éviter les failles de sécurité.