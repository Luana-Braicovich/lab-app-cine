import data from '../api/data.json';

const tipos ={
    pelicula: data.peliculas,
    serie:data.series
}

export default function obtenerInfoApi ({nombre , tipo}) {    
    const categoria=tipos[tipo];
    const resultado= categoria.find((item)=> item.titulo===nombre)
    return resultado
};
