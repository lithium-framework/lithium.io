[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / cache

# Function: cache()

> **cache**(`v`): `DirectiveResult`\<*typeof* [`CacheDirective`](../classes/CacheDirective.md)\>

Enables fast switching between multiple templates by caching the DOM nodes
and TemplateInstances produced by the templates.

Example:

```js
let checked = false;

html`
  ${cache(checked ? html`input is checked` : html`input is not checked`)}
`
```

## Parameters

• **v**: `unknown`

## Returns

`DirectiveResult`\<*typeof* [`CacheDirective`](../classes/CacheDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/cache.d.ts:29
