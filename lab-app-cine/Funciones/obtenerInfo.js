export async function obtenerInfo({nombre , tipo}){
    //Si tengo el nombre de la pelicula la busco en la bd y devuelvo su informacion completa,
    //Sino, devuelvo todas las peliculas, todas las series, o todos los datos
    const datos = await fetch('http://192.168.0.236:3030/datos');
    const json= await datos.json();

    let categoria;
    if(tipo==='serie'){
        categoria= json.series
    }
    if(tipo==='pelicula'){
        categoria = json.peliculas
    }
    if(nombre!=''){
        categoria= categoria.find((item)=> item.titulo===nombre)
    }
    if(tipo===''){
        categoria=[...json.series, ...json.peliculas]
    }
    return categoria
}

