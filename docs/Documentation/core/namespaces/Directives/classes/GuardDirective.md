[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / GuardDirective

# Class: GuardDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new GuardDirective()

> **new GuardDirective**(`_partInfo`): [`GuardDirective`](GuardDirective.md)

#### Parameters

• **\_partInfo**: `PartInfo`

#### Returns

[`GuardDirective`](GuardDirective.md)

#### Inherited from

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directive.d.ts:61

## Properties

### \_previousValue

> `private` **\_previousValue**: `any`

#### Source

core/node\_modules/lit-html/development/directives/guard.d.ts:9

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`_value`, `f`): `unknown`

#### Parameters

• **\_value**: `unknown`

• **f**

#### Returns

`unknown`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/guard.d.ts:10

***

### update()

> **update**(`_part`, `__namedParameters`): `unknown`

#### Parameters

• **\_part**: `Part`

• **\_\_namedParameters**: [`unknown`, () => `unknown`]

#### Returns

`unknown`

#### Overrides

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directives/guard.d.ts:11
