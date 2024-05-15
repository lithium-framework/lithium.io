[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / UntilDirective

# Class: UntilDirective

## Extends

- `AsyncDirective`

## Constructors

### new UntilDirective()

> **new UntilDirective**(`_partInfo`): [`UntilDirective`](UntilDirective.md)

#### Parameters

• **\_partInfo**: `PartInfo`

#### Returns

[`UntilDirective`](UntilDirective.md)

#### Inherited from

`AsyncDirective.constructor`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:61

## Properties

### \_\_lastRenderedIndex

> `private` **\_\_lastRenderedIndex**: `any`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:9

***

### \_\_pauser

> `private` **\_\_pauser**: `any`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:12

***

### \_\_values

> `private` **\_\_values**: `any`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:10

***

### \_\_weakThis

> `private` **\_\_weakThis**: `any`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:11

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

### disconnected()

> **disconnected**(): `void`

#### Returns

`void`

#### Overrides

`AsyncDirective.disconnected`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:15

***

### reconnected()

> **reconnected**(): `void`

#### Returns

`void`

#### Overrides

`AsyncDirective.reconnected`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:16

***

### render()

> **render**(...`args`): `unknown`

#### Parameters

• ...**args**: `unknown`[]

#### Returns

`unknown`

#### Overrides

`AsyncDirective.render`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:13

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

> **update**(`_part`, `args`): `unknown`

#### Parameters

• **\_part**: `Part`

• **args**: `unknown`[]

#### Returns

`unknown`

#### Overrides

`AsyncDirective.update`

#### Source

core/node\_modules/lit-html/development/directives/until.d.ts:14
