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
    pos3 = 0,
    pos4 = 0;
    //registrar un evento
    plantElement.onpointerdown =  pointerDrag

    function pointerDrag(event){
        //Previene todo comportamiento
        //que tenga el navegador por defecto
        event.preventDefault();
        console.log("+On pointer down");
    }
}
