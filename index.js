import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'

const app = express();

// Conectar DB
db.authenticate()
    .then( () => console.log('Base de Datos conectada'))
    .catch( error => console.log(error));

// Definir Puerto
const port = process.env.PORT || 4000

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
   return next();

})

// Definir la carpeta Publica
app.use(express.static('public'));

// Agrega Router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})