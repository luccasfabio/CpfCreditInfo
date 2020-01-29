const express = require('express');
const app = express();
const { CpfCreditCardInfo } = require('./app/models');
const cache = require('./app/cache.js');

app.use(express.urlencoded({ extended: false }));

//Returns the last time this cpf was queried in a credit bureau
app.get('/C/lastBureauQuery/', async (req, res) => {

  try {
    const { cpf } = req.query;
    const cpfCreditCardInfo = await CpfCreditCardInfo.findOne({
      where: { cpf: cpf },
      fields: ['lastBureauQuery']
    });

    if (!cpfCreditCardInfo) {
      res.json('CPF not found')
    } else if (cache.get(cpf, (err, lastBureauQuery) => {
      return cpfCreditCardInfo;
    }) !== null) {
      res.json(cpfCreditCardInfo)
    } else {
      cache.set(cpfCreditCardInfo, () => {
        res.json(cpfCreditCardInfo);
      })
    }
  } catch (err) {
    res.json(err)
  }
});

//Returns recent credit card movement
app.get('/C/financialMovement/', async (req, res) => {

  try {

    const { cpf } = req.query;
    const cpfCreditCardInfo = await CpfCreditCardInfo.findOne({
      where: { cpf: cpf },
      attributes: ['lastCreditCardPurchase', 'lastCreditCardPurchaseValue', 'lastCreditCardPurchaseQuotas']
    });

    if (!cpfCreditCardInfo) {
      res.json('CPF not found')
    } else if (cache.get(cpf, (err, lastBureauQuery) => {
      return cpfCreditCardInfo;
    }) !== null) {
      res.json(cpfCreditCardInfo)
    } else {
      cache.set(cpfCreditCardInfo, () => {
        res.json(cpfCreditCardInfo);
      })
    }
  } catch (err) {
    res.json(err)
  }
});

app.listen(3000);