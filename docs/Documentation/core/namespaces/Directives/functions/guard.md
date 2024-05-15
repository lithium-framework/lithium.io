[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / guard

# Function: guard()

> **guard**(`_value`, `f`): `DirectiveResult`\<*typeof* [`GuardDirective`](../classes/GuardDirective.md)\>

Prevents re-render of a template function until a single value or an array of
values changes.

Values are checked against previous values with strict equality (`===`), and
so the check won't detect nested property changes inside objects or arrays.
Arrays values have each item checked against the previous value at the same
index with strict equality. Nested arrays are also checked only by strict
equality.

Example:

```js
html`
  <div>
    ${guard([user.id, company.id], () => html`...`)}
  </div>
`
```

In this case, the template only rerenders if either `user.id` or `company.id`
changes.

guard() is useful with immutable data patterns, by preventing expensive work
until data updates.

Example:

```js
html`
  <div>
    ${guard([immutableItems], () => immutableItems.map(i => html`${i}`))}
  </div>
`
```

In this case, items are mapped over only when the array reference changes.

## Parameters

• **\_value**: `unknown`

• **f**

the template function

## Returns

`DirectiveResult`\<*typeof* [`GuardDirective`](../classes/GuardDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/guard.d.ts:54
