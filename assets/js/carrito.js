//VARIABLES
//carrito: Div con clase que contiene a todo el carrito
const carrito = document.getElementById("carrito"),
    //listaCursos: div con id que contiene a todos los productos(Con toda su informacion)
    listaCursos = document.querySelector(".main"),
    //contenedorCarrito: div con clase que contiene informacion tabla, que se quiere mostrar (cabecera y cuerpo), y
    //div con clase, que contiene el cuerpo que se quiere mostrar
    contenedorCarrito = document.querySelector(".buy-card .lista_de_cursos"),
    //vaciarCarritoBtn: etiqueta button, con id, que se presiona para vaciar el carrito 
    vaciarCarritoBtn = document.querySelector("#vaciar_carrito");

    //console.log(listaCursos);

//Variable para almacenar temporalmente los articulos que se enviaran al carrito del html.
let articulosCarrito = [];
//_________________________________________________________________________________________________________

registrarEventsListeners();

function registrarEventsListeners() {
    //Cuando yo le de click a agregar al carrito de compras, se captura click
    //Cuando se da click a listaCursos se captura evento 'click', y se llama a la funcion agregarCurso
    
    listaCursos.addEventListener('click', agregarCurso);
    //listaCursos.addEventListener('click', agregarCurso1);

    //Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Muestra los cursos del carrito
    //Con el metodo 'DOMContentLoaded' --> recuperamos la info del localstorage, con la clave 'carrito'
    document.addEventListener("DOMContentLoaded", ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carritoHTML();
    });

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', e =>{
        articulosCarrito = [];
        limpiarHTML();
    })
}


// _________________________________________________________________________________________________________
/* function agregarCurso(e) {
    //Si 'e.target.classList.contains' --> significa que si evento.target contiene la clase 'agregar-carrito',
    //Se realiza lo sgte: solo haciendo click al boton 'agregar al carrito', realiza el cuerpo del 'if'.
    if (e.target.classList.contains("agregar-carrito")) {
        //Debemos acceder al elemento padre del boton, para poder enviar al carrito: la imagen, el titulo, precio,
        //y todo lo demas que necesitamos mostrar en el carrito.
        //e.target.parentElement  --> sirve para conocer cual es el elemento padre
        const cursoSeleccionado = e.target.parentElement.parentElement.parentElement;
        //Para enviar esos elementos, necesitamos hacer la funcion 'leerInfo'. 
        //Con parametro 'cursoSeleccionado', que es el div, con clase padre general, de la cual se accede a los elementos,
        //que enviaremos al carrito.
        leerInfo(cursoSeleccionado);
    }
} */

function agregarCurso(e) {
    if (e.target.classList.contains("agregar-carrito1")) {
        const cursoSeleccionado = e.target.parentElement.parentElement.parentElement;
        leerInfo(cursoSeleccionado);
    }

    if (e.target.classList.contains("agregar-carrito2")) {
        const cursoSeleccionado1 = e.target.parentElement;
        leerInfo1(cursoSeleccionado1);
    }

    if (e.target.classList.contains("agregar-carrito3")) {
        const cursoSeleccionado2 = e.target.parentElement.parentElement;
        leerInfo2(cursoSeleccionado2);
    }

    if (e.target.classList.contains("agregar-carrito4")) {
        const cursoSeleccionado3 = e.target.parentElement;
        leerInfo3(cursoSeleccionado3);
    }

}
// _______________________________________________________________________________________________________________

//Elimina un curso del carrito
function eliminarCurso(e) {
    //Si la clase de ese elemento contiene la clase: 'borrar-curso', entonces que haga el cuerpo del 'if'.
    if (e.target.classList.contains("borrar-curso")) {
        //Obtiene el id del boton (agregar al carrito), para poder borrar el indicado
        const cursoId = e.target.getAttribute('data-id');

        //Eliminar del arreglo de articulosCarrito por el data-id
        //filtrando todos, mostrando todos, menos el que tiene el cursoId, (es decir ese lo borra)
        articulosCarrito = articulosCarrito.filter(curso => curso.id != cursoId);

        carritoHTML();
    }
}

// ______________________________________________________________________________________________________________

