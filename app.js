const express = require('express');
const app = express();
const port = 9000;

// Middlewares
app.use(express.json());
app.use(express.static('public'));

// Rutas
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
