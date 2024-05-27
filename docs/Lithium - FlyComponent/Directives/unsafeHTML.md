## **Introduction**

**`unsafeHTML`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet d'insérer du HTML non échappé dans le DOM, permettant ainsi de rendre du contenu HTML brut. **Attention** : L'utilisation de **`unsafeHTML`** peut introduire des vulnérabilités XSS (Cross-Site Scripting) si le contenu inséré n'est pas contrôlé.

## **Utilisation**

La directive **`unsafeHTML`** peut être utilisée dans les templates HTML pour insérer du HTML brut dans le DOM. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { unsafeHTML } from '@lithium-framework/core/directives';

const rawHTML = '<p style="color: red;">Ceci est un texte rouge.</p>';

// Utilisation de unsafeHTML dans le template
const template = html`
  <div>
    <h1>Insertion de HTML non échappé</h1>
    ${unsafeHTML(rawHTML)}
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);
```

Dans cet exemple :

- La variable **`rawHTML`** contient une chaîne de caractères avec du HTML brut.
- La directive **`unsafeHTML`** est utilisée pour insérer le contenu de **`rawHTML`** dans le DOM à l'endroit spécifié dans le template.

## **Attention**

L'utilisation de **`unsafeHTML`** peut introduire des vulnérabilités XSS (Cross-Site Scripting) si le contenu inséré provient de sources non fiables. Assurez-vous de valider et de nettoyer le contenu HTML brut avant de l'insérer dans le DOM pour éviter les failles de sécurité.