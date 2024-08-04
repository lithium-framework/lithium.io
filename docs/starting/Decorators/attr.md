# Attr

Dans le cadre du développement de Web Components avec Lithium (basé sur le noyau FAST), la gestion des attributs HTML joue un rôle crucial. Les décorateurs comme `@attr` permettent de synchroniser les propriétés JavaScript avec les attributs HTML, facilitant ainsi la création de composants interactifs et réactifs.

### Fonctionnalité

Le décorateur `@attr` de FAST est utilisé pour lier une propriété d'un composant Web à un attribut HTML. Cela permet de manipuler les attributs via JavaScript tout en garantissant que les modifications sont correctement reflétées dans le DOM. Il permet également de définir des comportements spécifiques comme le type de données, des valeurs par défaut, ou des transformations automatiques entre la représentation interne (JavaScript) et externe (HTML) d'un attribut.

### Concept Clé

- **Synchronisation entre attributs et propriétés** : `@attr` synchronise automatiquement les modifications entre un attribut HTML et sa propriété JavaScript correspondante.
- **Type de données** : Le décorateur peut être configuré pour interpréter l'attribut comme un certain type de données (par exemple, `string`, `number`, `boolean`), ce qui permet de gérer plus facilement les interactions utilisateur et les validations.
- **Réactivité** : En utilisant `@attr`, tout changement apporté à un attribut HTML mettra à jour automatiquement la propriété correspondante dans le composant, et vice versa, assurant ainsi une réactivité fluide des composants.

```tsx
import { attr , WebComponent } from '@lithium-framework/core';

class MyWebComponent extends WebComponent{

  @attr myAttribute:string = "world";

}
```