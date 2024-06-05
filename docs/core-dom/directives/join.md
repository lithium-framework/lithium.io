## **Introduction**

**`join`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de concaténer des valeurs de tableau en une seule chaîne de caractères, en utilisant un séparateur spécifié.

## **Utilisation**

La directive **`join`** peut être utilisée dans les templates HTML pour concaténer des valeurs de tableau en une seule chaîne de caractères, en utilisant un séparateur spécifié. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { join } from '@lithium-framework/core/directives';

const fruits = ['Apple', 'Banana', 'Orange'];

// Utilisation de join dans le template
const template = html`
  <div>
    <h1>Liste de fruits</h1>
    <p>${join(fruits, ', ')}</p>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- Le tableau **`fruits`** contient des noms de fruits.
- La directive **`join`** est utilisée pour concaténer les valeurs du tableau **`fruits`** en une seule chaîne de caractères, en utilisant **`,`** comme séparateur.