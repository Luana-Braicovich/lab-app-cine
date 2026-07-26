import data from '../api/data.json';
import movies from '../api/movies.json';
import series from '../api/series.json';

const tiposa ={
    pelicula: movies,
    serie:series
}
const tipos ={
    pelicula: data.peliculas,
    serie:data.series
}

export default function obtenerInfoApi ({nombre , tipo}) {
    
    const categoria=tipos[tipo];
    const otra=tiposa[tipo].POPULARES;

    const resultado= categoria.find((item)=> item.titulo===nombre)
    return resultado
};
