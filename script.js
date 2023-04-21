dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

function dragElement(plantElement) {
    // Variables para establecer posiciones iniciales y finales
    let pos1 = 0,
    pos2 = 0,
    //pos 3 graba posicion en x de mouse al momento
    //de hacer onpointerdown a un elemento
    //pos4 graba posicion
    pos3 = 0,
    pos4 = 0;
    //registrar un evento
    plantElement.onpointerdown =  pointerDrag

    function pointerDrag( event ){
        // Previene todo comportamiento
        // que tenga por defecto
        // el evento en cuestion en
        // mi documento
        event.preventDefault();
        // Vamos a guardar la posicion inicial
        // que se tiene al momento de hacer
        // el pointerDrag
        pos3 = event.clientX;
        pos4 = event.clientY;

        // Registrando handlers para eventos
        // de arrastre
        document.onpointermove = elementDrag;
        // Registrando handler para evento
        // de liberación del boton
        document.onpointerup = stopElementDrag;

        //creando las funciones
        function elementDrag(event){
            pos1 = pos3 - event.clientX;
            pos2 = pos4 - event.clientY;
            //actualizamos posiciones originales
            pos3 = event.clientX;
            pos4 = event.clientY;
            // Mover la imagen con las posiciones
            // con las posiciones calculadas
            // de modo que la imagen quede en
            // la nueva posicion del mouse
            plantElement.style.left = `${plantElement.offsetLeft - pos1}px`;
            plantElement.style.top = `${plantElement.offsetTop - pos2}px`;
        }
        function stopElementDrag(event){
            // Eliminando handler para evento
            // de liberación del boton
            document.onpointerup = null;
            // Eliminando handler para evento
            // de arrastre
            document.onpointermove = null;
        }
    }
}
