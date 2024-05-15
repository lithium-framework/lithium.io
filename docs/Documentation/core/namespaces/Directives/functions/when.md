[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / when

# Function: when()

## when(condition, trueCase, falseCase)

> **when**\<`C`, `T`, `F`\>(`condition`, `trueCase`, `falseCase`?): `F`

When `condition` is true, returns the result of calling `trueCase()`, else
returns the result of calling `falseCase()` if `falseCase` is defined.

This is a convenience wrapper around a ternary expression that makes it a
little nicer to write an inline conditional without an else.

### Type parameters

• **C** *extends* `Falsy`

• **T**

• **F** = `undefined`

### Parameters

• **condition**: `C`

• **trueCase**

• **falseCase?**

### Returns

`F`

### Example

```ts
render() {
  return html`
    ${when(this.user, () => html`User: ${this.user.username}`, () => html`Sign In...`)}
  `;
}
```

### Source

core/node\_modules/lit-html/development/directives/when.d.ts:24

## when(condition, trueCase, falseCase)

> **when**\<`C`, `T`, `F`\>(`condition`, `trueCase`, `falseCase`?): `T`

### Type parameters

• **C**

• **T**

• **F**

### Parameters

• **condition**: `C` *extends* `Falsy` ? `never` : `C`

• **trueCase**

• **falseCase?**

### Returns

`T`

### Source

core/node\_modules/lit-html/development/directives/when.d.ts:25

## when(condition, trueCase, falseCase)

> **when**\<`C`, `T`, `F`\>(`condition`, `trueCase`, `falseCase`?): `C` *extends* `Falsy` ? `F` : `T`

### Type parameters

• **C**

• **T**

• **F** = `undefined`

### Parameters

• **condition**: `C`

• **trueCase**

• **falseCase?**

### Returns

`C` *extends* `Falsy` ? `F` : `T`

### Source

core/node\_modules/lit-html/development/directives/when.d.ts:26
