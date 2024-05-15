[**@lithium-framework/huid**](../README.md) • **Docs**

***

[@lithium-framework/huid](../README.md) / uuid

# Class: uuid

Classe pour générer des UUID

## Constructors

### new uuid()

> **new uuid**(): [`uuid`](uuid.md)

#### Returns

[`uuid`](uuid.md)

## Accessors

### NIL

> `get` `static` **NIL**(): [`_HUID`](HUID.md)

Méthode pour obtenir un UUID NIL (null) par défaut.

#### Returns

[`_HUID`](HUID.md)

L'UUID NIL est renvoyé sous forme de chaîne dans le format
"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.

#### Source

[huid/src/index.ts:132](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L132)

***

### collectionId

> `get` `static` **collectionId**(): [`CollectionId`](../type-aliases/CollectionId.md)

Méthode pour obtenir une valeur par défaut pour l'identifiant de collection.

#### Returns

[`CollectionId`](../type-aliases/CollectionId.md)

La valeur renvoyée est '000000000000' en tant que CollectionId.

#### Source

[huid/src/index.ts:125](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L125)

***

### componentId

> `get` `static` **componentId**(): [`ComponentId`](../type-aliases/ComponentId.md)

Méthode pour obtenir une valeur par défaut pour l'identifiant de composant.

#### Returns

[`ComponentId`](../type-aliases/ComponentId.md)

La valeur renvoyée est '000000000000' en tant que ComponentId.

#### Source

[huid/src/index.ts:101](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L101)

***

### segment1

> `get` `static` **segment1**(): [`Segment`](../type-aliases/Segment.md)

Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.

#### Returns

[`Segment`](../type-aliases/Segment.md)

La valeur renvoyée est '0000' en tant que Segment.

#### Source

[huid/src/index.ts:107](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L107)

***

### segment2

> `get` `static` **segment2**(): [`Segment`](../type-aliases/Segment.md)

Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.

#### Returns

[`Segment`](../type-aliases/Segment.md)

La valeur renvoyée est '0000' en tant que Segment.

#### Source

[huid/src/index.ts:113](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L113)

***

### segment3

> `get` `static` **segment3**(): [`Segment`](../type-aliases/Segment.md)

Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.

#### Returns

[`Segment`](../type-aliases/Segment.md)

La valeur renvoyée est '0000' en tant que Segment.

#### Source

[huid/src/index.ts:119](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L119)

## Methods

### encode()

> `static` **encode**\<`N`\>(`chaine`): [`FixedLengthString`](../type-aliases/FixedLengthString.md)\<`N`\>

Méthode `encode` pour traiter une chaîne de longueur fixe en remplaçant certains caractères par
des valeurs hexadécimales aléatoires.

#### Type parameters

• **N** *extends* `number` = `4` \| `12`

#### Parameters

• **chaine**: [`FixedLengthString`](../type-aliases/FixedLengthString.md)\<`N`\>

Le paramètre `chaine` est de type `FixedLengthString<N>`, c'est-à-dire une
chaîne de longueur fixe. La longueur de la chaîne est déterminée par le type générique `N`,
qui étend le type `number` et peut uniquement être soit `4` ou `12`.

#### Returns

[`FixedLengthString`](../type-aliases/FixedLengthString.md)\<`N`\>

une valeur de type `FixedLengthString<N> | FixedLengthString<N>`.

#### Source

[huid/src/index.ts:142](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L142)

***

### hv1()

> `static` **hv1**(`options`?): [`_HUID`](HUID.md)

Méthode `hv1` pour générer un UUID hiérarchique en fonction des options fournies, y compris
l'identifiant parent et l'identifiant de collection.

#### Parameters

• **options?**: [`HierarchicalUUIDOptions`](../interfaces/HierarchicalUUIDOptions.md)

Le paramètre `options` est un objet facultatif qui
peut contenir les propriétés suivantes :

#### Returns

[`_HUID`](HUID.md)

un nouvel UUID hiérarchique (_HUID) qui est construit en concaténant les valeurs de
`componentId`, `segment1`, `segment2`, `segment3` et `collectionId` avec des tirets ("-") entre eux.

#### Source

[huid/src/index.ts:173](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L173)

***

### v4()

> `static` **v4**(): \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Méthode pour générer un UUID de version 4 en utilisant des valeurs aléatoires de la bibliothèque
get-random-values.

#### Returns

\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

un UUID de version 4 (Universally Unique Identifier) sous forme de chaîne dans le format
"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.

#### Source

[huid/src/index.ts:155](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L155)
