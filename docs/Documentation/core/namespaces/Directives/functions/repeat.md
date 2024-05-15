[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / repeat

# Function: repeat()

## repeat(items, keyFnOrTemplate, template)

> **repeat**\<`T`\>(`items`, `keyFnOrTemplate`, `template`?): `unknown`

A directive that repeats a series of values (usually `TemplateResults`)
generated from an iterable, and updates those items efficiently when the
iterable changes based on user-provided `keys` associated with each item.

Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
meaning previous DOM for a given key is moved into the new position if
needed, and DOM will never be reused with values for different keys (new DOM
will always be created for new keys). This is generally the most efficient
way to use `repeat` since it performs minimum unnecessary work for insertions
and removals.

The `keyFn` takes two parameters, the item and its index, and returns a unique key value.

```js
html`
  <ol>
    ${repeat(this.items, (item) => item.id, (item, index) => {
      return html`<li>${index}: ${item.name}</li>`;
    })}
  </ol>
`
```

**Important**: If providing a `keyFn`, keys *must* be unique for all items in a
given call to `repeat`. The behavior when two or more items have the same key
is undefined.

If no `keyFn` is provided, this directive will perform similar to mapping
items to values, and DOM will be reused against potentially different items.

### Type parameters

• **T**

### Parameters

• **items**: `Iterable`\<`T`\>

• **keyFnOrTemplate**: `KeyFn`\<`T`\> \| `ItemTemplate`\<`T`\>

• **template?**: `ItemTemplate`\<`T`\>

### Returns

`unknown`

### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:58

## repeat(items, template)

> **repeat**\<`T`\>(`items`, `template`): `unknown`

A directive that repeats a series of values (usually `TemplateResults`)
generated from an iterable, and updates those items efficiently when the
iterable changes based on user-provided `keys` associated with each item.

Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
meaning previous DOM for a given key is moved into the new position if
needed, and DOM will never be reused with values for different keys (new DOM
will always be created for new keys). This is generally the most efficient
way to use `repeat` since it performs minimum unnecessary work for insertions
and removals.

The `keyFn` takes two parameters, the item and its index, and returns a unique key value.

```js
html`
  <ol>
    ${repeat(this.items, (item) => item.id, (item, index) => {
      return html`<li>${index}: ${item.name}</li>`;
    })}
  </ol>
`
```

**Important**: If providing a `keyFn`, keys *must* be unique for all items in a
given call to `repeat`. The behavior when two or more items have the same key
is undefined.

If no `keyFn` is provided, this directive will perform similar to mapping
items to values, and DOM will be reused against potentially different items.

### Type parameters

• **T**

### Parameters

• **items**: `Iterable`\<`T`\>

• **template**: `ItemTemplate`\<`T`\>

### Returns

`unknown`

### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:58

## repeat(items, keyFn, template)

> **repeat**\<`T`\>(`items`, `keyFn`, `template`): `unknown`

A directive that repeats a series of values (usually `TemplateResults`)
generated from an iterable, and updates those items efficiently when the
iterable changes based on user-provided `keys` associated with each item.

Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
meaning previous DOM for a given key is moved into the new position if
needed, and DOM will never be reused with values for different keys (new DOM
will always be created for new keys). This is generally the most efficient
way to use `repeat` since it performs minimum unnecessary work for insertions
and removals.

The `keyFn` takes two parameters, the item and its index, and returns a unique key value.

```js
html`
  <ol>
    ${repeat(this.items, (item) => item.id, (item, index) => {
      return html`<li>${index}: ${item.name}</li>`;
    })}
  </ol>
`
```

**Important**: If providing a `keyFn`, keys *must* be unique for all items in a
given call to `repeat`. The behavior when two or more items have the same key
is undefined.

If no `keyFn` is provided, this directive will perform similar to mapping
items to values, and DOM will be reused against potentially different items.

### Type parameters

• **T**

### Parameters

• **items**: `Iterable`\<`T`\>

• **keyFn**: `KeyFn`\<`T`\> \| `ItemTemplate`\<`T`\>

• **template**: `ItemTemplate`\<`T`\>

### Returns

`unknown`

### Source

core/node\_modules/lit-html/development/directives/repeat.d.ts:58
