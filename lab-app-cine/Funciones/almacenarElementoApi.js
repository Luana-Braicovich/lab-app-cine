export async function almacenarElementoApi(titulo,tipo,rankingActual,comentario) {
        const fecha = new Date();
        const diaActual = fecha.getDate();
        const mesActual = fecha.getMonth() + 1;
        const añoActual = fecha.getFullYear();
        if (comentario == "") { return }
        console.log('almacenarElementoApi')
        fetch('http://192.168.0.236:3030/reviews',
            {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    usuario: "default",
                    comentario: comentario,
                    calificacion: rankingActual,
                    fecha: `${diaActual}/${mesActual}/${añoActual}`,
                    titulo: titulo,
                    tipo: tipo
                })
            }
        ).then(console.log("exito"));
    }