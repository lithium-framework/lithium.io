[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / map

# Function: map()

> **map**\<`T`\>(`items`, `f`): `Generator`\<`unknown`, `void`, `unknown`\>

Returns an iterable containing the result of calling `f(value)` on each
value in `items`.

## Type parameters

• **T**

## Parameters

• **items**: `Iterable`\<`T`\>

• **f**

## Returns

`Generator`\<`unknown`, `void`, `unknown`\>

## Example

```ts
render() {
  return html`
    <ul>
      ${map(items, (i) => html`<li>${i}</li>`)}
    </ul>
  `;
}
```

## Source

core/node\_modules/lit-html/development/directives/map.d.ts:22
