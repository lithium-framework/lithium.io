[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / FASTElement

# Interface: FASTElement

Represents a custom element based on the FASTElement infrastructure.

## Properties

### $fastController

> `readonly` **$fastController**: `Controller`

The underlying controller that handles the lifecycle and rendering of
this FASTElement.

#### Source

state/node\_modules/@microsoft/fast-element/dist/fast-element.d.ts:874

## Methods

### $emit()

> **$emit**(`type`, `detail`?, `options`?): `boolean` \| `void`

Emits a custom HTML event.

#### Parameters

• **type**: `string`

The type name of the event.

• **detail?**: `any`

The event detail object to send with the event.

• **options?**: `Omit`\<`CustomEventInit`\<`any`\>, `"detail"`\>

The event options. By default bubbles and composed.

#### Returns

`boolean` \| `void`

#### Remarks

Only emits events if the element is connected.

#### Source

state/node\_modules/@microsoft/fast-element/dist/fast-element.d.ts:883

***

### attributeChangedCallback()

> **attributeChangedCallback**(`name`, `oldValue`, `newValue`): `void`

The attribute changed callback for this FASTElement.

#### Parameters

• **name**: `string`

The name of the attribute that changed.

• **oldValue**: `string`

The previous value of the attribute.

• **newValue**: `string`

The new value of the attribute.

#### Returns

`void`

#### Remarks

This method is invoked by the platform whenever an observed
attribute of FASTElement has a value change.

#### Source

state/node\_modules/@microsoft/fast-element/dist/fast-element.d.ts:907

***

### connectedCallback()

> **connectedCallback**(): `void`

The connected callback for this FASTElement.

#### Returns

`void`

#### Remarks

This method is invoked by the platform whenever this FASTElement
becomes connected to the document.

#### Source

state/node\_modules/@microsoft/fast-element/dist/fast-element.d.ts:890

***

### disconnectedCallback()

> **disconnectedCallback**(): `void`

The disconnected callback for this FASTElement.

#### Returns

`void`

#### Remarks

This method is invoked by the platform whenever this FASTElement
becomes disconnected from the document.

#### Source

state/node\_modules/@microsoft/fast-element/dist/fast-element.d.ts:897
