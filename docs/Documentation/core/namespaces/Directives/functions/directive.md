[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / directive

# Function: directive()

> **directive**\<`C`\>(`c`): (...`values`) => `DirectiveResult`\<`C`\>

Creates a user-facing directive function from a Directive class. This
function has the same parameters as the directive's render() method.

## Type parameters

• **C** *extends* `DirectiveClass`

## Parameters

• **c**: `C`

## Returns

`Function`

### Parameters

• ...**values**: `Parameters`\<`InstanceType`\<`C`\>\[`"render"`\]\>

### Returns

`DirectiveResult`\<`C`\>

## Source

core/node\_modules/lit-html/development/directive.d.ts:54
