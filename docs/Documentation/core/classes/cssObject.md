[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / \_cssObject

# Class: \_cssObject

La classe `_cssObject` fournit des méthodes statiques pour travailler avec des objets CSS dans
TypeScript, notamment l'encodage, le décodage, l'aplatissement, la normalisation et la compilation
d'objets CSS.

## Constructors

### new \_cssObject()

> **new \_cssObject**(`css`): [`_cssObject`](cssObject.md)

#### Parameters

• **css**: `Partial`\<`Properties`\<`0` \| `string` & `object`, `string` & `object`\>\>

#### Returns

[`_cssObject`](cssObject.md)

#### Source

[core/src/css-object/css-object.ts:39](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/css-object/css-object.ts#L39)

## Properties

### \_css

> `private` **\_css**: `Partial`\<`Properties`\<`0` \| `string` & `object`, `string` & `object`\>\> = `{}`

#### Source

[core/src/css-object/css-object.ts:33](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/css-object/css-object.ts#L33)

## Methods

### `[toPrimitive]`()

> **\[toPrimitive\]**(): `string`

#### Returns

`string`

#### Source

[core/src/css-object/css-object.ts:50](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/css-object/css-object.ts#L50)

***

### \_toCssString()

> **\_toCssString**(): `string`

#### Returns

`string`

#### Source

[core/src/css-object/css-object.ts:44](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/css-object/css-object.ts#L44)

***

### init()

> `static` **init**(`css`): [`_cssObject`](cssObject.md)

#### Parameters

• **css**: `Partial`\<`Properties`\<`0` \| `string` & `object`, `string` & `object`\>\>

#### Returns

[`_cssObject`](cssObject.md)

#### Source

[core/src/css-object/css-object.ts:35](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/css-object/css-object.ts#L35)

***

### randomUUID()

> `static` **randomUUID**(): `string`

La fonction génère un UUID aléatoire en codant trois groupes de quatre zéros et en les concaténant
avec des traits de soulignement.

#### Returns

`string`

une chaîne composée de trois parties séparées par des traits de soulignement. Chaque
partie est un UUID (Universally Unique Identifier) codé sous la forme d'une chaîne de longueur
fixe de 4 caractères.

#### Source

[core/src/css-object/css-object.ts:61](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/css-object/css-object.ts#L61)
