[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / ClassMapDirective

# Class: ClassMapDirective

Base class for creating custom directives. Users should extend this class,
implement `render` and/or `update`, and then pass their subclass to
`directive`.

## Extends

- [`Directive`](Directive.md)

## Constructors

### new ClassMapDirective()

> **new ClassMapDirective**(`partInfo`): [`ClassMapDirective`](ClassMapDirective.md)

#### Parameters

• **partInfo**: `PartInfo`

#### Returns

[`ClassMapDirective`](ClassMapDirective.md)

#### Overrides

[`Directive`](Directive.md).[`constructor`](Directive.md#constructors)

#### Source

core/node\_modules/lit-html/development/directives/class-map.d.ts:21

## Properties

### \_previousClasses?

> `private` `optional` **\_previousClasses**: `any`

Stores the ClassInfo object applied to a given AttributePart.
Used to unset existing values when a new ClassInfo object is applied.

#### Source

core/node\_modules/lit-html/development/directives/class-map.d.ts:19

***

### \_staticClasses?

> `private` `optional` **\_staticClasses**: `any`

#### Source

core/node\_modules/lit-html/development/directives/class-map.d.ts:20

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/directive.d.ts:62

## Methods

### render()

> **render**(`classInfo`): `string`

#### Parameters

• **classInfo**: [`ClassInfo`](../interfaces/ClassInfo.md)

#### Returns

`string`

#### Overrides

[`Directive`](Directive.md).[`render`](Directive.md#render)

#### Source

core/node\_modules/lit-html/development/directives/class-map.d.ts:22

***

### update()

> **update**(`part`, `__namedParameters`): `string` \| *typeof* `noChange`

#### Parameters

• **part**: `AttributePart`

• **\_\_namedParameters**: [[`ClassInfo`](../interfaces/ClassInfo.md)]

#### Returns

`string` \| *typeof* `noChange`

#### Overrides

[`Directive`](Directive.md).[`update`](Directive.md#update)

#### Source

core/node\_modules/lit-html/development/directives/class-map.d.ts:23
