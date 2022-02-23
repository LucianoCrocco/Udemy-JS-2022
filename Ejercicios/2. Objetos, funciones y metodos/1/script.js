class Libro {
    constructor(titulo, autor, anio, genero){
        this.Titulo = titulo;
        this.Autor = autor;
        this.Anio = anio;
        this.Genero = genero;
    }

    set Titulo(value){
        this._titulo = value;
    }
    get Titulo(){
        return this._titulo;
    }

    set Autor(value){
        this._autor = value;
    }
    get Autor(){
        return this._autor;
    }

    set Anio(value){
        this._anio = value;
    }
    get Anio(){
        return this._anio;
    }

    set Genero(value){
        this._genero = value;
    }
    get Genero(){
        return this._genero;
    }

    
    static nombreVacio (item){
        if(item != null && item != undefined){
            return true;
        }
        return false;
    }


    static numeroCorrecto (numero){
        if(numero.length == 4){
            return true;
        }
        return false;
    }

    static generoCorrecto (genero){
        if(genero.toLowerCase() == 'aventuras' || genero.toLowerCase() == 'terror' || genero.toLowerCase() == 'fantasia'){
            return true;
        }
        return false;
    }

    static mostrarMismoGenero(array, genero){
        let retorno = "";
        let flag = 0;
        array.forEach(element => {
            if(element.Genero == genero){
                retorno += element.toString() + "\n";
                flag++;
            }
        });
        
        if(flag == 0){
            retorno = `No se encontrar coincidencias con el genero ${genero}`;
        }

        return retorno;
    }

    toString(){ return `Titulo: ${this.Titulo} - Autor: ${this.Autor} - Año: ${this.Anio} - Genero: ${this.Genero}.`;}
}


let books = [];
let autores = [];
let generos = ["aventuras", "terror", "fantasia"];
let nombre, genero, anio, autor;

for(let i = 0; i < 3; i++){
    nombre = prompt("Ingrese el titulo del libro: ");
    while(!Libro.nombreVacio(nombre)){
        nombre = prompt("Ingrese un titulo valido para el libro: ");
    }

    autor = prompt("Ingrese el nombre del autor: ");
    while(!Libro.nombreVacio(autor)){
        autor = prompt("Ingrese un nombre de autor valido: ");
    }

    anio = prompt("Ingrese el año de publicación: ");
    while(!Libro.numeroCorrecto(anio)){
        anio = prompt("Ingrese un año de publicación valido: ");
    }

    genero = prompt("Ingrese el genero del libro (aventuras, terror o fantasia): ");
    while(!Libro.generoCorrecto(genero)){
        genero = prompt("Ingrese el genero del libro entre las opciones seleccionadas (aventuras, terror o fantasia): ");
    }

    books.push(new Libro(nombre,autor,anio,genero));
}


for(item of books){
    autores.push(item.Autor);
}
autores.sort();
console.log(autores);


let busqueda = prompt("Ingrese el genero a buscar: ");
alert(Libro.mostrarMismoGenero(books,busqueda));