const mostrarSala = (salaNumero)=>{

    let mayorFila = 0;
    for (let i = 0; i < cine.salas[salaNumero].sillas.length; i++) {
        if(mayorFila < cine.salas[salaNumero].sillas[i].length){
            mayorFila = cine.salas[salaNumero].sillas[i].length;
        }
    }
    mensaje = `X-`
    for(let i=0; i<mayorFila;i++){
        mensaje += (i) + "-"; 
    }
    mensaje += "\n";
    for(let i=0;i<cine.salas[salaNumero].sillas.length;i++){
        debugger;
        const estadoSillas = cine.salas[salaNumero].sillas[i].map((silla) => silla? "X":"O");
        console.log(estadoSillas);
        mensaje +=  i+"-"+estadoSillas+ "\n";
    }
    alert(mensaje);


    mostrarSalaHTML(salaNumero);
}

const reservar = (salaNumero)=>{
    mostrarSala(salaNumero);
    const fila = prompt("Escoja el numero de fila");
    const silla = prompt("Escoja el numero de silla");
    cambiarEstadoSillaReservada(salaNumero,fila,silla);
}

const cambiarEstadoSillaReservada = (salaNumeroParametro, filaParametro,sillaParametro)=> {
    if(cine.salas[salaNumeroParametro].sillas[filaParametro][sillaParametro]){
        alert("La silla ya esta reservada");
    }else{
        cine.salas[salaNumeroParametro].sillas[filaParametro][sillaParametro] = true;
    }
    mostrarSalaHTML(salaNumeroParametro);
}

const cancelar = (salaNumero)=>{
    mostrarSala(salaNumero);
    const fila = prompt("Escoja el numero de fila");
    const silla = prompt("Escoja el numero de silla");
    cambiarEstadoSillaCancelada(salaNumero,fila,silla);
}

const cambiarEstadoSillaCancelada = (salaNumeroParametro, filaParametro,sillaParametro)=> {
    if(!cine.salas[salaNumeroParametro].sillas[filaParametro][sillaParametro]){
        alert("La silla nunca fue reservada");
    }else{
        cine.salas[salaNumeroParametro].sillas[filaParametro][sillaParametro] = false;
    }
    mostrarSalaHTML(salaNumeroParametro);
}