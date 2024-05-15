[**@lithium-framework/huid**](../README.md) • **Docs**

***

[@lithium-framework/huid](../README.md) / \_HUID

# Class: \_HUID

Classe _HUID pour manipuler les UUID hiérarchiques

## Extends

- `String`

## Constructors

### new \_HUID()

> **new \_HUID**(`value`?): [`_HUID`](HUID.md)

#### Parameters

• **value?**: `any`

#### Returns

[`_HUID`](HUID.md)

#### Inherited from

`String.constructor`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:535

## Properties

### length

> `readonly` **length**: `number`

Returns the length of a String object.

#### Inherited from

`String.length`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:517

## Accessors

### collectionId

> `get` **collectionId**(): [`CollectionId`](../type-aliases/CollectionId.md)

Méthode pour obtenir l'identifiant de collection en extrayant la cinquième partie de l'UUID.

#### Returns

[`CollectionId`](../type-aliases/CollectionId.md)

L'identifiant de collection est renvoyé.

#### Source

[huid/src/index.ts:63](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L63)

***

### componentId

> `get` **componentId**(): [`ComponentId`](../type-aliases/ComponentId.md)

Méthode pour obtenir l'identifiant de composant en extrayant la première partie de l'UUID.

#### Returns

[`ComponentId`](../type-aliases/ComponentId.md)

L'identifiant de composant est renvoyé.

#### Source

[huid/src/index.ts:39](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L39)

***

### parentId

> `get` **parentId**(): [`FixedLengthString`](../type-aliases/FixedLengthString.md)\<`12`\>

Méthode pour obtenir l'identifiant parent en concaténant les sections 1, 2 et 3.

#### Returns

[`FixedLengthString`](../type-aliases/FixedLengthString.md)\<`12`\>

La méthode `parentId` renvoie une chaîne qui est la concaténation de `this.section1`,
`this.section2` et `this.section3`. La chaîne résultante a une longueur fixe de 12 caractères.

#### Source

[huid/src/index.ts:70](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L70)

***

### section1

> `get` **section1**(): [`Segment`](../type-aliases/Segment.md)

Méthode pour obtenir la première section de l'UUID après sa division par '-'.

#### Returns

[`Segment`](../type-aliases/Segment.md)

La première section de l'UUID après division par '-' est renvoyée.

#### Source

[huid/src/index.ts:45](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L45)

***

### section2

> `get` **section2**(): [`Segment`](../type-aliases/Segment.md)

Méthode pour obtenir la deuxième section de l'UUID après sa division par '-'.

#### Returns

[`Segment`](../type-aliases/Segment.md)

La deuxième section de l'UUID après division par '-' est renvoyée.

#### Source

[huid/src/index.ts:51](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L51)

***

### section3

> `get` **section3**(): [`Segment`](../type-aliases/Segment.md)

Méthode pour obtenir la troisième section de l'UUID après sa division par '-'.

#### Returns

[`Segment`](../type-aliases/Segment.md)

La troisième section de l'UUID après division par '-' est renvoyée.

#### Source

[huid/src/index.ts:57](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L57)

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<`string`\>

Iterator

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

`String.[iterator]`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:238

***

### ~~anchor()~~

> **anchor**(`name`): `string`

Returns an `<a>` HTML anchor element and sets the name attribute to the text value

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Inherited from

`String.anchor`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:459

***

### at()

> **at**(`index`): `string`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

• **index**: `number`

#### Returns

`string`

#### Inherited from

`String.at`

#### Source

server-doc/node\_modules/@types/node/globals.d.ts:131

***

### ~~big()~~

> **big**(): `string`

Returns a `<big>` HTML element

#### Returns

`string`

#### Inherited from

`String.big`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:465

***

### ~~blink()~~

> **blink**(): `string`

Returns a `<blink>` HTML element

#### Returns

`string`

#### Inherited from

`String.blink`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:471

***

### ~~bold()~~

> **bold**(): `string`

Returns a `<b>` HTML element

#### Returns

`string`

#### Inherited from

