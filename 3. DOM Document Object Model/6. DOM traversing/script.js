/**
Padre - parent (Nood del que desciende).
    parentNode: Devuelve el nodo padre (que puede no ser un elemento).
    parentElement:  Devuelve el nodo del elemento padre.

    NOTA: Los nodos tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    childNodes: Devuelve todos los nodos hijos.
    children: Devuelve todos los nodos elementos hijos.
    firstChild: Devuelve el primer nodo hijo.
    firstElementChild: Devuelve el primer nodo elemento hijo.
    lastChild: Devuelve el último nodo hijo.
    lastElementChild: Devuelve el último nodo elemento hijo.
    hasChildNodes(): Devuelve true si el nodo tiene hijos y false si no tiene.

Hermanos - sibilings (Nodo al mismo nivel)
    nextSibling: Devuelve el siguiente nodo hermano
    nextElementSbiling: Devuelve el siguiente nodo elemento hermano.
    previousSibling: Devuelve el anterior nodo hermano
    previousElementSibling: Devuelve el anterior nodo elemento hermano.

Cercano
    closest(selector): Selecciona el nodo más cercano que cumpla con el selector, aún es experimental.
 */

const parent = document.getElementById("parent");

//Padre - parent
console.log("Padre - parent");
console.log("Parent Node"); // -> En este caso desciende de un nav, si no tiene ascendencia devuelve null
console.log(parent.parentNode);
console.log("Parent Element");
console.log(parent.parentElement);
console.log("Parent Element combinado"); 
console.log(parent.parentElement.parentElement);

//Hijos - child
console.log("Hijos - child");
console.log("Child Nodes");
console.log(parent.childNodes);
console.log("Children");
console.log(parent.children);
console.log("First Child");
console.log(parent.firstChild);
console.log("First Element Child");
console.log(parent.firstElementChild);
console.log("Last Child");
console.log(parent.lastChild);
console.log("Last Element Child");
console.log(parent.lastElementChild);
console.log("HasChildNodes()");
console.log(parent.hasChildNodes());

//Hermanos - sibilings
console.log("Hermanos - sibilings");
console.log("Next Sibling");
console.log(parent.nextSibling);
console.log("Next Element Sibling");
console.log(parent.nextElementSibling);
console.log("Previous Element Sibling");
console.log(parent.previousSibling);
console.log("Previous Element Sibling");
console.log(parent.previousElementSibling);
//Combinando propiedades
console.log("Combinando propiedades");
console.log(parent.parentElement.nextElementSibling);
console.log(parent.parentElement.previousElementSibling);
