[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / live

# Function: live()

> **live**(`value`): `DirectiveResult`\<*typeof* [`LiveDirective`](../classes/LiveDirective.md)\>

Checks binding values against live DOM values, instead of previously bound
values, when determining whether to update the value.

This is useful for cases where the DOM value may change from outside of
lit-html, such as with a binding to an `<input>` element's `value` property,
a content editable elements text, or to a custom element that changes it's
own properties or attributes.

In these cases if the DOM value changes, but the value set through lit-html
bindings hasn't, lit-html won't know to update the DOM value and will leave
it alone. If this is not what you want--if you want to overwrite the DOM
value with the bound value no matter what--use the `live()` directive:

```js
html`<input .value=${live(x)}>`
```

`live()` performs a strict equality check against the live DOM value, and if
the new value is equal to the live value, does nothing. This means that
`live()` should not be used when the binding will cause a type conversion. If
you use `live()` with an attribute binding, make sure that only strings are
passed in, or the binding will update every render.

## Parameters

• **value**: `unknown`

## Returns

`DirectiveResult`\<*typeof* [`LiveDirective`](../classes/LiveDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/live.d.ts:37