`String.bold`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:477

***

### charAt()

> **charAt**(`pos`): `string`

Returns the character at the specified index.

#### Parameters

• **pos**: `number`

The zero-based index of the desired character.

#### Returns

`string`

#### Inherited from

`String.charAt`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:418

***

### charCodeAt()

> **charCodeAt**(`index`): `number`

Returns the Unicode value of the character at the specified location.

#### Parameters

• **index**: `number`

The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.

#### Returns

`number`

#### Inherited from

`String.charCodeAt`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:424

***

### codePointAt()

> **codePointAt**(`pos`): `number`

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

#### Parameters

• **pos**: `number`

#### Returns

`number`

#### Inherited from

`String.codePointAt`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:406

***

### concat()

> **concat**(...`strings`): `string`

Returns a string that contains the concatenation of two or more strings.

#### Parameters

• ...**strings**: `string`[]

The strings to append to the end of the string.

#### Returns

`string`

#### Inherited from

`String.concat`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:430

***

### endsWith()

> **endsWith**(`searchString`, `endPosition`?): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

#### Parameters

• **searchString**: `string`

• **endPosition?**: `number`

#### Returns

`boolean`

#### Inherited from

`String.endsWith`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:422

***

### extend()

> **extend**(`options`?): [`_HUID`](HUID.md)

Méthode pour étendre l'UUID hiérarchique avec des options personnalisées.

#### Parameters

• **options?**: [`HierarchicalUUIDOptions`](../interfaces/HierarchicalUUIDOptions.md)

Le paramètre `options` est un objet facultatif
pouvant être passé à la fonction `extend`. Il vous permet de personnaliser le comportement de
la fonction en fournissant des valeurs pour les propriétés suivantes :

#### Returns

[`_HUID`](HUID.md)

un nouvel UUID hiérarchique (_HUID) généré à l'aide de la méthode `uuid.hv1`. Les
valeurs `parentId` et `collectionId` sont transmises en tant que paramètres à la méthode
`uuid.hv1`.

#### Source

