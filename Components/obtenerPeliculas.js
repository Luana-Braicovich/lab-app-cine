import movies from '../api/movies.json';

export async function obtenerPeliculasPopulares(){
    return movies.peliculasPopulares.map((item)=>{
        const{poster,titulo}=item;
        return {poster, titulo}
    })
}

export async function obtenerPeliculasProximas(){
    return movies.proximamente.map((item)=>{
        const{poster,titulo}=item;
        return {poster, titulo}
    })
}