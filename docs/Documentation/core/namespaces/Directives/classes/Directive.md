[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / Directive

# Class: `abstract` Directive

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extended by

- [`CacheDirective`](CacheDirective.md)
- [`ClassMapDirective`](ClassMapDirective.md)
- [`GuardDirective`](GuardDirective.md)
- [`Keyed`](Keyed.md)
- [`LiveDirective`](LiveDirective.md)
- [`RepeatDirective`](RepeatDirective.md)
- [`StyleMapDirective`](StyleMapDirective.md)
- [`TemplateContentDirective`](TemplateContentDirective.md)
- [`UnsafeHTMLDirective`](UnsafeHTMLDirective.md)
- [`UseStateDirective`](UseStateDirective.md)
- [`UseStyleDirective`](UseStyleDirective.md)
- [`UseEffectDirective`](UseEffectDirective.md)

## Implements

- `Disconnectable`

## Constructors

### new Directive()

> **new Directive**(`_partInfo`): [`Directive`](Directive.md)

#### Parameters

• **\_partInfo**: `PartInfo`

#### Returns

[`Directive`](Directive.md)

#### Source

core/node\_modules/lit-html/development/directive.d.ts:61

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> `abstract` **render**(...`props`): `unknown`

#### Parameters

• ...**props**: `unknown`[]

#### Returns

`unknown`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:63

***

### update()

> **update**(`_part`, `props`): `unknown`

#### Parameters

• **\_part**: `Part`

• **props**: `unknown`[]

#### Returns

`unknown`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:64
