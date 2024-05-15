[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / UnsafeHTMLDirective

# Class: UnsafeHTMLDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Extended by

- [`UnsafeSVGDirective`](UnsafeSVGDirective.md)

## Constructors

### new UnsafeHTMLDirective()

> **new UnsafeHTMLDirective**(`partInfo`): [`UnsafeHTMLDirective`](UnsafeHTMLDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`UnsafeHTMLDirective`](UnsafeHTMLDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:13

## Properties

### \_templateResult?

> `private` `optional` **\_templateResult**: `any`

#### Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:12

***

### \_value

> `private` **\_value**: `any`

#### Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:11

***

### directiveName

> `static` **directiveName**: `string`

#### Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:9

***

### resultType

> `static` **resultType**: `number`

#### Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:10

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`value`): `TemplateResult` \| *typeof* `noChange` \| *typeof* `nothing`

#### Parameters

• **value**: `string` \| *typeof* `noChange` \| *typeof* `nothing`

#### Returns

`TemplateResult` \| *typeof* `noChange` \| *typeof* `nothing`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:14

***

### update()

> **update**(`_part`, `props`): `unknown`

#### Parameters

• **\_part**: `Part`

• **props**: `unknown`[]

#### Returns

`unknown`

#### Inherited from

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directive.d.ts:64
