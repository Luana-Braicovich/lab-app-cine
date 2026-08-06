export async function obtenerInfo({nombre , tipo}){
    const datos = await fetch('http://192.168.0.236:3030/datos');
    const json= await datos.json();
    let categoria;
    if(tipo==='serie'){
        categoria= json.series
    }else{
        categoria = json.peliculas
    }
    if(nombre!=''){
        categoria= categoria.find((item)=> item.titulo===nombre)
    }
    return categoria
}

