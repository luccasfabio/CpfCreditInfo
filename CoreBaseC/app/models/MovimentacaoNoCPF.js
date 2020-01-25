module.exports = (sequelize, DataTypes) => {
  const MovimentacaoNoCPF = sequelize.define('MovimentacaoNoCPF', {
    cpf: DataTypes.STRING,
    ultimaConsultaEmBureau: DataTypes.DATE,
    ultimaCompraNoCredito: DataTypes.DATE,
    valorUltimaCompraNoCredito: DataTypes.DOUBLE,
    quantidadeParcelasUltimaCompraNoCredito: DataTypes.INTEGER,
    atualizadoEm: DataTypes.DATE
  }, { 
    tableName:'movimentacaonocpf',
    timestamps:false
  });

  return MovimentacaoNoCPF;
}