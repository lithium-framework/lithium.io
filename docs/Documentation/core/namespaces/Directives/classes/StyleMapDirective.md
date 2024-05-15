[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / StyleMapDirective

# Class: StyleMapDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new StyleMapDirective()

> **new StyleMapDirective**(`partInfo`): [`StyleMapDirective`](StyleMapDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`StyleMapDirective`](StyleMapDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/style-map.d.ts:20

## Properties

### \_previousStyleProperties?

> `private` `optional` **\_previousStyleProperties**: `any`

#### Source

core/node\_modules/lit-html/development/directives/style-map.d.ts:19

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`styleInfo`): `string`

#### Parameters

• **styleInfo**: `Readonly`\<`StyleInfo`\>

#### Returns

`string`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/style-map.d.ts:21

***

### update()

> **update**(`part`, `__namedParameters`): `string` \| *typeof* `noChange`

#### Parameters

• **part**: `AttributePart`

• **\_\_namedParameters**: [`Readonly`\<`StyleInfo`\>]

#### Returns

`string` \| *typeof* `noChange`

#### Overrides

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directives/style-map.d.ts:22
