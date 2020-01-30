const { CpfCreditCardInfo } = require('../models');
const cache = require('../cache.js');


module.exports = {

  //Returns the last time this cpf was queried in a credit bureau
  async getLastBureauQuery(req, res) {

    try {
      const { cpf } = req.query;
      let cpfCreditCardInfo = null;

      //tries to retrieve data from redis cache
      cache.get(cpf + 'lastBureauQuery', async (err, lastBureauQuery) => {

        if (lastBureauQuery !== null) {
          res.json(JSON.parse(lastBureauQuery))
        } else {

          //if data is not cached its fetched on the mysql database
          cpfCreditCardInfo = await CpfCreditCardInfo.findOne({
            where: { cpf: cpf },
            attributes: ['lastBureauQuery']
          });

          //saves the data on the cache - Expires in 12 hours
          cache.set(cpf + 'lastBureauQuery', JSON.stringify(cpfCreditCardInfo));
          cache.expire(cpf, 43200);

          res.json(cpfCreditCardInfo);
        }
      });
    } catch (err) {
      res.json(err)
    }
  },

//Returns recent credit card movement
async getFinancialMovement(req, res) {

    try {
      const { cpf } = req.query;
      let cpfCreditCardInfo = null;

      cache.get(cpf + 'financialMovement', async (err, financialMovement) => {

        if (financialMovement !== null) {
          res.json(JSON.parse(financialMovement))
        } else {

          cpfCreditCardInfo = await CpfCreditCardInfo.findOne({
            where: { cpf: cpf },
            attributes: ['lastCreditCardPurchase', 'lastCreditCardPurchaseValue', 'lastCreditCardPurchaseQuotas']
          });

          cache.set(cpf + 'financialMovement', JSON.stringify(cpfCreditCardInfo));
          cache.expire(cpf, 43200);

          res.json(cpfCreditCardInfo);
        }
      });
    } catch (err) {
      res.json(err)
    }
  }
}