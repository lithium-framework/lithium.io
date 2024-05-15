[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / AsyncAppendDirective

# Class: AsyncAppendDirective

## Extends

- [`AsyncReplaceDirective`](AsyncReplaceDirective.md)

## Constructors

### new AsyncAppendDirective()

> **new AsyncAppendDirective**(`partInfo`): [`AsyncAppendDirective`](AsyncAppendDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`AsyncAppendDirective`](AsyncAppendDirective.md)

#### Overrides

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`constructor`](AsyncReplaceDirective.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/async-append.d.ts:11

## Properties

### \_\_childPart

> `private` **\_\_childPart**: `any`

#### Source

core/node\_modules/lit-html/development/directives/async-append.d.ts:10

***

### isConnected

> **isConnected**: `boolean`

The connection state for this Directive.

#### Inherited from

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`isConnected`](AsyncReplaceDirective.md#isconnected)

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

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`_$initialize`](AsyncReplaceDirective.md#_$initialize)

#### Source

core/node\_modules/lit-html/development/async-directive.d.ts:150

***

### commitValue()

> `protected` **commitValue**(`value`, `index`): `void`

#### Parameters

• **value**: `unknown`

• **index**: `number`

#### Returns

`void`

#### Overrides

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`commitValue`](AsyncReplaceDirective.md#commitvalue)

#### Source

core/node\_modules/lit-html/development/directives/async-append.d.ts:13

***

### disconnected()

> **disconnected**(): `void`

#### Returns

`void`

#### Inherited from

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`disconnected`](AsyncReplaceDirective.md#disconnected)

#### Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:16

***

### reconnected()

> **reconnected**(): `void`

#### Returns

`void`

#### Inherited from

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`reconnected`](AsyncReplaceDirective.md#reconnected)

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

#### Inherited from

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`render`](AsyncReplaceDirective.md#render)

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

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`setValue`](AsyncReplaceDirective.md#setvalue)

#### Source

core/node\_modules/lit-html/development/async-directive.d.ts:161

***

### update()

> **update**(`part`, `params`): `symbol`

#### Parameters

• **part**: `ChildPart`

• **params**: [`AsyncIterable`\<`unknown`\>, `Mapper`\<`unknown`\>]

#### Returns

`symbol`

#### Overrides

[`AsyncReplaceDirective`](AsyncReplaceDirective.md).[`update`](AsyncReplaceDirective.md#update)

#### Source

core/node\_modules/lit-html/development/directives/async-append.d.ts:12
