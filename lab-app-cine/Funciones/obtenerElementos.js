export async function obtenerElementos({tipo , genero}){
    console.log("busco elementos del genero ",genero);
    let datos;
    if(tipo==='serie'){
        datos = await fetch('http://192.168.0.237:3030/series');       
    }else{
        datos = await fetch('http://192.168.0.237:3030/peliculas');
    }
    const json= await datos.json();
    return json[genero]
}