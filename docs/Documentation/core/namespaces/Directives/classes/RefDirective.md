[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / RefDirective

# Class: RefDirective

## Extends

- `AsyncDirective`

## Constructors

### new RefDirective()

> **new RefDirective**(`_partInfo`): [`RefDirective`](RefDirective.md)

#### Parameters

• **\_partInfo**: `PartInfo`

#### Returns

[`RefDirective`](RefDirective.md)

#### Inherited from

`AsyncDirective.constructor`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:61

## Properties

### \_context?

> `private` `optional` **\_context**: `any`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:27

***

### \_element?

> `private` `optional` **\_element**: `any`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:25

***

### \_ref?

> `private` `optional` **\_ref**: `any`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:26

***

### \_updateRefValue

> `private` **\_updateRefValue**: `any`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:30

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

***

### \_lastElementForRef

> `get` `private` **\_lastElementForRef**(): `any`

#### Returns

`any`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:31

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

### disconnected()

> **disconnected**(): `void`

#### Returns

`void`

#### Overrides

`AsyncDirective.disconnected`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:32

***

### reconnected()

> **reconnected**(): `void`

#### Returns

`void`

#### Overrides

`AsyncDirective.reconnected`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:33

***

### render()

> **render**(`_ref`?): `symbol`

#### Parameters

• **\_ref?**: [`RefOrCallback`](../type-aliases/RefOrCallback.md)\<`Element`\>

#### Returns

`symbol`

#### Overrides

`AsyncDirective.render`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:28

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

> **update**(`part`, `__namedParameters`): `symbol`

#### Parameters

• **part**: `ElementPart`

• **\_\_namedParameters**: [[`RefOrCallback`](../type-aliases/RefOrCallback.md)\<`Element`\>]

#### Returns

`symbol`

#### Overrides

`AsyncDirective.update`

#### Source

core/node\_modules/lit-html/development/directives/ref.d.ts:29
