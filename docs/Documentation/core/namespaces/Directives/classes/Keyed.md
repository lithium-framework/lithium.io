[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / Keyed

# Class: Keyed

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new Keyed()

> **new Keyed**(`_partInfo`): [`Keyed`](Keyed.md)

#### Parameters

• **\_partInfo**: `PartInfo`

#### Returns

[`Keyed`](Keyed.md)

#### Inherited from

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directive.d.ts:61

## Properties

### key

> **key**: `unknown`

#### Source

core/node\_modules/lit-html/development/directives/keyed.d.ts:8

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`k`, `v`): `unknown`

#### Parameters

• **k**: `unknown`

• **v**: `unknown`

#### Returns

`unknown`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/keyed.d.ts:9

***

### update()

> **update**(`part`, `__namedParameters`): `unknown`

#### Parameters

• **part**: `ChildPart`

• **\_\_namedParameters**: [`unknown`, `unknown`]

#### Returns

`unknown`

#### Overrides

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directives/keyed.d.ts:10
