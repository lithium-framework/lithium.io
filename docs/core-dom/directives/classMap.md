## **Introduction**

**`classMap`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de conditionner l'application de classes CSS à un élément en fonction d'un objet de mapping de classes.

## **Utilisation**

La directive **`classMap`** peut être utilisée dans les templates HTML pour conditionner l'application de classes CSS à un élément en fonction d'un objet de mapping de classes. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { classMap } from '@lithium-framework/core/directives';

const classes = {
  active: true,
  'text-bold': false,
  'bg-red': true,
};

// Utilisation de classMap dans le template
const template = html`
  <div class=${classMap(classes)}>
    <p>Contenu avec classes conditionnelles</p>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);

```

Dans cet exemple :

- L'objet **`classes`** contient un mapping de classes CSS avec des clés représentant le nom des classes et des valeurs booléennes indiquant si la classe doit être appliquée.
- La directive **`classMap`** est utilisée pour appliquer dynamiquement les classes CSS à l'élément **`<div>`** en fonction du mapping défini dans **`classes`**.