# Observable Object

Les objets observables sont un concept central. Ils permettent de surveiller des modifications sur un objet et de réagir automatiquement aux changements d'état. Cela permet de créer des flux de données dynamiques où les mises à jour de l'état se propagent sans intervention manuelle.

## Le Concept d'Objet Observable
Un objet observable est un objet JavaScript qui a la capacité de :

- **Notifier** des observateurs lorsqu'une de ses propriétés change.

- **Souscrire** et **désabonner** des observateurs (fonctions de rappel) qui réagissent aux changements.
Le Modèle Observateur

**Le modèle observateur suit cette idée :**

- **Souscription** : Vous pouvez attacher des fonctions à des propriétés d'un objet observable. Ces fonctions, appelées observateurs, sont déclenchées dès que la propriété surveillée change.

- **Notification** : Chaque fois qu'une propriété change, les observateurs sont automatiquement notifiés et réagissent en conséquence.

C'est ce qui permet de rendre les objets réactifs dans les applications modernes, notamment les interfaces utilisateur.

## Utilisation d'un Objet Observable
### Création d'un Objet Observable

```typescript
import { createObservableObject } from './index';

// Créer un objet de données initial
const data = {
  name: 'Alice',
  age: 30,
};

// Transformer l'objet en un objet observable
const observableData = createObservableObject(data);
```

### Souscription aux changements de propriété
Une fois l'objet créé, vous pouvez souscrire à une propriété pour écouter les changements. Par exemple, vous pourriez vouloir réagir chaque fois que la propriété name change.

```typescript
// Souscrire aux changements de la propriété 'name'
observableData.subscribe('name', (newValue, oldValue) => {
  console.log(`Le nom a changé de ${oldValue} à ${newValue}`);
});

// Modifier la propriété pour déclencher l'observateur
observableData.name = 'Bob';  // Le callback sera appelé et affichera "Le nom a changé de Alice à Bob"
```

Dans cet exemple, dès que la valeur de name est modifiée, la fonction de rappel souscrite est appelée, affichant le message avec l'ancienne et la nouvelle valeur.

### Désabonnement d'une propriété
Si vous n'avez plus besoin d'écouter les changements d'une propriété, vous pouvez vous désabonner avec la méthode unsubscribe.

```typescript
const NameChangeHandler = (newValue, oldValue) => {
  console.log(`Le nom a changé de ${oldValue} à ${newValue}`);
};

// Souscription
observableData.subscribe('name', NameChangeHandler);

// Désabonnement
observableData.unsubscribe('name', NameChangeHandler);
```

## Utilisation des Propriétés Clés et Valeurs
L'objet observable expose également des méthodes utilitaires comme keys() et values() pour obtenir respectivement les clés et les valeurs de l'objet surveillé.

```typescript
console.log(observableData.keys());  // ['name', 'age']
console.log(observableData.values()); // ['Bob', 30]
```

### Cas d'Utilisation Typiques
- Synchronisation UI : Vous pouvez utiliser des objets observables pour réagir automatiquement aux modifications d'état dans une interface utilisateur. Par exemple, un changement dans un formulaire de saisie peut mettre à jour d'autres composants en temps réel.

- Gestion de l'état global : Les objets observables peuvent être utilisés pour gérer l'état global d'une application. Chaque composant peut s'abonner aux parties de l'état qui l'intéressent, et sera notifié des changements, sans avoir besoin de surveiller manuellement les données.

- Mise à jour des données en direct : Lorsqu'une application reçoit des données en temps réel (par exemple via WebSocket ou une API), un objet observable peut diffuser ces changements instantanément aux composants abonnés.

## Conclusion
Les objets observables sont un outil essentiel pour rendre les applications réactives et synchronisées avec les données dynamiques. En permettant aux fonctions de réagir automatiquement aux changements d'état, ils simplifient considérablement la gestion des mises à jour dans des environnements complexes, comme les interfaces utilisateur ou la gestion d'état global.