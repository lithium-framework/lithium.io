[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / UseStyleDirective

# Class: UseStyleDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new UseStyleDirective()

> **new UseStyleDirective**(`_partInfo`): [`UseStyleDirective`](UseStyleDirective.md)

#### Parameters

• **\_partInfo**: `PartInfo`

#### Returns

[`UseStyleDirective`](UseStyleDirective.md)

#### Inherited from

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

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

> **render**(`cssObject`): `string`

#### Parameters

• **cssObject**: `Partial`\<`Properties`\<`0` \| `string` & `object`, `string` & `object`\>\>

#### Returns

`string`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

[core/src/directives/use-style.ts:6](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-style.ts#L6)

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
