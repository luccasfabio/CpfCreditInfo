const { CpfCreditCardInfo } = require('../models');

//This class would not be in the final project. Its here
//just to facilitate testing by adding a registry to the db

module.exports = {
  async store(req, res) {

    try {
      const { cpf, lastBureauQuery, lastCreditCardPurchase, lastCreditCardPurchaseValue, lastCreditCardPurchaseQuotas, updatedAt} = req.query;
      const cpfCreditCardInfo = await CpfCreditCardInfo.create({ cpf, lastBureauQuery, lastCreditCardPurchase, lastCreditCardPurchaseValue, lastCreditCardPurchaseQuotas , updatedAt});

      return res.json(cpfCreditCardInfo);
    } catch (err) {
      return res.json({ err })
    }
  }
}