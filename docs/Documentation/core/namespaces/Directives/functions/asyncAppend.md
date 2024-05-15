[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / asyncAppend

# Function: asyncAppend()

> **asyncAppend**(`value`, `_mapper`?): `DirectiveResult`\<*typeof* [`AsyncAppendDirective`](../classes/AsyncAppendDirective.md)\>

A directive that renders the items of an async iterable[1], appending new
values after previous values, similar to the built-in support for iterables.
This directive is usable only in child expressions.

Async iterables are objects with a [Symbol.asyncIterator] method, which
returns an iterator who's `next()` method returns a Promise. When a new
value is available, the Promise resolves and the value is appended to the
Part controlled by the directive. If another value other than this
directive has been set on the Part, the iterable will no longer be listened
to and new values won't be written to the Part.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

## Parameters

• **value**: `AsyncIterable`\<`unknown`\>

An async iterable

• **\_mapper?**

## Returns

`DirectiveResult`\<*typeof* [`AsyncAppendDirective`](../classes/AsyncAppendDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/async-append.d.ts:33
