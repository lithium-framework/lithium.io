---
sidebar_position: 8
---

# Lithium - Context

**`@lithium-framework/context`** est un module de gestion de stockage d'état pour le framework Lithium. Il permet de créer des états centralisés et de gérer leur validation et mise à jour de manière fluide et efficace.

## **Installation**

Vous pouvez installer ce package via npm :

```bash
npm install @lithium-framework/context
```

## **Utilisation**

### **Création d'un stockage**

La fonction **`createStorage`** permet de créer un objet proxy pour gérer le stockage avec des méthodes d'accès et de mise à jour des données.

### **Exemple d'utilisation**

```tsx
import { createStorage, StateValidator } from '@lithium-framework/context';

// Données initiales
const initialData = { count: 0, name: "Alice" };

// Validator pour valider les changements de l'état
const validator: StateValidator<number> = (key, previousValue, newValue) => true;

// Création du stockage
const storage = createStorage(initialData, validator);

// Accéder et mettre à jour les valeurs
let [ count , setCount ] = storage.get<number>('count');
console.log(+count); // affiche 0
setCount(5);
console.log(+count); // affiche 5

```

### **TypeScript**

Le package est entièrement typé pour fournir une expérience de développement améliorée avec TypeScript.

### **API**

### Functions

### **`createStorage**<**RECORD** extends **Record**<string, any>>(records: **Partial**<**RECORD**> = {}, **stateValidator**?: **StateValidator**): **Storage**<**RECORD**>`

### **Paramètres**

- **`records`** (optionnel) : Un objet partiel contenant des paires clé-valeur représentant des enregistrements de données initiales.
- **`stateValidator`** (optionnel) : Une fonction de validation appelée lors de la modification d'un état.
    
    ### **Retour**
    
- Retourne un objet Proxy qui entoure l'objet de stockage.

### **Types**

- **`StateValidator<T>`** : Fonction appelée lors du changement d'un état. Retourne une promesse ou une valeur booléenne indiquant le succès ou l'échec de la modification.
- **`StorageKeys<RECORD>`** : Type des clés d'un enregistrement.
- **`StorageValues<RECORD>`** : Type des valeurs d'un enregistrement.