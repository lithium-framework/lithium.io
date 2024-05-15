[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / LiveDirective

# Class: LiveDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new LiveDirective()

> **new LiveDirective**(`partInfo`): [`LiveDirective`](LiveDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`LiveDirective`](LiveDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/live.d.ts:9

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`value`): `unknown`

#### Parameters

• **value**: `unknown`

#### Returns

`unknown`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/live.d.ts:10

***

### update()

> **update**(`part`, `__namedParameters`): `unknown`

#### Parameters

• **part**: `AttributePart`

• **\_\_namedParameters**: [`unknown`]

#### Returns

`unknown`

#### Overrides

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directives/live.d.ts:11
