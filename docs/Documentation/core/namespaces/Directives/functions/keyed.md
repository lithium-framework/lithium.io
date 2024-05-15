[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / keyed

# Function: keyed()

> **keyed**(`k`, `v`): `DirectiveResult`\<*typeof* [`Keyed`](../classes/Keyed.md)\>

Associates a renderable value with a unique key. When the key changes, the
previous DOM is removed and disposed before rendering the next value, even
if the value - such as a template - is the same.

This is useful for forcing re-renders of stateful components, or working
with code that expects new data to generate new HTML elements, such as some
animation techniques.

## Parameters

• **k**: `unknown`

• **v**: `unknown`

## Returns

`DirectiveResult`\<*typeof* [`Keyed`](../classes/Keyed.md)\>

## Source

core/node\_modules/lit-html/development/directives/keyed.d.ts:21
