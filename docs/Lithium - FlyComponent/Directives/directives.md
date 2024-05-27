# Directives

Les directives Lithium sont un concept essentiel dans le développement d'applications web avec le framework JavaScript Lithium. Elles s'inspirent des directives Lit, un concept fondamental de la bibliothèque Lit, qui est une approche moderne et performante pour la création de composants web réactifs.

## **Pourquoi les directives ?**

### **Réactivité**

Les directives Lithium permettent d'ajouter de la réactivité aux templates HTML. En associant du code JavaScript aux éléments du DOM, elles permettent de spécifier comment ceux-ci doivent réagir aux changements de données.

### **Mise à jour dynamique du DOM**

En utilisant les directives, vous pouvez définir des logiques qui seront exécutées lorsque des données changent. Ces logiques peuvent alors mettre à jour sélectivement le DOM pour refléter ces changements, offrant ainsi une expérience utilisateur dynamique et fluide.

### **Simplification du code**

Les directives Lithium permettent d'encapsuler la logique de mise à jour du DOM directement dans les templates HTML. Cela évite la duplication de code et rend le code plus lisible et maintenable.

## **Utilisation**

Pour utiliser les directives Lithium dans vos templates lit-html, vous pouvez les définir en tant que fonctions ou en tant que chaînes de caractères préfixées par un symbole spécial, selon vos préférences.

### Exemple de Création de Directive :

```typescript
import { DirectiveFn } from '@lithium-framework/core/directives';

// Définition d'une directive personnalisée
const myDirective: DirectiveFn = () => (part) => {
  // Logique de la directive ici
};

export { myDirective };
```

Dans cet exemple, nous avons défini une directive personnalisée nommée myDirective. Cette directive prend en charge le paramètre part, qui représente une instance de Part de lit-html, permettant ainsi la manipulation du DOM.

### Exemple d'Utilisation de la Directive :
```typescript
import { html, render, createState } from '@lithium-framework/core';
import { myDirective } from './myDirective'; // Import de la directive personnalisée

// Composant utilisant la directive personnalisée
function MyComponent() {
  // Utilisation de la directive dans le template
  return html`
    <div ${myDirective()}>
      Contenu de l'élément avec directive
    </div>
  `;
}

// Rendu du composant dans le DOM
render(MyComponent(), document.body);
```

- Dans cet exemple, nous importons d'abord la directive personnalisée myDirective depuis son fichier source. Ensuite, nous utilisons cette directive dans le template de notre composant MyComponent, en l'appliquant à un élément **`<div>`***. 
- Lorsque MyComponent est rendu dans le DOM, la directive sera exécutée, appliquant ainsi sa logique au contenu de l'élément.

### Exemple avec un counter :

```typescript
import { html, render, createState } from '@lithium-framework/core';
import { useState, useStyle } from '@lithium-framework/core/directives';

// Définition d'une directive personnalisée
const myDirective = () => (part) => {
  // Logique de la directive ici
};

// Composant MyCounter utilisant la directive personnalisée
function MyCounter() {
  let [counter, setCounter] = createState<number>(0);

  return html`
    <div style=${useStyle({ display: 'flex' })}>
      <p>${useState(counter)}</p>
      <button @mousedown=${() => setCounter(counter + 1)}>Add</button>
    </div>
  `;
}

// Utilisation de la directive et du composant MyCounter
render(MyCounter(), document.body);
```

Dans cet exemple :

- La directive personnalisée **`myDirective`** est définie en tant que fonction qui reçoit **`part`** en paramètre. Cette fonction peut contenir la logique nécessaire pour manipuler le DOM.
- Le composant **`MyCounter`** utilise la directive **`useStyle`** pour appliquer un style CSS au conteneur **`<div>`** du compteur.
- Lorsque le bouton est cliqué, la fonction **`setCounter`** est appelée pour mettre à jour l'état du compteur, déclenchant ainsi la réactivité de l'interface utilisateur grâce à la directive **`useState`**.

En utilisant les directives de cette manière, vous pouvez ajouter facilement des fonctionnalités réactives et des styles dynamiques à vos composants Lithium.