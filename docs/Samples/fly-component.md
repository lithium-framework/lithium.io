## First render

```tsx
import { html , render } from '@lithium-framework/core';

function Hello({ name }){

	return html`<div>
		<p>Hello ${name} !</p>
	</div>`

}

render( Hello({ message : 'World' }) , document.body );
```

## Counter

```tsx
import { html , render , createState } from '@lithium-framework/core';
import { useState , useStyle } from '@lithium-framework/core/directives';

function MyCounter(){

	let [ counter , setCounter ] = createState<number>(0);

	return html`<div style = ${useStyle({ display : 'flex' })} >
		<p>${useState(counter)}</p>
		<button @mousedown=${() => setCounter( counter + 1 )} >Add</button>
	</div>`

}

render( MyCounter() , document.body );
```

## List

```tsx
import { html , render , createState } from '@lithium-framework/core';
import { useState , useStyle , map } from '@lithium-framework/core/directives';

function MyList(){

	let [ list , setList ] = createState<string[]>([]);

	return html`<div style = ${useStyle({ display : 'grid' })} >
		<input 
			placeholder = "item"
			@change = ${(event) => {
				setList( [...list.value , event.value] );
				event.target.value = "";
			}}
		></input>
		<ul>
			${useState( list , ( newlist ) => {
				
				return html`${map( newlist , ( item ) => {
					
					return html`<li>${item}</li>`;
					
				})}`
				
			} )}
		</ul>
	</div>`

}

render( MyList() , document.body );
```