[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / AsyncReplaceDirective

# Class: AsyncReplaceDirective

## Extends

- `AsyncDirective`

## Extended by

- [`AsyncAppendDirective`](AsyncAppendDirective.md)

## Constructors

### new AsyncReplaceDirective()

> **new AsyncReplaceDirective**(`_partInfo`): [`AsyncReplaceDirective`](AsyncReplaceDirective.md)

#### Parameters

• **\_partInfo**: `PartInfo`

#### Returns

[`AsyncReplaceDirective`](AsyncReplaceDirective.md)

#### Inherited from

`AsyncDirective.constructor`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:61

## Properties

### \_\_pauser

> `private` **\_\_pauser**: `any`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:12

***

### \_\_value?

> `private` `optional` **\_\_value**: `any`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:10

***

### \_\_weakThis

> `private` **\_\_weakThis**: `any`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:11

***

### isConnected

> **isConnected**: `boolean`

The connection state for this Directive.

#### Inherited from

`AsyncDirective.isConnected`

#### Source

core/node\_modules/lit-html/development/async-directive.d.ts:143

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### \_$initialize()

> **\_$initialize**(`part`, `parent`, `attributeIndex`): `void`

Initialize the part with internal fields

#### Parameters

• **part**: `Part`

• **parent**: `Disconnectable`

• **attributeIndex**: `number`

#### Returns

`void`

#### Inherited from

`AsyncDirective._$initialize`

#### Source

core/node\_modules/lit-html/development/async-directive.d.ts:150

***

### commitValue()

> `protected` **commitValue**(`value`, `_index`): `void`

#### Parameters

• **value**: `unknown`

• **\_index**: `number`

#### Returns

`void`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:15

***

### disconnected()

> **disconnected**(): `void`

#### Returns

`void`

#### Overrides

`AsyncDirective.disconnected`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:16

***

### reconnected()

> **reconnected**(): `void`

#### Returns

`void`

#### Overrides

`AsyncDirective.reconnected`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:17

***

### render()

> **render**\<`T`\>(`value`, `_mapper`?): `symbol`

#### Type parameters

• **T**

#### Parameters

• **value**: `AsyncIterable`\<`T`\>

• **\_mapper?**: `Mapper`\<`T`\>

#### Returns

`symbol`

#### Overrides

`AsyncDirective.render`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:13

***

### setValue()

> **setValue**(`value`): `void`

Sets the value of the directive's Part outside the normal `update`/`render`
lifecycle of a directive.

This method should not be called synchronously from a directive's `update`
or `render`.

#### Parameters

• **value**: `unknown`

The value to set

#### Returns

`void`

#### Inherited from

`AsyncDirective.setValue`

#### Source

core/node\_modules/lit-html/development/async-directive.d.ts:161

***

### update()

> **update**(`_part`, `__namedParameters`): `symbol`

#### Parameters

• **\_part**: `ChildPart`

• **\_\_namedParameters**: [`AsyncIterable`\<`unknown`\>, `Mapper`\<`unknown`\>]

#### Returns

`symbol`

#### Overrides

`AsyncDirective.update`

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:14
