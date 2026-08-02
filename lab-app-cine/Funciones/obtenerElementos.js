export async function obtenerElementos(tipo){
    let datos;
    if(tipo==='serie'){
        datos = await fetch('http://192.168.0.236:3030/series');       
    }else{
        datos = await fetch('http://192.168.0.236:3030/peliculas');
    }
    const json= await datos.json();
    return json
}