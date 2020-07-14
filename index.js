const custom_express = require('./config/custom-express');
const app = custom_express();
app.listen(3000, () => {
    console.log('Servidor rodando!');
});