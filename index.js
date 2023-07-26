const express = require('express');

const app = express();

// Definir Puerto
const port = process.env.PORT || 4000

app.listen( () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})