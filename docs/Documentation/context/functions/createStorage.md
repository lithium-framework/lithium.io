[**@lithium-framework/context**](../README.md) • **Docs**

***

[@lithium-framework/context](../README.md) / createStorage

# Function: createStorage()

> **createStorage**\<`RECORD`\>(`records`, `stateValidator`?): [`Storage`](../type-aliases/Storage.md)\<`RECORD`\>

La fonction `createStorage` crée un objet proxy pour gérer le stockage avec des méthodes d'accès et
de mise à jour des données.

## Type parameters

• **RECORD** *extends* `Record`\<`string`, `any`\>

## Parameters

• **records**: `Partial`\<`RECORD`\>= `{}`

Le paramètre `records` dans la fonction `createStorage` est utilisé pour
initialiser le stockage avec certaines données initiales. Il s'agit d'un objet partiel de type
`RECORD`, qui est un type générique étendant `Record<string, any>`. Ce paramètre vous permet de
fournir un ensemble initial de paires clé-valeur

• **stateValidator?**: [`StateValidator`](../type-aliases/StateValidator.md)

## Returns

[`Storage`](../type-aliases/Storage.md)\<`RECORD`\>

La fonction `createStorage` renvoie un objet Proxy qui entoure l'objet de stockage créé en
appelant `_storage.init` avec les enregistrements fournis. L'objet Proxy permet d'intercepter et de
personnaliser les opérations sur l'objet de stockage, telles que l'accès et la mise à jour des clés.

## Source

[create-storage.ts:14](https://github.com/lithium-framework/context/blob/25e1479e8ebfd81e7966f2d0997f8cc526a03b72/src/create-storage.ts#L14)
