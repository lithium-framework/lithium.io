[**@lithium-framework/core**](../README.md) • **Docs**

***

[@lithium-framework/core](../README.md) / RouterConfiguration

# Class: `abstract` RouterConfiguration\<TSettings\>

## Type parameters

• **TSettings** = `any`

## Constructors

### new RouterConfiguration()

> **new RouterConfiguration**\<`TSettings`\>(): [`RouterConfiguration`](RouterConfiguration.md)\<`TSettings`\>

#### Returns

[`RouterConfiguration`](RouterConfiguration.md)\<`TSettings`\>

## Properties

### contributors

> `readonly` **contributors**: `NavigationContributor`\<`TSettings`\>[]

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:670

***

### defaultLayout

> **defaultLayout**: `Layout`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:671

***

### defaultTransition

> **defaultTransition**: `Readonly`\<`Transition`\>

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:672

***

### ensureConfigured

> `private` **ensureConfigured**: `any`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:704

***

### isConfigured

> `private` **isConfigured**: `any`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:668

***

### parent

> **parent**: [`RouterConfiguration`](RouterConfiguration.md)\<`TSettings`\>

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:674

***

### routes

> `readonly` **routes**: `RouteCollection`\<`TSettings`\>

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:669

***

### title

> **title**: `string`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:673

## Methods

### cached()

> `protected` **cached**(`ElementType`): () => `Promise`\<`HTMLElement`\>

#### Parameters

• **ElementType**

#### Returns

`Function`

##### Returns

`Promise`\<`HTMLElement`\>

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:703

***

### configure()

> `protected` `abstract` **configure**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:702

***

### construct()

> **construct**\<`T`\>(`Type`): `T`

#### Type parameters

• **T**

#### Parameters

• **Type**: `Constructable`\<`T`\>

#### Returns

`T`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:681

***

### createEventSink()

> **createEventSink**(): `RoutingEventSink`

#### Returns

`RoutingEventSink`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:678

***

### createLinkHandler()

> **createLinkHandler**(): `LinkHandler`

#### Returns

`LinkHandler`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:676

***

### createNavigationProcess()

> **createNavigationProcess**(): `NavigationProcess`

#### Returns

`NavigationProcess`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:677

***

### createNavigationQueue()

> **createNavigationQueue**(): `NavigationQueue`

#### Returns

`NavigationQueue`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:675

***

### createRouteRecognizer()

> **createRouteRecognizer**(): `RouteRecognizer`\<`TSettings`\>

#### Returns

`RouteRecognizer`\<`TSettings`\>

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:680

***

### createTitleBuilder()

> **createTitleBuilder**(): `TitleBuilder`

#### Returns

`TitleBuilder`

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:679

***

### findContributors()

> **findContributors**\<`T`\>(`phase`): `Record`\<`T`, `NavigationPhaseHook`\<`TSettings`\>\>[]

#### Type parameters

• **T** *extends* `NavigationPhaseName`

#### Parameters

• **phase**: `T`

#### Returns

`Record`\<`T`, `NavigationPhaseHook`\<`TSettings`\>\>[]

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:701

***

### generateRouteFromName()

> **generateRouteFromName**(`name`, `params`): `Promise`\<`string`\>

Generate a path and query string from a route name and params object.

#### Parameters

• **name**: `string`

The name of the route to generate from.

• **params**: `object`

The route params to use when populating the pattern.
Properties not required by the pattern will be appended to the query string.

#### Returns

`Promise`\<`string`\>

The generated absolute path and query string.

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:691

***

### generateRouteFromPath()

> **generateRouteFromPath**(`path`, `params`): `Promise`\<`string`\>

Generate a path and query string from a route path and params object.

#### Parameters

• **path**: `string`

The path of the route to generate from.

• **params**: `object`

The route params to use when populating the pattern.
Properties not required by the pattern will be appended to the query string.

#### Returns

`Promise`\<`string`\>

The generated absolute path and query string.

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:700

***

### recognizeRoute()

> **recognizeRoute**(`path`): `Promise`\<`RouteMatch`\<`TSettings`\>\>

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`RouteMatch`\<`TSettings`\>\>

#### Source

core/node\_modules/@microsoft/fast-router/dist/fast-router.d.ts:682
