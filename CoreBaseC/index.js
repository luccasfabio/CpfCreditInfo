const express = require('express');
const app = express();
const { MovimentacaoNoCPF } = require('./app/models');
const cache = require('./app/cache.js');

app.use(express.urlencoded({ extended: false }));

//Retorna ultima consulta em um Bureau de crédito
app.get('/C/ultimaConsulta/', async (req, res) => {

  try {
    const { cpf } = req.query;
    const movimentacaoNoCPF = await MovimentacaoNoCPF.findOne({
      where: { cpf: cpf },
      fields: ['ultimaConsultaEmBureau']
    });

    if (!movimentacaoNoCPF) {
      res.json('CPF não encontrado')
    } else if (cache.get(cpf, (err, ultimaConsultaEmBureau) => {
      return movimentacaoNoCPF;
    }) !== null) {
      res.json(movimentacaoNoCPF)
    } else {
      cache.set(movimentacaoNoCPF, () => {
        res.json(movimentacaoNoCPF);
      })
    }
  } catch (err) {
    res.json(err)
  }
});

//Retorna Movimentação financeira
app.get('/C/movimentacaoFinanceira/', async (req, res) => {

  try {

    const { cpf } = req.query;
    const movimentacaoNoCPF = await MovimentacaoNoCPF.findOne({
      where: { cpf: cpf },
      attributes: ['ultimaCompraNoCredito', 'valorUltimaCompraNoCredito', 'quantidadeParcelasUltimaCompraNoCredito']
    });

    if (!movimentacaoNoCPF) {
      res.json('CPF não encontrado');
    } else {
      res.json({ movimentacaoNoCPF });
    }
  } catch (err) {
    res.json(err)
  }
});

app.listen(3000);