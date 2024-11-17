# Effect

Le décorateur `@effect` est utilisé pour lier une fonction à une ou plusieurs propriétés réactives d'un composant. À chaque fois que ces propriétés changent, la fonction décorée est automatiquement appelée.

### Exemple de base

```tsx
@effect()
myEffect() {
  // Code exécuté lorsque les propriétés observées changent
}
```

## Utilisation basique

Pour utiliser `@effect`, décorez une méthode dans votre composant. Cette méthode sera appelée à chaque fois que les propriétés réactives auxquelles elle est liée sont modifiées.

```tsx
import { WebComponent, customElement, state , effect , html } from '@lithium-framework/core';

@customElement({
  name: 'my-counter',
  template: html<MyCounter>`<div>${x => x.count}</div>`,
  styles: css`div { color: blue; }`
})
export class MyCounter extends WebComponent {
  @state count: number = 0;

  @effect([ "count" ])
  updateTitle() {
    document.title = `Count: ${this.count}`;
  }
}
```

Dans cet exemple, la méthode `updateTitle` est automatiquement appelée à chaque fois que la propriété `count` change.

## Effets dépendants de plusieurs propriétés

Les méthodes décorées peuvent observer plusieurs propriétés simultanément. Lorsqu'une de ces propriétés change, la méthode décorée est appelée.

```tsx
import { WebComponent, state , effect } from '@lithium-framework/core';

export class MyComponent extends FASTElement {
  @state name: string = '';
  @state age: number = 0;

  @effect([ "name" , "age" ])
  handleUserChange() {
    console.log(`User info: ${this.name}, ${this.age}`);
  }
}
```

Dans cet exemple, la méthode `handleUserChange` est déclenchée à chaque modification de `name` ou `age`.

## Effets avec nettoyage (cleanup)

Dans certains cas, vous aurez besoin d'un nettoyage lors du déclenchement d'un effet (par exemple, lors de l'initialisation ou la destruction d'un effet). Pour cela, vous pouvez retourner une fonction de nettoyage à partir de la méthode décorée.

```tsx
import { WebComponent, state , effect } from '@lithium-framework/core';

export class MyComponent extends WebComponent {
  @state intervalId: any = null;

  @effect()
  startInterval() {
  
    this.intervalId = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    // Cleanup de l'intervalle lorsque l'effet est réinitialisé
    return () => {
      clearInterval(this.intervalId);
    };
    
  }
}

```

Dans cet exemple, l'intervalle est créé lorsque `startInterval` est exécuté, et il est nettoyé automatiquement si l'effet est réévalué ou si le composant est détruit.

## Exemples d'utilisation

### Exemple 1 : Mettre à jour une propriété DOM lorsque l'état change

Vous pouvez utiliser `@effect` pour synchroniser des propriétés réactives avec des éléments du DOM, comme la mise à jour d'attributs ou de styles.

```tsx
import { WebComponent, state , effect } from '@lithium-framework/core';

export class ToggleButton extends WebComponent {
  @state isActive: boolean = false;

  @effect([ "isActive" ])
  toggleButtonClass() {
    this.classList.toggle('active', this.isActive);
  }
  
}
```

Dans cet exemple, la classe `active` est ajoutée ou supprimée en fonction de la valeur de `isActive`.

### Exemple 2 : Lier plusieurs propriétés et déclencher un effet combiné

Vous pouvez observer plusieurs propriétés et créer des effets complexes qui réagissent à plusieurs dépendances en même temps.

```tsx
import { WebComponent, state , effect } from '@lithium-framework/core';

export class FormComponent extends WebComponent {
  @state firstName: string = '';
  @state lastName: string = '';

  @effect([ "firstName" , "lastName" ])
  updateFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  
}
```

Lorsque `firstName` ou `lastName` change, la méthode `updateFullName` est appelée et met à jour la propriété `fullName`.

### Exemple 3 : Effet avec annulation automatique

Certains effets nécessitent d'être nettoyés pour éviter des fuites de mémoire, comme les écouteurs d'événements.

```tsx
import { WebComponent, state , effect } from '@lithium-framework/core';

export class EventListenerComponent extends WebComponent {

  @effect()
  attachClickListener() {
    const handleClick = () => {
      console.log('Element clicked');
    };

    this.addEventListener('click', handleClick);

    // Nettoyage lorsque l'effet est réévalué ou que le composant est détruit
    return () => {
      this.removeEventListener('click', handleClick);
    };
  }
  
}

```

## Conclusion

Les décorateurs `@effect` dans Lithium offrent une approche élégante pour gérer des effets réactifs sans avoir besoin de gérer manuellement la logique de mise à jour. Ils permettent de lier automatiquement des méthodes à des changements de propriétés dans vos composants et facilitent la gestion des effets complexes, y compris leur nettoyage.