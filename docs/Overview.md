---
sidebar_position: 4
---

# Lithium

Lithium est un framework JavaScript innovant conçu pour simplifier la création d'interfaces utilisateur. En s'appuyant sur la robustesse de Lit et en y ajoutant des fonctionnalités avancées, Lithium offre une solution puissante et flexible pour les développeurs.

**Points Forts de Lithium :**

- **Interopérabilité** : Utilisable avec Angular, React, Vue et d'autres frameworks, Lithium garantit une intégration facile et une flexibilité maximale.
- **Performances** : Grâce à Lit, Lithium est jusqu'à 50 % plus rapide que React, offrant une réactivité exceptionnelle.
- **Légèreté** : Lithium est plus léger que de nombreux frameworks concurrents, réduisant la taille des bundles et améliorant les temps de chargement.
- **Simplicité** : Pas besoin de configurations complexes ; une configuration Webpack minimale suffit pour commencer à travailler avec Lithium.
- **SSR Intégré** : Profitez du rendu côté serveur pour des applications plus rapides et optimisées pour le SEO.
- **Ensembles de Directives** : Les directives Lithium permettent des approches de développement nouvelles et puissantes, non possibles avec Lit seul.

Avec Lithium, créez des applications web modernes, performantes et interopérables sans les tracas des configurations complexes. Découvrez une nouvelle manière de développer vos interfaces utilisateur en toute simplicité et efficacité.

# Templates

## Overview

Les templates Lithium sont écrits en utilisant des littéraux de template JavaScript marqués avec la balise **`html`**. Le contenu du littéral est principalement du HTML déclaratif et simple.

La syntaxe des templates peut donner l'impression que vous faites simplement de l'interpolation de chaînes. Mais avec les littéraux de template marqués, le navigateur passe à la fonction de balise un tableau de chaînes (les parties statiques du template) et un tableau d'expressions (les parties dynamiques). Lithium utilise cela pour construire une représentation efficace de votre template, de manière à ne re-render que les parties du template qui ont changé.

### Template

```tsx
import { html } from '@lithium-framework/core-dom';

let template = html`<h1>Hello World !</h1>`;
```

### Function template

```tsx
import { html } from '@lithium-framework/core-dom';

function MyTemplate({ message }){
	return html`<h1>${message}</h1>`;
}
```

### Render template

```tsx
import { html , render } from '@lithium-framework/core-dom';

let template = html`<h1>Hello World !</h1>`;

render( template , document.body ); 
```

### Render function template

```tsx
import { html , render } from '@lithium-framework/core-dom';

function MyTemplate({ message }){
	return html`<h1>${message}</h1>`;
}

render( MyTemplate({ message : 'Hello World !' }) , document.body ); 
```

## Expression

Les templates Lithium peuvent inclure des valeurs dynamiques appelées expressions. Une expression peut être n'importe quelle expression JavaScript. L'expression est évaluée lorsque le template est évalué, et le résultat de l'expression est inclus lorsque le template est rendu. Dans un composant Lithium, cela signifie que chaque fois que la méthode render est appelée.

Les expressions peuvent être placées uniquement à des endroits spécifiques dans le template, et la manière dont une expression est interprétée dépend de l'endroit où elle apparaît. Les expressions à l'intérieur de la balise de l'élément affectent l'élément lui-même. Les expressions à l'intérieur du contenu de l'élément, là où les nœuds enfants vont, rendent les nœuds enfants ou le texte.

Les valeurs valides pour les expressions diffèrent en fonction de l'endroit où l'expression se produit. En général, toutes les expressions acceptent des valeurs primitives comme les chaînes de caractères et les nombres, et certaines expressions prennent en charge des types de valeurs supplémentaires. De plus, toutes les expressions peuvent accepter des directives, qui sont des fonctions spéciales qui personnalisent la manière dont une expression est traitée et rendue. Consultez les Directives personnalisées pour plus d'informations.

[Expressions – Lit](https://lit.dev/docs/templates/expressions/)

## Conditionals

Comme Lithium tire parti des expressions JavaScript normales, vous pouvez utiliser des constructions de contrôle de flux standard en JavaScript comme les opérateurs conditionnels, les appels de fonctions et les instructions if ou switch pour rendre du contenu conditionnel.

Les conditionnels JavaScript vous permettent également de combiner des expressions de template imbriquées, et vous pouvez même stocker les résultats de template dans des variables à utiliser ailleurs.

[Conditionals – Lit](https://lit.dev/docs/templates/conditionals/)

## Lit Directives

Les directives sont des fonctions qui peuvent étendre Lit en personnalisant la manière dont une expression est rendue.

| Directive | Summary |
| --- | --- |
| Styling |  |
| classMap | Assigns a list of classes to an element based on an object. |
| styleMap | Sets a list of style properties to an element based on an object. |
| Loops and Conditionals |  |
| when | Renders one of two templates based on a condition. |
| choose | Renders one of many templates based on a key value. |
| map | Transforms an iterable with a function. |
| repeat | Renders values from an iterable into the DOM, with optional keying to enable data diffing and DOM stability. |
| join | Interleave values from an iterable with a joiner value. |
| range | Creates an iterable of numbers in a sequence, useful for iterating a specific number of times. |
| ifDefined | Sets an attribute if the value is defined and removes the attribute if undefined. |
| Caching and change detection |  |
| cache | Caches rendered DOM when changing templates rather than discarding the DOM. |
| keyed | Associates a renderable value with a unique key, forcing the DOM to re-render if the key changes. |
| guard | Only re-evaluates the template when one of its dependencies changes. |
| live | Sets an attribute or property if it differs from the live DOM value rather than the last-rendered value. |
| Referencing rendered DOM |  |
| ref | Gets a reference to an element rendered in the template. |
| Rendering special values |  |
| templateContent | Renders the content of a \<template>\ element. |
| unsafeHTML | Renders a string as HTML rather than text. |
| unsafeSVG | Renders a string as SVG rather than text. |
| Asynchronous rendering |  |
| until | Renders placeholder content until one or more promises resolve. |
| asyncAppend | Appends values from an AsyncIterable into the DOM as they are yielded. |
| asyncReplace | Renders the latest value from an AsyncIterable into the DOM as it is yielded. |

[Built-in directives – Lit](https://lit.dev/docs/templates/directives/)

## Lithium Directives

Lithium inclut un certain nombre de directives intégrées pour répondre à divers besoins de rendu.

| Directive | Summary |
| --- | --- |
| Change detection |  |
| useState |  |
| Styling |  |
| useStyle |  |
| Lifecycle |  |
| useEffect |  |

## Custom directives

Les directives sont des fonctions qui peuvent étendre Lithium en personnalisant la manière dont une expression de template est rendue. Les directives sont utiles et puissantes car elles peuvent être stateful, accéder au DOM, être notifiées lorsque les templates sont déconnectés et reconnectés, et mettre à jour indépendamment les expressions en dehors d'un appel de rendu.

[Custom directives – Lit](https://lit.dev/docs/templates/custom-directives/)

# Components