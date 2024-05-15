[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / FASTElement

# Variable: FASTElement

> **FASTElement**: () => `HTMLElement` & [`FASTElement`](../interfaces/FASTElement.md) & `object`

A minimal base class for FASTElements that also provides
static helpers for working with FASTElements.

## Type declaration

### define()

Defines a platform custom element based on the provided type and definition.

#### Type parameters

• **TType** *extends* `Function`

#### Parameters

• **type**: `TType`

The custom element type to define.

• **nameOrDef?**: `string` \| `PartialFASTElementDefinition`

The name of the element to define or a definition object
that describes the element to define.

#### Returns

`TType`

### from()

Creates a new FASTElement base class inherited from the
provided base type.

#### Type parameters

• **TBase** *extends* () => `HTMLElement`

#### Parameters

• **BaseType**: `TBase`

The base element type to inherit from.

#### Returns

`Function`

##### Returns

`InstanceType`\<`TBase`\> & [`FASTElement`](../interfaces/FASTElement.md)

## Source

state/node\_modules/@microsoft/fast-element/dist/fast-element.d.ts:869
