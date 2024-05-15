[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / UseEffectDirective

# Class: UseEffectDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new UseEffectDirective()

> **new UseEffectDirective**(`partInfo`): [`UseEffectDirective`](UseEffectDirective.md)

#### Parameters

• **partInfo**: `any`

#### Returns

[`UseEffectDirective`](UseEffectDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

[core/src/directives/use-effect.ts:21](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-effect.ts#L21)

## Properties

### \_isMounted

> `private` **\_isMounted**: `boolean` = `false`

#### Source

[core/src/directives/use-effect.ts:10](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-effect.ts#L10)

## Accessors

### \_$isConnected

> `set` **\_$isConnected**(`value`): `void`

#### Parameters

• **value**: `any`

#### Source

[core/src/directives/use-effect.ts:16](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-effect.ts#L16)

***

### parent

> `get` **parent**(): `any`

#### Returns

`any`

#### Source

[core/src/directives/use-effect.ts:7](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-effect.ts#L7)

***

### part

> `get` **part**(): `any`

#### Returns

`any`

#### Source

[core/src/directives/use-effect.ts:8](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-effect.ts#L8)

## Methods

### render()

> **render**(`callback`, `observables`): `void`

#### Parameters

• **callback**

• **observables**: [`State`](../../../classes/State.md)\<`any`\>[]= `[]`

#### Returns

`void`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

[core/src/directives/use-effect.ts:25](https://github.com/lithium-framework/core/blob/898b97575247d7f7aba321103f29e7e30cdcbc67/src/directives/use-effect.ts#L25)

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
