---
sidebar_position: 6
---

# @lithium-framework/huid

**`@lithium-framework/huid`** est une bibliothèque TypeScript permettant de générer et de gérer des Identifiants Universellement Uniques Hiérarchiques (UUID). Cette bibliothèque offre une manière structurée de créer et de manipuler des UUID avec des relations parent-enfant, ce qui la rend idéale pour les scénarios nécessitant une organisation hiérarchique des données.

## **Installation**

Installez la bibliothèque à l'aide de npm :

```bash
npm install @lithium-framework/huid
```

## **Utilisation**

### **Importation de la bibliothèque**

Pour utiliser la bibliothèque, importez-la dans votre fichier TypeScript :

```tsx
import { uuid } from '@lithium-framework/huid';
```

### **Génération d'un UUID Simple (Version 4)**

Vous pouvez générer un UUID standard de la version 4 en utilisant la méthode **`v4`** :

```tsx
const uuidSimple = uuid.v4();

console.log(uuidSimple); 
// Exemple de sortie : 'e8d5f42e-ecb1-4b5b-b1e9-1f3f9d80fd50'
```

### **Génération d'un UUID Hiérarchique**

Pour créer un UUID hiérarchique, utilisez la méthode **`hv1`**. Vous pouvez éventuellement fournir un ID parent et un ID de collection.

```tsx
const uuidHiérarchique = uuid.hv1({ parentId: '123456789012', collectionId: 'abcdefabcdef' });

console.log(uuidHiérarchique.toString()); 
// Exemple de sortie : '1a2b3c4d5e6f-1234-5678-90ab-abcdefabcdef'
```

### **Accès aux Composants d'un UUID Hiérarchique**

La classe **`_HUID`** fournit des méthodes pour accéder aux différentes parties de l'UUID.

```tsx
const instanceUUID = new _HUID('1a2b3c4d5e6f-1234-5678-90ab-abcdefabcdef');

console.log(instanceUUID.componentId); // '1a2b3c4d5e6f'
console.log(instanceUUID.section1); // '1234'
console.log(instanceUUID.section2); // '5678'
console.log(instanceUUID.section3); // '90ab'
console.log(instanceUUID.collectionId); // 'abcdefabcdef'
console.log(instanceUUID.parentId); // '1234567890ab'
```

### **Extension d'un UUID Hiérarchique**

Vous pouvez étendre un UUID existant avec de nouvelles options hiérarchiques.

```tsx
const uuidOriginal = new _HUID('1a2b3c4d5e6f-1234-5678-90ab-abcdefabcdef');
const uuidÉtendu = uuidOriginal.extend({ parentId: '098765432109', collectionId: 'abcdefabcdef' });

console.log(uuidÉtendu.toString()); 
// Nouveau HUID avec des sections mises à jour.
```

## **API**

### **Types**

- **`FixedLengthString<Length>`** : Une chaîne de caractères avec une longueur fixe.
- **`ComponentId`** : Une chaîne de caractères de 12 caractères de longueur fixe.
- **`Segment`** : Une chaîne de caractères de 4 caractères de longueur fixe.
- **`ParentSegementId`** : Une chaîne composée de trois segments séparés par des tirets.
- **`CollectionId`** : Une chaîne de caractères de 12 caractères de longueur fixe.
- **`HUID`** : Un UUID hiérarchique composé de l'ID du composant, de l'ID du segment parent et de l'ID de la collection.

### **Interfaces**

- **`HierarchicalUUIDOptions`** :
    - **`parentId`** : Chaîne de caractères de longueur fixe optionnelle de 12 caractères.
    - **`collectionId`** : Chaîne de caractères de longueur fixe optionnelle de 12 caractères.

### **Classes**

- **`_HUID`** : Classe pour manipuler les UUID hiérarchiques.
    - **`get componentId()`** : Retourne l'ID du composant.
    - **`get section1()`** : Retourne la première section.
    - **`get section2()`** : Retourne la deuxième section.
    - **`get section3()`** : Retourne la troisième section.
    - **`get collectionId()`** : Retourne l'ID de la collection.
    - **`get parentId()`** : Retourne l'ID parent.
    - **`extend(options?: HierarchicalUUIDOptions)`** : Étend l'HUID avec de nouvelles options.
- **`uuid`** : Classe pour générer des UUID.
    - **`static get componentId()`** : Retourne l'ID du composant par défaut.
    - **`static get segment1()`** : Retourne le premier segment par défaut.
    - **`static get segment2()`** : Retourne le deuxième segment par défaut.
    - **`static get segment3()`** : Retourne le troisième segment par défaut.
    - **`static get collectionId()`** : Retourne l'ID de la collection par défaut.
    - **`static get NIL()`** : Retourne un UUID NIL.
    - **`static encode<N extends number = 4 | 12>(chaine: FixedLengthString<N>)`** : Encode une chaîne de caractères de longueur fixe.
    - **`static v4()`** : Génère un UUID de version 4.
    - **`static hv1(options?: HierarchicalUUIDOptions)`** : Génère un UUID hiérarchique.