module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    res.send('Atendimentos');
  });

  app.post('/atendimentos', (req, res) => {
    console.log(req.body);
    res.send('Atendimentos - Realizando post');
  });
}