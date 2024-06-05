# sample - list

## Exemple de liste
Cet exemple montre comment créer une liste dynamique où les éléments peuvent être ajoutés via un champ de saisie.

```typescript
import { html, render, createState } from '@lithium-framework/core-dom';
import { useState, useStyle, map } from '@lithium-framework/core-dom/directives';

function MyList() {
  let [list, setList] = createState<string[]>([]);

  return html`
    <div style=${useStyle({ display: 'grid' })}>
      <input
        placeholder="item"
        @change=${(event) => {
          setList([...list.value, event.target.value]);
          event.target.value = "";
        }}
      ></input>
      <ul>
        ${useState(list, (newlist) => {
          return html`${map(newlist, (item) => {
            return html`<li>${item}</li>`;
          })}`;
        })}
      </ul>
    </div>
  `;
}

render(MyList(), document.body);
```

## Explication :

- createState : Crée un état réactif pour la liste.
- useState : Rend l'état réactif dans le template.
- useStyle : Applique des styles en ligne de manière réactive.
- map : Itère sur la liste des éléments pour les afficher de manière réactive.
- setList : Met à jour l'état de la liste lorsqu'un nouvel élément est ajouté.