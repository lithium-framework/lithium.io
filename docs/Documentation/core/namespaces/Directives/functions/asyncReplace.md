[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / asyncReplace

# Function: asyncReplace()

> **asyncReplace**(`value`, `_mapper`?): `DirectiveResult`\<*typeof* [`AsyncReplaceDirective`](../classes/AsyncReplaceDirective.md)\>

A directive that renders the items of an async iterable[1], replacing
previous values with new values, so that only one value is ever rendered
at a time. This directive may be used in any expression type.

Async iterables are objects with a `[Symbol.asyncIterator]` method, which
returns an iterator who's `next()` method returns a Promise. When a new
value is available, the Promise resolves and the value is rendered to the
Part controlled by the directive. If another value other than this
directive has been set on the Part, the iterable will no longer be listened
to and new values won't be written to the Part.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

## Parameters

• **value**: `AsyncIterable`\<`unknown`\>

An async iterable

• **\_mapper?**: `Mapper`\<`unknown`\>

## Returns

`DirectiveResult`\<*typeof* [`AsyncReplaceDirective`](../classes/AsyncReplaceDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/async-replace.d.ts:37
