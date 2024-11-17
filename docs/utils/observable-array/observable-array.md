# Observable Array

L'**ObservableArray** est un concept qui apporte la réactivité aux tableaux. Cela signifie que vous pouvez suivre les changements apportés à un tableau, comme l'ajout ou la suppression d'éléments, et réagir à ces modifications automatiquement. Ce mécanisme est particulièrement utile dans les applications web où l'interface utilisateur doit rester synchronisée avec les données sous-jacentes.

## Qu'est-ce qu'un ObservableArray ?

Un **ObservableArray** est une extension des tableaux JavaScript qui utilise un système d'observation. Lorsqu'un élément du tableau est modifié, les fonctions d'observation (ou "observateurs") sont automatiquement notifiées. Cela permet d'automatiser la mise à jour de l'interface utilisateur ou d'autres parties de l'application qui dépendent des données du tableau.

### Avantages des ObservableArrays

- **Réactivité** : Vous pouvez être averti instantanément lorsque le tableau change, ce qui permet d'ajuster l'interface utilisateur sans intervention manuelle.

- **Simplicité** : Vous conservez une API familière, comme celle des tableaux JavaScript natifs, tout en ajoutant la capacité d'observation.

- **Flexibilité** : Utile dans les frameworks modernes (comme React ou Vue) pour synchroniser les données d'état avec l'interface utilisateur.

## Comment utiliser un ObservableArray

### Création d'un ObservableArray

Pour créer un **ObservableArray**, il suffit de l'initialiser avec un tableau. Voici un exemple simple :

```tsx
import { ObservableArray } from '@lithium-framework/core';

const observableArray = ObservableArray([1, 2, 3]);
```

### Souscrire aux changements

Une fois que vous avez créé votre tableau réactif, vous pouvez vous y abonner pour recevoir des notifications lorsque des changements se produisent :

```tsx
observableArray.subscribe((operation, args, result) => {
  console.log(`Opération : ${operation}, Arguments : ${JSON.stringify(args)}, Résultat : ${result}`);
});
```

### Modifier le tableau

Vous pouvez ensuite utiliser les méthodes habituelles des tableaux pour ajouter ou supprimer des éléments. À chaque opération, les observateurs seront notifiés :

```tsx
observableArray.push(4);  // Cela déclenche l'observateur
observableArray.pop();     // Cela déclenche également l'observateur
```

## Exemples d'utilisation

### Exemple 1 : Suivre les modifications

Supposons que vous ayez une liste de tâches et que vous souhaitiez afficher cette liste dans l'interface utilisateur. En utilisant un **ObservableArray**, vous pouvez facilement suivre les ajouts et les suppressions de tâches :

```tsx
import { ObservableArray } from '@lithium-framework/core';

const tasks = ObservableArray(['Tâche 1', 'Tâche 2']);

// Souscrire aux modifications
tasks.subscribe((operation, args) => {
  console.log(`Changement dans les tâches : ${operation}`, args);
});

// Ajouter une nouvelle tâche
tasks.push('Tâche 3');  // Affiche : Changement dans les tâches : push [ 'Tâche 3' ]

// Supprimer une tâche
tasks.pop();  // Affiche : Changement dans les tâches : pop []
```

### Exemple 2 : Mettre à jour l'interface utilisateur

Imaginons que vous ayez une interface utilisateur qui affiche le contenu d'un tableau. Grâce à l'**ObservableArray**, vous pouvez automatiquement mettre à jour l'interface chaque fois qu'une tâche est ajoutée ou supprimée :

```tsx
const displayTasks = (tasks) => {
  console.log('Tâches actuelles:', tasks);
};

// Afficher la liste initiale
displayTasks(tasks);

// Souscrire aux changements pour mettre à jour l'affichage
tasks.subscribe(() => displayTasks(tasks));

// Ajouter et supprimer des tâches
tasks.push('Tâche 4');  // Met à jour l'affichage
tasks.pop();           // Met à jour l'affichage
```

## Conclusion

L'**ObservableArray** offre une manière élégante de gérer des tableaux réactifs en JavaScript. Il simplifie la synchronisation entre les données et l'interface utilisateur, rendant vos applications plus dynamiques et interactives. En utilisant des observateurs, vous pouvez vous assurer que votre interface reste à jour sans avoir à gérer manuellement chaque modification.