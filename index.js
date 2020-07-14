const custom_express = require('./config/custom-express');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    }
    else {
        Tabelas.init(conexao);
        const app = custom_express();
        app.listen(3000, () => {
            console.log('Servidor rodando!');
        });
    }
})

