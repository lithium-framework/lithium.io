[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / UnsafeSVGDirective

# Class: UnsafeSVGDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`UnsafeHTMLDirective`](UnsafeHTMLDirective.md)

## Constructors

### new UnsafeSVGDirective()

> **new UnsafeSVGDirective**(`partInfo`): [`UnsafeSVGDirective`](UnsafeSVGDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`UnsafeSVGDirective`](UnsafeSVGDirective.md)

#### Inherited from

[`UnsafeHTMLDirective`](UnsafeHTMLDirective.md).[`constructor`](UnsafeHTMLDirective.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:13

## Properties

### directiveName

> `static` **directiveName**: `string`

#### Overrides

[`UnsafeHTMLDirective`](UnsafeHTMLDirective.md).[`directiveName`](UnsafeHTMLDirective.md#directivename)

#### Source

core/node\_modules/lit-html/development/directives/unsafe-svg.d.ts:8

***

### resultType

> `static` **resultType**: `number`

#### Overrides

[`UnsafeHTMLDirective`](UnsafeHTMLDirective.md).[`resultType`](UnsafeHTMLDirective.md#resulttype)

#### Source

core/node\_modules/lit-html/development/directives/unsafe-svg.d.ts:9

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

#### Inherited from

[`UnsafeHTMLDirective`](UnsafeHTMLDirective.md).[`render`](UnsafeHTMLDirective.md#render)

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

[`UnsafeHTMLDirective`](UnsafeHTMLDirective.md).[`update`](UnsafeHTMLDirective.md#update)

#### Source

core/node\_modules/lit-html/development/directive.d.ts:64
