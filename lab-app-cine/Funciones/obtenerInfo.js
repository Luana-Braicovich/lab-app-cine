export async function obtenerInfo({nombre , tipo}){
    console.log('busco', nombre)
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

