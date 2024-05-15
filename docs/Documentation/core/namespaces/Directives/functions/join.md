[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / join

# Function: join()

## join(items, joiner)

> **join**\<`I`, `J`\>(`items`, `joiner`): `Iterable`\<`I` \| `J`\>

Returns an iterable containing the values in `items` interleaved with the
`joiner` value.

### Type parameters

• **I**

• **J**

### Parameters

• **items**: `Iterable`\<`I`\>

• **joiner**

### Returns

`Iterable`\<`I` \| `J`\>

### Example

```ts
render() {
  return html`
    ${join(items, html`<span class="separator">|</span>`)}
  `;
}

### Source

core/node\_modules/lit-html/development/directives/join.d.ts:19

## join(items, joiner)

> **join**\<`I`, `J`\>(`items`, `joiner`): `Iterable`\<`I` \| `J`\>

### Type parameters

• **I**

• **J**

### Parameters

• **items**: `Iterable`\<`I`\>

• **joiner**: `J`

### Returns

`Iterable`\<`I` \| `J`\>

### Source

core/node\_modules/lit-html/development/directives/join.d.ts:20