[huid/src/index.ts:81](https://github.com/lithium-framework/huid/blob/982c2b7791351db64705f59c04989162f73d2765/src/index.ts#L81)

***

### ~~fixed()~~

> **fixed**(): `string`

Returns a `<tt>` HTML element

#### Returns

`string`

#### Inherited from

`String.fixed`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:483

***

### ~~fontcolor()~~

> **fontcolor**(`color`): `string`

Returns a `<font>` HTML element and sets the color attribute value

#### Parameters

• **color**: `string`

#### Returns

`string`

#### Inherited from

`String.fontcolor`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:489

***

### ~~fontsize()~~

#### fontsize(size)

> **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

##### Parameters

• **size**: `number`

##### Returns

`string`

##### Inherited from

`String.fontsize`

##### Deprecated

A legacy feature for browser compatibility

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:495

#### fontsize(size)

> **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

##### Parameters

• **size**: `string`

##### Returns

`string`

##### Inherited from

`String.fontsize`

##### Deprecated

A legacy feature for browser compatibility

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:501

***

### includes()

> **includes**(`searchString`, `position`?): `boolean`

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

#### Parameters

• **searchString**: `string`

search string

• **position?**: `number`

If position is undefined, 0 is assumed, so as to search all of the String.

#### Returns

`boolean`

#### Inherited from

`String.includes`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:415

***

### indexOf()

> **indexOf**(`searchString`, `position`?): `number`

Returns the position of the first occurrence of a substring.

#### Parameters

• **searchString**: `string`

The substring to search for in the string

• **position?**: `number`

The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.

#### Returns

`number`

#### Inherited from

`String.indexOf`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:437

***

### ~~italics()~~

> **italics**(): `string`

Returns an `<i>` HTML element

#### Returns

`string`

#### Inherited from

`String.italics`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:507

***

### lastIndexOf()

> **lastIndexOf**(`searchString`, `position`?): `number`

Returns the last occurrence of a substring in the string.

#### Parameters

• **searchString**: `string`

The substring to search for.

• **position?**: `number`

The index at which to begin searching. If omitted, the search begins at the end of the string.

#### Returns

`number`

#### Inherited from

`String.lastIndexOf`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:444

***

### ~~link()~~

> **link**(`url`): `string`

Returns an `<a>` HTML element and sets the href attribute value

#### Parameters

• **url**: `string`

#### Returns

`string`

#### Inherited from

`String.link`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:513

***

### localeCompare()

#### localeCompare(that)

> **localeCompare**(`that`): `number`

Determines whether two strings are equivalent in the current locale.

##### Parameters

• **that**: `string`

String to compare to target string

##### Returns

`number`

##### Inherited from

`String.localeCompare`

##### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:450

#### localeCompare(that, locales, options)

> **localeCompare**(`that`, `locales`?, `options`?): `number`

Determines whether two strings are equivalent in the current or specified locale.

##### Parameters

• **that**: `string`

String to compare to target string

• **locales?**: `string` \| `string`[]

A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.

• **options?**: `CollatorOptions`

An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.

##### Returns

`number`

##### Inherited from

`String.localeCompare`

##### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:4522

***

### match()

#### match(regexp)

> **match**(`regexp`): `RegExpMatchArray`

Matches a string with a regular expression, and returns an array containing the results of that search.

##### Parameters

• **regexp**: `string` \| `RegExp`

A variable name or string literal containing the regular expression pattern and flags.

##### Returns

`RegExpMatchArray`

##### Inherited from

`String.match`

##### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:456

#### match(matcher)

> **match**(`matcher`): `RegExpMatchArray`

Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.

##### Parameters

• **matcher**

An object that supports being matched against.

• **matcher.\[match\]**

##### Returns

`RegExpMatchArray`

##### Inherited from

`String.match`

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:241

***

### matchAll()

> **matchAll**(`regexp`): `IterableIterator`\<`RegExpMatchArray`\>

Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.

#### Parameters

• **regexp**: `RegExp`

A variable name or string literal containing the regular expression pattern and flags.

#### Returns

`IterableIterator`\<`RegExpMatchArray`\>

#### Inherited from

`String.matchAll`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2020.string.d.ts:27

***

### normalize()

#### normalize(form)

> **normalize**(`form`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

##### Parameters

• **form**: `"NFC"` \| `"NFD"` \| `"NFKC"` \| `"NFKD"`

Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"

##### Returns

`string`

##### Inherited from

`String.normalize`

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:430

#### normalize(form)

> **normalize**(`form`?): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

##### Parameters

• **form?**: `string`

Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"

##### Returns

`string`

##### Inherited from

`String.normalize`

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:438

***

### padEnd()

> **padEnd**(`maxLength`, `fillString`?): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.

#### Parameters

• **maxLength**: `number`

The length of the resulting string once the current string has been padded.
       If this parameter is smaller than the current string's length, the current string will be returned as it is.

• **fillString?**: `string`

The string to pad the current string with.
       If this string is too long, it will be truncated and the left-most part will be applied.
       The default value for this parameter is " " (U+0020).

#### Returns

`string`

#### Inherited from

`String.padEnd`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2017.string.d.ts:44

***

### padStart()

> **padStart**(`maxLength`, `fillString`?): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.

#### Parameters

• **maxLength**: `number`

The length of the resulting string once the current string has been padded.
       If this parameter is smaller than the current string's length, the current string will be returned as it is.

• **fillString?**: `string`

The string to pad the current string with.
       If this string is too long, it will be truncated and the left-most part will be applied.
       The default value for this parameter is " " (U+0020).

#### Returns

`string`

#### Inherited from

`String.padStart`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2017.string.d.ts:31

***

### repeat()

> **repeat**(`count`): `string`

Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.

#### Parameters

• **count**: `number`

number of copies to append

#### Returns

`string`

#### Inherited from

`String.repeat`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:445

***

### replace()

#### replace(searchValue, replaceValue)

> **replace**(`searchValue`, `replaceValue`): `string`

Replaces text in a string, using a regular expression or search string.

##### Parameters

• **searchValue**: `string` \| `RegExp`

A string or regular expression to search for.

• **replaceValue**: `string`

A string containing the text to replace. When the searchValue is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of searchValue is replaced.

##### Returns

`string`

##### Inherited from

`String.replace`

##### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:463

#### replace(searchValue, replacer)

> **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using a regular expression or search string.

##### Parameters

• **searchValue**: `string` \| `RegExp`

A string to search for.

• **replacer**

A function that returns the replacement text.

##### Returns

`string`

##### Inherited from

`String.replace`

##### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:470

#### replace(searchValue, replaceValue)

> **replace**(`searchValue`, `replaceValue`): `string`

Passes a string and replaceValue to the `[Symbol.replace]` method on searchValue. This method is expected to implement its own replacement algorithm.

##### Parameters

• **searchValue**

An object that supports searching for and replacing matches within a string.

• **searchValue.\[replace\]**

• **replaceValue**: `string`

The replacement text.

##### Returns

`string`

##### Inherited from

`String.replace`

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:248

#### replace(searchValue, replacer)

> **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using an object that supports replacement within a string.

##### Parameters

• **searchValue**

A object can search for and replace matches within a string.

• **searchValue.\[replace\]**

• **replacer**

A function that returns the replacement text.

##### Returns

`string`

##### Inherited from

`String.replace`

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:255

***

### search()

#### search(regexp)

> **search**(`regexp`): `number`

Finds the first substring match in a regular expression search.

##### Parameters

• **regexp**: `string` \| `RegExp`

The regular expression pattern and applicable flags.

##### Returns

`number`

##### Inherited from

`String.search`

##### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:476

#### search(searcher)

> **search**(`searcher`): `number`

Finds the first substring match in a regular expression search.

##### Parameters

• **searcher**

An object which supports searching within a string.

• **searcher.\[search\]**

##### Returns

`number`

##### Inherited from

`String.search`

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:261

***

### slice()

> **slice**(`start`?, `end`?): `string`

Returns a section of a string.

#### Parameters

• **start?**: `number`

The index to the beginning of the specified portion of stringObj.

• **end?**: `number`

The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.

#### Returns

`string`

#### Inherited from

`String.slice`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:484

***

### ~~small()~~

> **small**(): `string`

Returns a `<small>` HTML element

#### Returns

`string`

#### Inherited from

`String.small`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:519

***

### split()

#### split(separator, limit)

> **split**(`separator`, `limit`?): `string`[]

Split a string into substrings using the specified separator and return them as an array.

##### Parameters

• **separator**: `string` \| `RegExp`

A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

• **limit?**: `number`

A value used to limit the number of elements returned in the array.

##### Returns

`string`[]

##### Inherited from

`String.split`

##### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:491

#### split(splitter, limit)

> **split**(`splitter`, `limit`?): `string`[]

Split a string into substrings using the specified separator and return them as an array.

##### Parameters

• **splitter**

An object that can split a string.

• **splitter.\[split\]**

• **limit?**: `number`

A value used to limit the number of elements returned in the array.

##### Returns

`string`[]

##### Inherited from

`String.split`

##### Source

server-doc/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:268

***

### startsWith()

> **startsWith**(`searchString`, `position`?): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

#### Parameters

• **searchString**: `string`

• **position?**: `number`

#### Returns

`boolean`

#### Inherited from

`String.startsWith`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:452

***

### ~~strike()~~

> **strike**(): `string`

Returns a `<strike>` HTML element

#### Returns

`string`

#### Inherited from

`String.strike`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:525

***

### ~~sub()~~

> **sub**(): `string`

Returns a `<sub>` HTML element

#### Returns

`string`

#### Inherited from

`String.sub`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:531

***

### ~~substr()~~

> **substr**(`from`, `length`?): `string`

Gets a substring beginning at the specified location and having the specified length.

#### Parameters

• **from**: `number`

The starting position of the desired substring. The index of the first character in the string is zero.

• **length?**: `number`

The number of characters to include in the returned substring.

#### Returns

`string`

#### Inherited from

`String.substr`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:526

***

### substring()

> **substring**(`start`, `end`?): `string`

Returns the substring at the specified location within a String object.

#### Parameters

• **start**: `number`

The zero-based index number indicating the beginning of the substring.

• **end?**: `number`

Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.

#### Returns

`string`

#### Inherited from

`String.substring`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:499

***

### ~~sup()~~

> **sup**(): `string`

Returns a `<sup>` HTML element

#### Returns

`string`

#### Inherited from

`String.sup`

#### Deprecated

A legacy feature for browser compatibility

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:537

***

### toLocaleLowerCase()

> **toLocaleLowerCase**(`locales`?): `string`

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

#### Parameters

• **locales?**: `string` \| `string`[]

#### Returns

`string`

#### Inherited from

`String.toLocaleLowerCase`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:505

***

### toLocaleUpperCase()

> **toLocaleUpperCase**(`locales`?): `string`

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

#### Parameters

• **locales?**: `string` \| `string`[]

#### Returns

`string`

#### Inherited from

`String.toLocaleUpperCase`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:511

***

### toLowerCase()

> **toLowerCase**(): `string`

Converts all the alphabetic characters in a string to lowercase.

#### Returns

`string`

#### Inherited from

`String.toLowerCase`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:502

***

### toString()

> **toString**(): `string`

Returns a string representation of a string.

#### Returns

`string`

#### Inherited from

`String.toString`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:412

***

### toUpperCase()

> **toUpperCase**(): `string`

Converts all the alphabetic characters in a string to uppercase.

#### Returns

`string`

#### Inherited from

`String.toUpperCase`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:508

***

### trim()

> **trim**(): `string`

Removes the leading and trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

`String.trim`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:514

***

### trimEnd()

> **trimEnd**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

`String.trimEnd`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2019.string.d.ts:21

***

### ~~trimLeft()~~

> **trimLeft**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

`String.trimLeft`

#### Deprecated

A legacy feature for browser compatibility. Use `trimStart` instead

#### Source

server-doc/node\_modules/typescript/lib/lib.es2019.string.d.ts:30

***

### ~~trimRight()~~

> **trimRight**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

`String.trimRight`

#### Deprecated

A legacy feature for browser compatibility. Use `trimEnd` instead

#### Source

server-doc/node\_modules/typescript/lib/lib.es2019.string.d.ts:36

***

### trimStart()

> **trimStart**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

`String.trimStart`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2019.string.d.ts:24

***

### valueOf()

> **valueOf**(): `string`

Returns the primitive value of the specified object.

#### Returns

`string`

#### Inherited from

`String.valueOf`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:529

***

### fromCharCode()

> `static` **fromCharCode**(...`codes`): `string`

#### Parameters

• ...**codes**: `number`[]

#### Returns

`string`

#### Inherited from

`String.fromCharCode`

#### Source

server-doc/node\_modules/typescript/lib/lib.es5.d.ts:538

***

### fromCodePoint()

> `static` **fromCodePoint**(...`codePoints`): `string`

Return the String value whose elements are, in order, the elements in the List elements.
If length is 0, the empty string is returned.

#### Parameters

• ...**codePoints**: `number`[]

#### Returns

`string`

#### Inherited from

`String.fromCodePoint`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:545

***

### raw()

> `static` **raw**(`template`, ...`substitutions`): `string`

String.raw is usually used as a tag function of a Tagged Template String. When called as
such, the first argument will be a well formed template call site object and the rest
parameter will contain the substitution values. It can also be called directly, for example,
to interleave strings and values from your own tag function, and in this case the only thing
it needs from the first argument is the raw property.

#### Parameters

• **template**

A well-formed template string call site representation.

• **template.raw**: `ArrayLike`\<`string`\> \| readonly `string`[]

• ...**substitutions**: `any`[]

A set of substitution values.

#### Returns

`string`

#### Inherited from

`String.raw`

#### Source

server-doc/node\_modules/typescript/lib/lib.es2015.core.d.ts:556
