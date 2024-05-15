[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / templateContent

# Function: templateContent()

> **templateContent**(`template`): `DirectiveResult`\<*typeof* [`TemplateContentDirective`](../classes/TemplateContentDirective.md)\>

Renders the content of a template element as HTML.

Note, the template should be developer controlled and not user controlled.
Rendering a user-controlled template with this directive
could lead to cross-site-scripting vulnerabilities.

## Parameters

• **template**: `HTMLTemplateElement`

## Returns

`DirectiveResult`\<*typeof* [`TemplateContentDirective`](../classes/TemplateContentDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/template-content.d.ts:20
