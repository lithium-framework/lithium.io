[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / fasthtml

# Function: fasthtml()

> **fasthtml**\<`TSource`, `TParent`\>(`strings`, ...`values`): `ViewTemplate`\<`TSource`, `TParent`\>

Transforms a template literal string into a renderable ViewTemplate.

## Type parameters

• **TSource** = `any`

• **TParent** = `any`

## Parameters

• **strings**: `TemplateStringsArray`

The string fragments that are interpolated with the values.

• ...**values**: `TemplateValue`\<`TSource`, `TParent`\>[]

The values that are interpolated with the string fragments.

## Returns

`ViewTemplate`\<`TSource`, `TParent`\>

## Remarks

The html helper supports interpolation of strings, numbers, binding expressions,
other template instances, and Directive instances.

## Source

state/node\_modules/@microsoft/fast-element/dist/fast-element.d.ts:1042
