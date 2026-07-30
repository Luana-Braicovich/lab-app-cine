export async function almacenarElementoApi(titulo,tipo,rankingActual,comentario) {
        console.log(
                "usuario: ","default",
                "comentario:", comentario,
                "calificacion:", rankingActual,
                "titulo:", titulo,
                "tipo:", tipo
        )
        /*const fecha = new Date();
        const diaActual = fecha.getDate();
        const mesActual = fecha.getMonth() + 1;
        const añoActual = fecha.getFullYear();
        if (input.value == "") { return }
        fetch('http://192.168.0.237:3030/reviews',
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
        ).then(console.log("exito"));*/
    }