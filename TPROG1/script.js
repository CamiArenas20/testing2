let guardado = []; 

function Agregar() {
    let nombre = document.getElementById("nombreT").value;
    let categoria = document.getElementById("opciones").value;
    let prioridad = document.getElementById("opcionesP").value;

    guardado.push({ tarea: nombre, categoria: categoria, prioridad: prioridad });

    let tareaDiv = document.createElement("div");
    let actualizarb = document.createElement("button")
    tareaDiv.innerHTML = `<h2>${nombre}</h2><p>Categoría: ${categoria}</p><p>Prioridad: ${prioridad}</p> <button id="boton" onlick=Actualizar()>Estado: ${actualizarb}</button>`;


     let contenedor = document.getElementById("tareaDiv")
     contenedor.appendChild(contenedor);

   
    document.getElementById("nombreT").value = "";
    document.getElementById("opciones").value = "Casa";  
    document.getElementById("opcionesP").value = "Alta"; 
}
