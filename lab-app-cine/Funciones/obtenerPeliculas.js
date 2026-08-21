export async function obtenerPeliculas(){
    //De las peliculas devuelvo su informacion resumida, poster y titulo
    let datos = await fetch('http://192.168.0.236:3030/peliculas');       
    const json= await datos.json();
    return json
}