//Lee contenido del html, al que le dimos click y extrae la info del curso
function leerInfo(curso) {
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        //Le estoy diciendo traeme la imagen en su atributo 'src', que esta dentro del elemento padre general
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('p').textContent,
        precio : curso.querySelector('.home__price').textContent,
        //Sig. traeme el valor del atributo no estandar 'data-id', el cual me dira
        id : curso.querySelector('button').getAttribute('data-id'),
        //con cada click al boton, por defecto se añade uno en cantidad, de ese curso.
        cantidad : 1
    };
    //Revisa si un elemento, ya existe en el carrito
    //Con el metodo 'some', se verifica si un objeto se repite dentro de un arreglo, some devuelve 'true'.
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    if (existe) {
        //Actualizar la cantidad
        articulosCarrito.map(curso => {
            //Si es cierto, quiere decir que el curso ya esta en el carrito
            if (curso.id === infoCurso.id) {
                //Por tanto solo se lo incrementa en 1.
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        //Destructuracion
        [...articulosCarrito,infoCurso];  
    }else{
    //Agregamos elementos al carrito de compras --> el objeto creado mas arriba
    //sin perder lo que ya tenia almacenado...
    articulosCarrito = [...articulosCarrito,infoCurso];
    }
    carritoHTML();
}

//Lee contenido del html, al que le dimos click y extrae la info del curso
function leerInfo1(curso) {
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        //Le estoy diciendo traeme la imagen en su atributo 'src', que esta dentro del elemento padre general
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h3').textContent,
        precio : curso.querySelector('.featured__price').textContent,
        //Sig. traeme el valor del atributo no estandar 'data-id', el cual me dira
        id : curso.querySelector('button').getAttribute('data-id'),
        //con cada click al boton, por defecto se añade uno en cantidad, de ese curso.
        cantidad : 1
    };
    //Revisa si un elemento, ya existe en el carrito
    //Con el metodo 'some', se verifica si un objeto se repite dentro de un arreglo, some devuelve 'true'.
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    if (existe) {
        //Actualizar la cantidad
        articulosCarrito.map(curso => {
            //Si es cierto, quiere decir que el curso ya esta en el carrito
            if (curso.id === infoCurso.id) {
                //Por tanto solo se lo incrementa en 1.
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        //Destructuracion
        [...articulosCarrito,infoCurso];  
    }else{
    //Agregamos elementos al carrito de compras --> el objeto creado mas arriba
    //sin perder lo que ya tenia almacenado...
    articulosCarrito = [...articulosCarrito,infoCurso];
    }
    carritoHTML();
}

function leerInfo2(curso) {
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        //Le estoy diciendo traeme la imagen en su atributo 'src', que esta dentro del elemento padre general
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h3').textContent,
        precio : curso.querySelector('.products__price').textContent,
        //Sig. traeme el valor del atributo no estandar 'data-id', el cual me dira
        id : curso.querySelector('button').getAttribute('data-id'),
        //con cada click al boton, por defecto se añade uno en cantidad, de ese curso.
        cantidad : 1
    };
    //Revisa si un elemento, ya existe en el carrito
    //Con el metodo 'some', se verifica si un objeto se repite dentro de un arreglo, some devuelve 'true'.
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    if (existe) {
        //Actualizar la cantidad
        articulosCarrito.map(curso => {
            //Si es cierto, quiere decir que el curso ya esta en el carrito
            if (curso.id === infoCurso.id) {
                //Por tanto solo se lo incrementa en 1.
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        //Destructuracion
        [...articulosCarrito,infoCurso];  
    }else{
    //Agregamos elementos al carrito de compras --> el objeto creado mas arriba
    //sin perder lo que ya tenia almacenado...
    articulosCarrito = [...articulosCarrito,infoCurso];
    }
    carritoHTML();
}

function leerInfo3(curso) {
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        //Le estoy diciendo traeme la imagen en su atributo 'src', que esta dentro del elemento padre general
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h3').textContent,
        precio : curso.querySelector('.new__price').textContent,
        //Sig. traeme el valor del atributo no estandar 'data-id', el cual me dira
        id : curso.querySelector('button').getAttribute('data-id'),
        //con cada click al boton, por defecto se añade uno en cantidad, de ese curso.
        cantidad : 1
    };
    //Revisa si un elemento, ya existe en el carrito
    //Con el metodo 'some', se verifica si un objeto se repite dentro de un arreglo, some devuelve 'true'.
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    if (existe) {
        //Actualizar la cantidad
        articulosCarrito.map(curso => {
            //Si es cierto, quiere decir que el curso ya esta en el carrito
            if (curso.id === infoCurso.id) {
                //Por tanto solo se lo incrementa en 1.
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        //Destructuracion
        [...articulosCarrito,infoCurso];  
    }else{
    //Agregamos elementos al carrito de compras --> el objeto creado mas arriba
    //sin perder lo que ya tenia almacenado...
    articulosCarrito = [...articulosCarrito,infoCurso];
    }
    carritoHTML();
}

// _____________________________________________________________________________________________________________

//Muestra el carrito en el html
function carritoHTML() {
    limpiarHTML();
    //Recorre el carrito de compras y genera el HTML
    articulosCarrito.forEach(curso =>{
        const fila = document.createElement('div');
        fila.innerHTML = `
        <img src="${curso.imagen}"></img>
        <p>${curso.titulo}</p>
        <p>${curso.precio}</p>
        <p>${curso.cantidad}</p>
        <p><span class="borrar-curso" data-id="${curso.id}">X</span></p>
        `;
        //Agregando 'fila', como hijo del div 'lista_de_cursos'.
        contenedorCarrito.appendChild(fila);
    });
    //SINCRONIZAR CON LOCALSTORAGE --> PARA NO PERDER LA INFO DEL CARRITO AL RECARGAR LA PAGINA
    sincronizarStorage();
}
// ___________________________________________________________________________________________________________

function sincronizarStorage() {
    //Almacenando info del carrito en el localStorage, pero como texto plano
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}


//elimina los cursos de la lista_de_cursos
//Elimina los repetidos--> cuando se presiona un 2do boton, agrega ese y el que tenia lo repite
//Para arreglar, eso es esta funcion.
function limpiarHTML() {
    //Mientras exista un hijo, en el contenedor carrito, que lo elimine, al primer hijo.
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    //Se llama para solucionar error --> despues de eliminar, al recargar se sigue mostrando lo que tiene
    //el localstorage...
    sincronizarStorage();
}

console.log(contenedorCarrito);