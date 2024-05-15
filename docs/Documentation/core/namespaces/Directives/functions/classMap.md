[**@lithium-framework/core**](../../../README.md) • **Docs**

***

[@lithium-framework/core](../../../README.md) / [Directives](../README.md) / classMap

# Function: classMap()

> **classMap**(`classInfo`): `DirectiveResult`\<*typeof* [`ClassMapDirective`](../classes/ClassMapDirective.md)\>

A directive that applies dynamic CSS classes.

This must be used in the `class` attribute and must be the only part used in
the attribute. It takes each property in the `classInfo` argument and adds
the property name to the element's `classList` if the property value is
truthy; if the property value is falsey, the property name is removed from
the element's `class`.

For example `{foo: bar}` applies the class `foo` if the value of `bar` is
truthy.

## Parameters

• **classInfo**: [`ClassInfo`](../interfaces/ClassInfo.md)

## Returns

`DirectiveResult`\<*typeof* [`ClassMapDirective`](../classes/ClassMapDirective.md)\>

## Source

core/node\_modules/lit-html/development/directives/class-map.d.ts:39
