module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('MovimentacaoNoCPF', {
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
      ultimaConsultaEmBureau: { 
        allowNull: true,
        type: DataTypes.DATE
      },
      ultimaCompraNoCredito: {
        allowNull: true,
        type: DataTypes.DATE
      },
      valorUltimaCompraNoCredito: {
        allowNull: true,
        type: DataTypes.DOUBLE,
      },
      quantidadeParcelasUltimaCompraNoCredito: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      atualizadoEm: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('MovimentacaoNoCPF');
  }
};