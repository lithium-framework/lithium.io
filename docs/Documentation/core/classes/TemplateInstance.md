[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / TemplateInstance

# Class: TemplateInstance

An updateable instance of a Template. Holds references to the Parts used to
update the template instance.

## Implements

- `Disconnectable`

## Constructors

### new TemplateInstance()

> **new TemplateInstance**(`template`, `parent`): [`TemplateInstance`](TemplateInstance.md)

#### Parameters

• **template**: `Template`

• **parent**: `ChildPart`

#### Returns

[`TemplateInstance`](TemplateInstance.md)

#### Source

core/node\_modules/lit-html/development/lit-html.d.ts:371

## Properties

### \_$parts

> **\_$parts**: `Part`[]

#### Source

core/node\_modules/lit-html/development/lit-html.d.ts:370

***

### \_$template

> **\_$template**: `Template`

#### Source

core/node\_modules/lit-html/development/lit-html.d.ts:369

## Accessors

### \_$isConnected

> `get` **\_$isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

core/node\_modules/lit-html/development/lit-html.d.ts:373

***

### parentNode

> `get` **parentNode**(): `Node`

#### Returns

`Node`

#### Source

core/node\_modules/lit-html/development/lit-html.d.ts:372

## Methods

### \_clone()

> **\_clone**(`options`): `Node`

#### Parameters

• **options**: `RenderOptions`

#### Returns

`Node`

#### Source

core/node\_modules/lit-html/development/lit-html.d.ts:374

***

### \_update()

> **\_update**(`values`): `void`

#### Parameters

• **values**: `unknown`[]

#### Returns

`void`

#### Source

core/node\_modules/lit-html/development/lit-html.d.ts:375
