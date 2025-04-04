function enviarRespuesta(){

    if(document.getElementById("si").checked){
        modalSI.showModal();
    }else if(document.getElementById("no").checked){
        modalNO.showModal();
    }else{
        alert("No has seleccionado ninguna opción");
    }
}