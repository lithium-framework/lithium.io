---
slug: hello-world
title: Hello World
authors: guillaume
tags: [hello, docusaurus]
---

# Découvrez Lithium : un Framework Dynamique pour Composants Web

Bienvenue à tous les développeurs et passionnés de technologies web ! Nous sommes ravis de vous présenter **Lithium**, un nouveau framework innovant conçu pour simplifier la création de composants web dynamiques. Dans ce premier article de blog, nous explorerons les fondements de Lithium et découvrirons comment il peut transformer votre façon de développer des interfaces web.

## **Pourquoi Lithium ?**

Lithium a été créé pour répondre aux besoins des développeurs en offrant une solution puissante et flexible pour la création de composants web. Voici quelques-unes des raisons pour lesquelles Lithium se démarque :

- **Simplicité et flexibilité** : Lithium permet de créer des composants web réutilisables de manière simple et intuitive, sans les contraintes des approches traditionnelles.
- **Puissance des Web Components** : En utilisant les Web Components comme base, Lithium offre des composants robustes et performants pour construire des interfaces web modernes.
- **Gestion d'état intégrée** : Lithium inclut un système de gestion d'état intuitif pour faciliter la gestion des données et des interactions dans vos composants.

## **Les Deux Approches de Lithium**

Lithium propose deux approches principales pour créer des composants :

### **1. Composants Dynamiques (Dynamic Components)**

Les composants dynamiques offrent une solution rapide et flexible pour créer des interfaces web. Voici un exemple de création d'un bouton dynamique avec Lithium :

```typescript
import { html, render } from 'lit-html';
import { createState, useState } from 'lithium';

function DynamicButton() {
  let [counter, setCounter] = createState<number>(0);

  return html`<button @click=${() => setCounter(counter + 1)}>
    ${useState(counter)}
  </button>`;
}

render(DynamicButton(), document.body);

```

Ce bouton dynamique incrémente un compteur à chaque clic, illustrant la facilité avec laquelle Lithium permet de créer des composants réactifs et dynamiques.

### **2. Web Components Classiques**

Les Web Components classiques offrent une approche structurée et modulaire pour la création de composants réutilisables. Voici un exemple d'un composant de bouton générique avec Lithium :

```typescript
import { WebComponent, html, customElement } from 'lithium';

@customElement({
  name: 'my-button',
  template: html`<button>${context => context.label}</button>`,
})
class MyButton extends WebComponent {
  @AttributeState() label: string = 'Click Me';

  connectedCallback() {
    super.connectedCallback();
  }

  labelChanged(oldValue: string, newValue: string) {
    this.label = newValue;
  }
}

```

Ce composant de bouton générique peut être utilisé dans toute application web en spécifiant simplement un attribut **`label`**.

## **Conclusion**

Lithium est un projet d'étudiant toujours en développement, conçu pour répondre aux besoins des développeurs modernes en matière de création d'interfaces web. Nous travaillons continuellement à améliorer et à étendre les fonctionnalités de Lithium, et nous sommes impatients de partager avec vous ses évolutions futures.

Nous espérons que vous êtes aussi enthousiastes que nous à propos de Lithium ! Dans les prochains articles, nous explorerons plus en détail ses fonctionnalités avancées et ses cas d'utilisation. Restez à l'écoute et n'hésitez pas à expérimenter avec Lithium dans vos propres projets.