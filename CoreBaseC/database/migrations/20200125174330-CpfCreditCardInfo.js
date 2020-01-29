module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('CpfCreditCardInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastBureauQuery: { 
        allowNull: true,
        type: DataTypes.DATE
      },
      lastCreditCardPurchase: {
        allowNull: true,
        type: DataTypes.DATE
      },
      lastCreditCardPurchaseValue: {
        allowNull: true,
        type: DataTypes.DOUBLE,
      },
      lastCreditCardPurchaseQuotas: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('CpfCreditCardInfo');
  }
};