[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / TemplateContentDirective

# Class: TemplateContentDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new TemplateContentDirective()

> **new TemplateContentDirective**(`partInfo`): [`TemplateContentDirective`](TemplateContentDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`TemplateContentDirective`](TemplateContentDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/template-content.d.ts:10

## Properties

### \_previousTemplate?

> `private` `optional` **\_previousTemplate**: `any`

#### Source

core/node\_modules/lit-html/development/directives/template-content.d.ts:9

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`template`): `DocumentFragment` \| *typeof* `noChange`

#### Parameters

• **template**: `HTMLTemplateElement`

#### Returns

`DocumentFragment` \| *typeof* `noChange`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/template-content.d.ts:11

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
