/**
Insertar y eliminar elementos 2
    parent.insertBefore(newElement, referenceElement): Insertar un elemento antes del elemento de referencia.

    SOPORTE TOTAL:
    parent.insertAdjacentElement(position, element):
    parent.insertAdjacentHTML(position, HTML):
    parent.insertAdjacentText(position, text):
    
    positions:
            beforebegin: Antes de que empiece (hermano anterior).
            afterbegin: Despues de que empiece (primer hijo).
            beforeend: Antes de que acabe (último hijo).
            afterend: Después de que acabe (hermano siguiente).
        
    parent.replaceChild(newChild, oldChild): Reemplaza un hijo por otro
*/

const list = document.getElementById("list");
const newElementLi = document.createElement("li");
newElementLi.textContent = "I'm a new element";

// list.appendChild(newElementLi);//Se agrega al final del nodo correspondiente al DOM como veniamos haciendo hasta ahora

// list.insertBefore(newElementLi, list.children[0]);
// list.children[0].insertAdjacentElement('beforebegin', newElementLi);
// list.insertAdjacentElement('afterbegin', newElementLi);
// list.insertAdjacentElement('beforeend', newElementLi);
// list.children[0].insertAdjacentElement('afterend', newElementLi);

// list.children[0].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>');
// list.children[0].insertAdjacentText('afterend', '<li>Elemento con HTML</li>');

// list.replaceChild(newElementLi, list.children[1]);

/**
DOM manipulation convenience methods - JQuery Like: https://caniuse.com/#search.jQuery-like

    positions:
        parent.before(): Antes de que empiece (hermano anterior).
        parent.prepend(): Despues de que empiece (primer hijo).
        parent.append(): Antes de que acabe (último hijo).
        parent.after(): Después de que acabe (hermano siguiente).
        
        child.replaceWith(newChild)
*/

// list.children[0].before(newElementLi);
// list.prepend(newElementLi);
// list.append(newElementLi);
// list.children[0].after(newElementLi);

//list.children[0].replaceWith(newElementLi);
/**
Clonar y eliminar elementos
    element.cloneNode(true|false): Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin los hijos.
    element.remove(): Elimina el nodo del DOM.
    element.removeChild(child): Elimina el nodo hijo del DOM.
 */

// list.after(list.cloneNode(true)); // Ojo con no repetir el ID

// list.remove(list.after());

list.removeChild(list.children[0]);



