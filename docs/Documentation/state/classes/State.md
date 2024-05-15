[**@lithium-framework/state**](../README.md) • **Docs**

***

[@lithium-framework/state](../README.md) / State

# Class: State\<T\>

## Type parameters

• **T** = `any`

## Constructors

### new State()

> **new State**\<`T`\>(`value`): [`State`](State.md)\<`T`\>

#### Parameters

• **value**: `any`= `null`

#### Returns

[`State`](State.md)\<`T`\>

#### Source

[models/state.ts:9](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L9)

## Properties

### \_history

> `private` **\_history**: `T`[] = `[]`

#### Source

[models/state.ts:5](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L5)

***

### \_notifier

> `private` **\_notifier**: `Notifier`

#### Source

[models/state.ts:7](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L7)

***

### \_value

> `private` **\_value**: `T` = `null`

#### Source

[models/state.ts:6](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L6)

## Accessors

### mutator

> `get` **mutator**(): [[`State`](State.md)\<`T`\> & `T`, (`newValue`) => `void`]

#### Returns

[[`State`](State.md)\<`T`\> & `T`, (`newValue`) => `void`]

#### Source

[models/state.ts:35](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L35)

***

### value

> `get` **value**(): `T`

> `set` **value**(`value`): `void`

#### Parameters

• **value**: `T`

#### Returns

`T`

#### Source

[models/state.ts:13](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L13)

## Methods

### `[toPrimitive]`()

> **\[toPrimitive\]**(): `T`

#### Returns

`T`

#### Source

[models/state.ts:47](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L47)

***

### subscribe()

> **subscribe**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Source

[models/state.ts:41](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L41)

***

### init()

> `static` **init**\<`T`\>(`value`): [`State`](State.md)\<`T`\>

#### Type parameters

• **T** = `any`

#### Parameters

• **value**: `T`= `null`

#### Returns

[`State`](State.md)\<`T`\>

#### Source

[models/state.ts:31](https://github.com/lithium-framework/state/blob/d952de44dfd4f04e021ff1f1165a93e45ac71cbf/src/models/state.ts#L31)
