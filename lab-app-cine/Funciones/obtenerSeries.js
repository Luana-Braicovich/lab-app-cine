export async function obtenerSeries(){
    //De las series devuelvo su informacion resumida, poster y titulo
    console.log('help');
    let datos=await fetch('http://192.168.0.236:3030/series');  
    const json= await datos.json();
    return json
}