[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / State

# Class: State\<T\>

## Type parameters

• **T** = `any`

## Constructors

### new State()

> **new State**\<`T`\>(`value`?): [`State`](State.md)\<`T`\>

#### Parameters

• **value?**: `any`

#### Returns

[`State`](State.md)\<`T`\>

#### Source

state/dist/models/state.d.ts:5

## Properties

### \_history

> `private` **\_history**: `any`

#### Source

state/dist/models/state.d.ts:2

***

### \_notifier

> `private` **\_notifier**: `any`

#### Source

state/dist/models/state.d.ts:4

***

### \_value

> `private` **\_value**: `any`

#### Source

state/dist/models/state.d.ts:3

## Accessors

### mutator

> `get` **mutator**(): [[`State`](State.md)\<`T`\> & `T`, (`newValue`) => `void`]

#### Returns

[[`State`](State.md)\<`T`\> & `T`, (`newValue`) => `void`]

#### Source

state/dist/models/state.d.ts:9

***

### value

> `get` **value**(): `T`

> `set` **value**(`value`): `void`

#### Parameters

• **value**: `T`

#### Returns

`T`

#### Source

state/dist/models/state.d.ts:6

## Methods

### `[toPrimitive]`()

> **\[toPrimitive\]**(): `T`

#### Returns

`T`

#### Source

state/dist/models/state.d.ts:11

***

### subscribe()

> **subscribe**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Source

state/dist/models/state.d.ts:10

***

### init()

> `static` **init**\<`T`\>(`value`?): [`State`](State.md)\<`T`\>

#### Type parameters

• **T** = `any`

#### Parameters

• **value?**: `T`

#### Returns

[`State`](State.md)\<`T`\>

#### Source

state/dist/models/state.d.ts:8
