
async function almacenarElementoApi({elemento, tipo}) {
    const { usuario, comentario, calificacion, fecha, titulo, tipo } = elemento;
    const newReview = {
        usuario: usuario,
        fecha: fecha,
        comentario: comentario,
        calificacion: calificacion
    }
    console.log(newReview);
    let indice = 0;
    if (tipo == "pelicula") {
        indice = data.peliculas.findIndex(pelicula => pelicula.titulo == titulo)
        if (indice >= 0) {
            data.peliculas[indice].reviews.push(newReview);
            res.send(data.peliculas[indice])
        }
    } else {
        indice = data.series.findIndex(series => series.titulo == titulo);
        if (indice >= 0) {
            data.series[indice].reviews.push(newReview);
            res.send(data.series[indice])
        }
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

}
