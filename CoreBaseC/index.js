const express = require('express');
const app = express();
const { MovimentacaoNoCPF } = require('./app/models');
const redis = require('redis');
const cache = redis.createClient();

app.use(express.urlencoded({ extended: false }));

//Retorna ultima consulta em um Bureau de crédito
app.get('/C/ultimaConsulta/', async (req, res) => {

  const { cpfReq } = req.query;
  const {cpf, ultimaConsultaEmBureau} = await MovimentacaoNoCPF.findOne({ where: { cpf: cpfReq } });

  if (cpf === null) {
    res.json('CPF não encontrado')
  } else {
    res.json({
      ultimaConsultaEmBureau
    });
  }
});

//Retorna Movimentação financeira
app.get('/C/movimentacaoFinanceira/', async (req, res) => {

  const { cpfReq } = req.query;

  const {cpf, ultimaCompraNoCredito, valorUltimaCompraNoCredito, quantidadeParcelasUltimaCompraNoCredito } = await MovimentacaoNoCPF.findOne({ where: { cpf: cpfReq } });

  if (cpf === null) {
    res.json('CPF não encontrado');
  } else {
    res.json({
      ultimaCompraNoCredito,
      valorUltimaCompraNoCredito,
      quantidadeParcelasUltimaCompraNoCredito
    });
  }
});

app.listen(3000);