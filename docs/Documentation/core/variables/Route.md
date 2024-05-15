[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / Route

# Variable: Route

`Alpha`

> **Route**: `Readonly`\<`object`\>

## Type declaration

### name

> **name**: `Readonly`\<`object`\>

#### Type declaration

##### generateRoute()

###### Parameters

• **relativeTo**: `HTMLElement` \| `Router`\<`any`\>

• **name**: `string`

• **params?**: `Object`

###### Returns

`Promise`\<`string`\>

##### push()

###### Parameters

• **relativeTo**: `HTMLElement` \| `Router`\<`any`\>

• **name**: `string`

• **params?**: `Object`

• **trigger?**: `boolean`

###### Returns

`Promise`\<`void`\>

##### replace()

###### Parameters

• **relativeTo**: `HTMLElement` \| `Router`\<`any`\>

• **name**: `string`

• **params?**: `Object`

• **trigger?**: `boolean`

###### Returns

`Promise`\<`void`\>

##### trigger()

###### Parameters

• **relativeTo**: `HTMLElement` \| `Router`\<`any`\>

• **name**: `string`

• **params?**: `Object`

###### Returns

`Promise`\<`void`\>

### path

> **path**: `Readonly`\<`object`\>

#### Type declaration

##### current

> `readonly` **current**: `string`

##### generateRoute()

###### Parameters

• **relativeTo**: `HTMLElement` \| `Router`\<`any`\>

• **path**: `string`

• **params?**: `Object`

###### Returns

`Promise`\<`string`\>

##### push()

###### Parameters

• **path**: `string`

• **trigger?**: `boolean`

###### Returns

`void`

##### replace()

###### Parameters

• **path**: `string`

• **trigger?**: `boolean`

###### Returns

`void`

##### trigger()

###### Parameters

• **path**: `string`

###### Returns

`void`

## Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:560
