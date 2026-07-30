//SE PUEDE SACAR, LO REMPLACE CON OBTENERELEMENTOS

import movies from '../api/movies.json';
import series from '../api/series.json';

const tipos ={
    pelicula: movies,
    serie:series
}

export default function obtenerElementoApi ({tipo , genero}) {
    const categoria=tipos[tipo];

    return categoria[genero].map((elemento)=>{
        const{poster,titulo}=elemento;
        return {poster, titulo}
    });
};

