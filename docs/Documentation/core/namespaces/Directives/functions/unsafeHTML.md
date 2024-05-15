[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / unsafeHTML

# Function: unsafeHTML()

> **unsafeHTML**(`value`): `DirectiveResult`\<*typeof* [`UnsafeHTMLDirective`](../classes/UnsafeHTMLDirective.md)\>

Renders the result as HTML, rather than text.

The values `undefined`, `null`, and `nothing`, will all result in no content
(empty string) being rendered.

Note, this is unsafe to use with any user-provided input that hasn't been
sanitized or escaped, as it may lead to cross-site-scripting
vulnerabilities.

## Parameters

• **value**: `string` \| *typeof* `noChange` \| *typeof* `nothing`

## Returns

`DirectiveResult`\<*typeof* [`UnsafeHTMLDirective`](../classes/UnsafeHTMLDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/unsafe-html.d.ts:26
