let guardado = []; 

function Agregar() {
    // Obtener el nombre de la tarea
    let tarea = document.getElementById("tareaI").value;

    // Obtener la categoría seleccionada
    let categorias = document.getElementById("opcionesCat").value;

    let prioridades = document.getElementById("opcionesPrio").value;

    // Guardar en el array
    guardado.push({ tarea: tarea, categorias: categorias, prioridad: prioridades });

    // Crear un contenedor para la tarea
    let contenedorTarea = document.createElement("div");
    contenedorTarea.classList.add("tareasL");

    // Crear el nombre de la tarea
    let tituloTarea = document.createElement("h3");
    tituloTarea.textContent = tarea;

    // Crear la categoría
    let categoriaTarea = document.createElement("h3");
    categoriaTarea.textContent = "Categoria: " + categorias;

// Crear la prioridad
    let prioridadTarea = document.createElement("h3");
    prioridadTarea.textContent = "Prioridad: " + prioridades;


    // Crear el menú desplegable de estado
    let estadoSelect = document.createElement("select");
    estadoSelect.classList.add("estadoTarea");
    estadoSelect.innerHTML = `
        <option value="pendiente">Pendiente</option>
        <option value="enProceso">En Proceso</option>
        <option value="completado">Completado</option>
    `;

    // Crear el icono de basura
    function Borrar(tarea) {
        tarea.remove();
    }

    let botonBorrar = document.createElement("img");
    botonBorrar.src = "https://c0.klipartz.com/pngpicture/699/344/gratis-png-iconos-de-computadora-papeleras-y-papeleras-eliminar-thumbnail.png"; // Asegurate de tener esta imagen en tu carpeta
    botonBorrar.classList.add("botonBorrar");
    
    botonBorrar.onclick = function() {
        Borrar(contenedorTarea);  // Pasamos el contenedor de la tarea a la función Borrar
    };
    //
    contenedorTarea.appendChild(tituloTarea);
    contenedorTarea.appendChild(categoriaTarea);
    contenedorTarea.appendChild(prioridadTarea)
    contenedorTarea.appendChild(estadoSelect);
    contenedorTarea.appendChild(botonBorrar);

    let listado = document.querySelector(".listado");
    listado.appendChild(contenedorTarea);

    
    document.getElementById("tareaI").value = "";
}
