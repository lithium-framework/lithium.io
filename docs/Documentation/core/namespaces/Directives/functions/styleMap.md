[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / styleMap

# Function: styleMap()

> **styleMap**(`styleInfo`): `DirectiveResult`\<*typeof* [`StyleMapDirective`](../classes/StyleMapDirective.md)\>

A directive that applies CSS properties to an element.

`styleMap` can only be used in the `style` attribute and must be the only
expression in the attribute. It takes the property names in the
StyleInfo styleInfo object and adds the properties to the inline
style of the element.

Property names with dashes (`-`) are assumed to be valid CSS
property names and set on the element's style object using `setProperty()`.
Names without dashes are assumed to be camelCased JavaScript property names
and set on the element's style object using property assignment, allowing the
style object to translate JavaScript-style names to CSS property names.

For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
'0'})` sets the `background-color`, `border-top` and `--size` properties.

## Parameters

• **styleInfo**: `Readonly`\<`StyleInfo`\>

## Returns

`DirectiveResult`\<*typeof* [`StyleMapDirective`](../classes/StyleMapDirective.md)\>

## See

[styleMap code samples on Lit.dev](https://lit.dev/docs/templates/directives/#stylemap)

## Source

core/node\_modules/lit-html/development/directives/style-map.d.ts:44
