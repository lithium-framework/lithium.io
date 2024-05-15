[**@lithium-framework/context**](../README.md) • **Docs**

***

[@lithium-framework/context](../README.md) / StateValidator

# Type alias: StateValidator()\<T\>

> **StateValidator**\<`T`\>: (`key`, `previousValue`, `newValue`) => `Promise`\<`any`\> \| `boolean`

Représente la fonction appelée lors du changement d'un état.
Cette fonction permet de chaîner la modification de la valeur en exécutant préalablement
une fonction de validation ou en envoyant une requête vers un service.
La nouvelle valeur est alors stockée dans le state correspondant,
en fonction du succès ou de l'échec de l'opération.

## Type parameters

• **T** = `any`

## Parameters

• **key**: `string`

La clé de l'état qui est en train d'être modifié.

• **previousValue**: `T`

La valeur précédente de l'état avant la modification.

• **newValue**: `T`

La nouvelle valeur proposée pour l'état.

## Returns

`Promise`\<`any`\> \| `boolean`

## Source

[models/storage.ts:15](https://github.com/lithium-framework/context/blob/25e1479e8ebfd81e7966f2d0997f8cc526a03b72/src/models/storage.ts#L15)
