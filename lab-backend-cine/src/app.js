const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path  = require('path');
const reviews = require('./Controllers/reviews.js');

app.use(cors());
app.use(express.json());


app.get("/peliculas",(req,res)=>{
  const peliculas = JSON.parse(fs.readFileSync(path.join(__dirname, './Json/movies.json'), 'utf8'));
  res.json(peliculas);
})

app.get("/series",(req,res)=>{
  const series = JSON.parse(fs.readFileSync(path.join(__dirname, './Json/series.json'), 'utf8'));
  res.json(series);
})

app.get("/datos",(req,res)=>{
  const datos = JSON.parse(fs.readFileSync(path.join(__dirname, './Json/data.json'), 'utf8'));
  res.json(datos);
})

const PORT =  3030;
app.listen(PORT, '0.0.0.0',() => {
  console.log(`El servidor esta en ${PORT}`);
});


app.post('/reviews', (req, res) => {
    const { usuario, comentario, calificacion, fecha, titulo, tipo } = req.body;
    console.log('pongo review');
    if (usuario && comentario && fecha && titulo && tipo) {
      console.log('se va a guardar');
        reviews.add_review(req, res)
    } else {
        res.status(400).send("no se enviaron los datos suficientes")
    }
});

