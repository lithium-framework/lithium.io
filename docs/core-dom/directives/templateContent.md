## **Introduction**

**`templateContent`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet d'insérer le contenu d'un élément **`<template>`** dans le DOM, en préservant les balises et leur structure.

## **Utilisation**

La directive **`templateContent`** peut être utilisée dans les templates HTML pour insérer le contenu d'un élément **`<template>`** dans le DOM. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { templateContent } from '@lithium-framework/core/directives';

// Template HTML
const template = document.createElement('template');
template.innerHTML = `
  <div>
    <p>Contenu du template.</p>
  </div>
`;

// Utilisation de templateContent dans le template
const templateView = html`
  <div>
    <h1>Insertion de contenu de template</h1>
    ${templateContent(template)}
  </div>
`;

// Rendu du template dans le DOM
render(templateView, document.body);

```

Dans cet exemple :

- Un élément **`<template>`** est créé avec du contenu HTML.
- La directive **`templateContent`** est utilisée pour insérer le contenu de l'élément **`<template>`** dans le DOM à l'endroit spécifié dans le template **`templateView`**.