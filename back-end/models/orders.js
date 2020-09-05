const {
  orders,
  products,
  users,
  orders_products: OrdersProducts,
} = require('../mysql/models');

const list = async (ind) => {
  if (ind) return orders.findAll({ where: { [ind.key]: ind.value } });
  return orders.findAll({
    include: [{ model: users }],
    attributes: { exclude: ['user_id'] },
  });
};

const details = async (id) => orders.findByPk(id, {
  include: [{ model: products }, { model: users }],
  attributes: { exclude: ['user_id'] },
});

const insert = async ({
  userId,
  totalPrice,
  address,
  number,
  status = 'pendente',
}) => orders.create({
  user_id: userId,
  total_price: totalPrice,
  address,
  number,
  status,
});

const insertOrdersProducts = async (prod) => OrdersProducts.bulkCreate(prod);

const update = async (id) =>
  orders.update({ status: 'Entregue' }, { where: { id } });

module.exports = {
  list,
  details,
  insert,
  insertOrdersProducts,
  update,
};
