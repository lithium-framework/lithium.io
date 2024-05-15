[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / RepeatDirective

# Class: RepeatDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new RepeatDirective()

> **new RepeatDirective**(`partInfo`): [`RepeatDirective`](RepeatDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`RepeatDirective`](RepeatDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:12

## Properties

### \_getValuesAndKeys

> `private` **\_getValuesAndKeys**: `any`

#### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:13

***

### \_itemKeys?

> `private` `optional` **\_itemKeys**: `any`

#### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:11

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

#### render(items, template)

> **render**\<`T`\>(`items`, `template`): `unknown`[]

##### Type parameters

• **T**

##### Parameters

• **items**: `Iterable`\<`T`\>

• **template**: `ItemTemplate`\<`T`\>

##### Returns

`unknown`[]

##### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

##### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:14

#### render(items, keyFn, template)

> **render**\<`T`\>(`items`, `keyFn`, `template`): `unknown`[]

##### Type parameters

• **T**

##### Parameters

• **items**: `Iterable`\<`T`\>

• **keyFn**: `KeyFn`\<`T`\> \| `ItemTemplate`\<`T`\>

• **template**: `ItemTemplate`\<`T`\>

##### Returns

`unknown`[]

##### Overrides

`Directive.render`

##### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:15

***

### update()

> **update**\<`T`\>(`containerPart`, `__namedParameters`): `unknown`[] \| *typeof* `noChange`

#### Type parameters

• **T**

#### Parameters

• **containerPart**: `ChildPart`

• **\_\_namedParameters**: [`Iterable`\<`T`\>, `KeyFn`\<`T`\> \| `ItemTemplate`\<`T`\>, `ItemTemplate`\<`T`\>]

#### Returns

`unknown`[] \| *typeof* `noChange`

#### Overrides

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:16
