[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / range

# Function: range()

## range(end)

> **range**(`end`): `Iterable`\<`number`\>

Returns an iterable of integers from `start` to `end` (exclusive)
incrementing by `step`.

If `start` is omitted, the range starts at `0`. `step` defaults to `1`.

### Parameters

• **end**: `number`

### Returns

`Iterable`\<`number`\>

### Example

```ts
render() {
  return html`
    ${map(range(8), () => html`<div class="cell"></div>`)}
  `;
}
```

### Source

core/node\_modules/lit-html/development/directives/range.d.ts:22

## range(start, end, step)

> **range**(`start`, `end`, `step`?): `Iterable`\<`number`\>

### Parameters

• **start**: `number`

• **end**: `number`

• **step?**: `number`

### Returns

`Iterable`\<`number`\>

### Source

core/node\_modules/lit-html/development/directives/range.d.ts:23
