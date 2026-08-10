export async function obtenerElementos(tipo){
    //De un tipo de elemento devuelvo su informacion resumida, poster y titulo
    let datos;
    if(tipo==='serie'){
        datos = await fetch('http://192.168.0.236:3030/series');       
    }else{
        datos = await fetch('http://192.168.0.236:3030/peliculas');
    }
    const json= await datos.json();
    return json
}