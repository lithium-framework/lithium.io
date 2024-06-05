# router

`lithium-router` est un composant Web basé sur Lit qui utilise le routeur de @lit-labs/router pour gérer la navigation basée sur le hash. Ce composant permet de créer des applications à page unique (SPA) avec un routage imbriqué et une gestion facile des chemins.

## Installation

Pour utiliser `lithium-router` dans votre projet, assurez-vous d'abord d'avoir installé les dépendances nécessaires :

```shell
npm install @lithium-framework/core
// ou
npm install @lithium-framework/core-dom
```

## Utilisation

Voici un exemple de la façon d'utiliser `lithium-router` dans votre application avec `@lithium-framework/core-dom` :

```typescript
import { render , html , RouteConfig } from '@lithium-framework/core-dom';

function MyRouter() {
  const routes:RouteConfig = [
    {
      path: '/',
      render: () => html`<p>Home Page</p>`,
    },
    {
      path: '/about',
      render: () => html`<p>About Page</p>`,
    },
  ];

  return html`
    <lithium-router
      .config=${routes}
      .header=${(router) => html`<header><h1>My App</h1></header>`}
      .footer=${(router) => html`<footer><p>Footer Content</p></footer>`}
    ></lithium-router>
  `;
}

render(MyRouter(), document.body);

```

## Extension du Router

Vous pouvez étendre lithium-router pour ajouter des fonctionnalités ou personnaliser le comportement. Voici un exemple d'extension :

```typescript

import { customElement } from '@lithium-framework/core-dom/directives';
import { Router } from '@lithium-framework/core-dom/router';

@customElement('custom-router')
class CustomRouter extends Router {
  // Ajout de nouvelles routes ou modification des routes existantes
  constructor() {
    super();
    this.config = [
      {
        path: '/',
        render: () => html`<p>Custom Home Page</p>`,
      },
      {
        path: '/about',
        render: () => html`<p>Custom About Page</p>`,
      },
      {
        path: '/contact',
        render: () => html`<p>Contact Page</p>`,
      },
    ];
  }

  // Surcharge de la méthode render pour ajouter un style personnalisé
  render() {
    return html`
      <div style="background-color: lightgray; padding: 20px;">
        ${this.header(this)}
        <main>
          ${this._routes.outlet() || null}
        </main>
        ${this.footer(this)}
      </div>
    `;
  }
}

// Utilisation de CustomRouter dans l'application
function MyCustomRouter() {
  return html`
    <custom-router
      .header=${(router) => html`<header><h1>My Custom App</h1></header>`}
      .footer=${(router) => html`<footer><p>Custom Footer Content</p></footer>`}
    ></custom-router>
  `;
}

render(MyCustomRouter(), document.body);

```

## API

### Propriétés

- `config` (Array): Un tableau d'objets `RouteConfig` définissant les routes de l'application.
- `header` (Function): Une fonction prenant une instance de `Router` et retournant un `TemplateResult` pour l'en-tête.
- `footer` (Function): Une fonction prenant une instance de `Router` et retournant un `TemplateResult` pour le pied de page.

### Méthodes

- `goto(path: string)`: Navigue vers le chemin spécifié.

### Exemples de RouteConfig

Un objet `RouteConfig` doit avoir la structure suivante :

```typescript
import { RouteConfig } from '@lithium-framework/core-dom';

const routes:RouteConfig = [
  {
    path: '/',
    render: () => html`<p>Home Page</p>`,
  },
  {
    path: '/about',
    render: () => html`<p>About Page</p>`,
  },
];

```