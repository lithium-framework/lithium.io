## **Introduction**

**`live`** est une directive distribuée par Lithium, basée sur Lit, une bibliothèque JavaScript moderne pour la création de composants web réactifs. Cette directive permet de synchroniser automatiquement les valeurs des éléments de formulaire avec les données de votre application.

## **Utilisation**

La directive **`live`** peut être utilisée dans les templates HTML pour synchroniser automatiquement les valeurs des éléments de formulaire avec les données de votre application. Voici un exemple simple :

```typescript
import { html, render } from '@lithium-framework/core';
import { createState } from '@lithium-framework/core/state';
import { live } from '@lithium-framework/core/directives';

// Création d'un état pour stocker la valeur de l'input
const inputValue = createState('');

// Utilisation de live dans le template
const template = html`
  <div>
    <h1>Formulaire en direct</h1>
    <input type="text" ${live(inputValue)} />
    <p>La valeur de l'input est : ${inputValue}</p>
  </div>
`;

// Rendu du template dans le DOM
render(template, document.body);
```

Dans cet exemple :

- Nous utilisons **`createState`** pour créer un état **`inputValue`** qui stocke la valeur de l'input.
- La directive **`live`** est utilisée pour synchroniser automatiquement la valeur de l'input avec l'état **`inputValue`**.
- Lorsque la valeur de l'input change, l'état **`inputValue`** est automatiquement mis à jour, ce qui met à jour également le contenu du paragraphe affichant la valeur de l'input.