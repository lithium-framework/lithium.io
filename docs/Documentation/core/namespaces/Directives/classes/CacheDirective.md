[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / CacheDirective

# Class: CacheDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new CacheDirective()

> **new CacheDirective**(`partInfo`): [`CacheDirective`](CacheDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`CacheDirective`](CacheDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/cache.d.ts:11

## Properties

### \_templateCache

> `private` **\_templateCache**: `any`

#### Source

core/node\_modules/lit-html/development/directives/cache.d.ts:9

***

### \_value?

> `private` `optional` **\_value**: `any`

#### Source

core/node\_modules/lit-html/development/directives/cache.d.ts:10

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`v`): `unknown`[]

#### Parameters

• **v**: `unknown`

#### Returns

`unknown`[]

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/cache.d.ts:12

***

### update()

> **update**(`containerPart`, `__namedParameters`): `unknown`[]

#### Parameters

• **containerPart**: `ChildPart`

• **\_\_namedParameters**: [`unknown`]

#### Returns

`unknown`[]

#### Overrides

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directives/cache.d.ts:13
