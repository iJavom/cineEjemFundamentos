const abrirMenu = ()=>{
    const menu = `Escoja una opcion:
    1) Reservar silla
    2) Cancelar silla
    3) Mostrar sala
    0) Salir`
    let opcion = prompt(menu);

    while(opcion !=0){
        if(opcion == 1){
            reservar(0);
        }else if(opcion == 2){
            cancelar(0);
        }else if(opcion == 3){
            mostrarSala(0);
        }else{
            alert(`Opcion invalida`)
        }

        opcion = prompt(menu);
    }
};


const mostrarSalaHTML = (salaNumero)=>{

    let salaHTML = document.querySelector("#sala");
    salaHTML.innerHTML=``;
    //Si enumaramos lo podemos usar
    // let mayorFila = 0;
    // for (let i = 0; i < cine.salas[salaNumero].sillas.length; i++) {
    //     if(mayorFila < cine.salas[salaNumero].sillas[i].length){
    //         mayorFila = cine.salas[salaNumero].sillas[i].length;
    //     }
    // }
    // mensaje = `X-`
    // for(let i=0; i<mayorFila;i++){
    //     mensaje += (i) + "-"; 
    // }
    //mensaje += "\n";
    //el mensaje cambiara a estructuraHTML
    estructuraHTML = "";
    for(let i=0;i<cine.salas[salaNumero].sillas.length;i++){
        
        const estadoSillas = cine.salas[salaNumero].sillas[i].map((silla,indiceSilla) =>{
            if(silla){
                estructuraHTML += `    <span onclick="cambiarEstadoSillaCancelada(${salaNumero},${i},${indiceSilla})" class="material-symbols-outlined text-danger">
                chair
            </span>`;
            }else{
                estructuraHTML += `<span onclick="cambiarEstadoSillaReservada(${salaNumero},${i},${indiceSilla})" class="material-symbols-outlined text-success">
                chair
            </span>`;
            }
        } );
        estructuraHTML+="<br>"
        
    }
    salaHTML.insertAdjacentHTML("beforeend",estructuraHTML);
}


mostrarSalaHTML(0);