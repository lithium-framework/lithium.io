[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / choose

# Function: choose()

> **choose**\<`T`, `V`, `K`\>(`value`, `cases`, `defaultCase`?): `V`

Chooses and evaluates a template function from a list based on matching
the given `value` to a case.

Cases are structured as `[caseValue, func]`. `value` is matched to
`caseValue` by strict equality. The first match is selected. Case values
can be of any type including primitives, objects, and symbols.

This is similar to a switch statement, but as an expression and without
fallthrough.

## Type parameters

• **T**

• **V**

• **K** = `T`

## Parameters

• **value**: `T`

• **cases**: [`K`, () => `V`][]

• **defaultCase?**

## Returns

`V`

## Example

```ts
render() {
  return html`
    ${choose(this.section, [
      ['home', () => html`<h1>Home</h1>`],
      ['about', () => html`<h1>About</h1>`]
    ],
    () => html`<h1>Error</h1>`)}
  `;
}
```

## Source

core/node\_modules/lit-html/development/directives/choose.d.ts:31
