[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / ref

# Function: ref()

> **ref**(`_ref`?): `DirectiveResult`\<*typeof* [`RefDirective`](../classes/RefDirective.md)\>

Sets the value of a Ref object or calls a ref callback with the element it's
bound to.

A Ref object acts as a container for a reference to an element. A ref
callback is a function that takes an element as its only argument.

The ref directive sets the value of the Ref object or calls the ref callback
during rendering, if the referenced element changed.

Note: If a ref callback is rendered to a different element position or is
removed in a subsequent render, it will first be called with `undefined`,
followed by another call with the new element it was rendered to (if any).

```js
// Using Ref object
const inputRef = createRef();
render(html`<input ${ref(inputRef)}>`, container);
inputRef.value.focus();

// Using callback
const callback = (inputElement) => inputElement.focus();
render(html`<input ${ref(callback)}>`, container);
```

## Parameters

• **\_ref?**: [`RefOrCallback`](../type-aliases/RefOrCallback.md)\<`Element`\>

## Returns

`DirectiveResult`\<*typeof* [`RefDirective`](../classes/RefDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/ref.d.ts:60
