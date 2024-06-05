---
sidebar_position: 10
---

# core-dom

La partie `core-dom` de `@lithium-framework/core` se concentre sur la gestion du DOM en utilisant des fonctionnalités avancées de `lit-html` pour le rendu de templates, les directives pour des comportements dynamiques, les utilitaires pour des tâches courantes, et un système de routage léger pour les applications à page unique (SPA). Voici quelques exemples pour commencer :

## Premier rendu

Utilisez `html` et `render` pour créer et afficher des composants dynamiques.

```typescript
import { html, render } from '@lithium-framework/core-dom';

function Hello({ name }) {
  return html`
    <div>
      <p>Hello ${name} !</p>
    </div>
  `;
}

render(Hello({ name: 'World' }), document.body);
```

## Utilisation des directives
Les directives dans `@lithium-framework/core-dom` permettent de manipuler le DOM de manière déclarative et réactive. Importez les directives nécessaires pour ajouter des comportements dynamiques à vos templates.

```typescript
import { when } from '@lithium-framework/core-dom/directives';

function MyComponent( promise:Promise<any> ) {
  return html`
    <div>
      ${when(promise , ( result ) => html`...`)}
    </div>
  `;
}
```

## Utilisation des utilitaires
Les utilitaires fournissent des fonctions pratiques pour simplifier les tâches courantes.

```typescript
import { ... } from '@lithium-framework/core-dom/utils';
```

## Utilisation du routeur
Le routeur de `@lithium-framework/core-dom` permet de gérer facilement la navigation dans les applications à page unique (SPA). Créez des routes et gérez la navigation avec des composants réactifs.

```typescript
import { Routes, RouteConfig } from '@lithium-framework/core-dom/router';

const routes: RouteConfig[] = [
  {
    path: '/',
    render: () => html`<p>Home Page</p>`,
  },
  {
    path: '/about',
    render: () => html`<p>About Page</p>`,
  },
];

function AppRouter() {
  return html`
    <lithium-router .config=${routes}></lithium-router>
  `;
}

render(AppRouter(), document.body);
```