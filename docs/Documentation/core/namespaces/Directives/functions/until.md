[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / until

# Function: until()

> **until**(...`values`): `DirectiveResult`\<*typeof* [`UntilDirective`](../classes/UntilDirective.md)\>

Renders one of a series of values, including Promises, to a Part.

Values are rendered in priority order, with the first argument having the
highest priority and the last argument having the lowest priority. If a
value is a Promise, low-priority values will be rendered until it resolves.

The priority of values can be used to create placeholder content for async
data. For example, a Promise with pending content can be the first,
highest-priority, argument, and a non_promise loading indicator template can
be used as the second, lower-priority, argument. The loading indicator will
render immediately, and the primary content will render when the Promise
resolves.

Example:

```js
const content = fetch('./content.txt').then(r => r.text());
html`${until(content, html`<span>Loading...</span>`)}`
```

## Parameters

• ...**values**: `unknown`[]

## Returns

`DirectiveResult`\<*typeof* [`UntilDirective`](../classes/UntilDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/until.d.ts:39
