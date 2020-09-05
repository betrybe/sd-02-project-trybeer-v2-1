function Product(sequelize, DataTypes) {
  const Products = sequelize.define(
    'products',
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      volume: DataTypes.INTEGER,
      urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  Products.associate = (models) => {};

  return Products;
}

module.exports = Product;
