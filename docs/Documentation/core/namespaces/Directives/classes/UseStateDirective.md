[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / UseStateDirective

# Class: UseStateDirective\<T\>

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Type parameters

• **T** *extends* [`State`](../../../classes/State.md)\<`T`\> = [`State`](../../../classes/State.md)\<`any`\>

## Constructors

### new UseStateDirective()

> **new UseStateDirective**\<`T`\>(`partInfo`): [`UseStateDirective`](UseStateDirective.md)\<`T`\>

#### Parameters

• **partInfo**: `any`

#### Returns

[`UseStateDirective`](UseStateDirective.md)\<`T`\>

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

[core/src/directives/use-state.ts:10](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-state.ts#L10)

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

***

### parent

> `get` **parent**(): `any`

#### Returns

`any`

#### Source

[core/src/directives/use-state.ts:7](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-state.ts#L7)

***

### part

> `get` **part**(): `any`

#### Returns

`any`

#### Source

[core/src/directives/use-state.ts:8](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-state.ts#L8)

## Methods

### render()

> **render**(`state`, `callback`?): `any`

#### Parameters

• **state**: `T`

• **callback?**

#### Returns

`any`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

[core/src/directives/use-state.ts:14](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-state.ts#L14)

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
