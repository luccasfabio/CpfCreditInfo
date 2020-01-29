module.exports = (sequelize, DataTypes) => {
  const CpfCreditCardInfo= sequelize.define('CpfCreditCardInfo', {
    cpf: DataTypes.STRING,
    lastBureauQuery: DataTypes.DATE,
    lastCreditCardPurchase: DataTypes.DATE,
    lastCreditCardPurchaseValue: DataTypes.DOUBLE,
    lastCreditCardPurchaseQuotas: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE
  }, { 
    tableName:'cpfCreditCardInfo',
    timestamps:false
  });

  return CpfCreditCardInfo;
}