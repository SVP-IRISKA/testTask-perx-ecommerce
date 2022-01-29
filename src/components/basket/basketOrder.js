import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearProductsBasket } from "../../redux/reducers/basket";

import "./basketOrder.css";

const BasketOrder = () => {
  const amountProducts = useSelector((s) => s.basket.listBasket);
  const list = useSelector((store) => store.products.listProducts);
  const dispatch = useDispatch();

  const totalProducs = () => {
    return Object.values(amountProducts).reduce((acc, rec) => acc + rec, 0);
  };

  const totalPrice = (name) => list.find((item) => item.name === name).price;

  const totalSummaProducs = () => {
    return Object.entries(amountProducts).reduce((acc, [name, q]) => {
      return acc + totalPrice(name) * q;
    }, 0);
  };

  const clearBasket = () => {
    dispatch(clearProductsBasket());
  };

  return (
    <div className="order-basket-conteiner">
      <div className="order-amount-basket">{`Cумма заказа: ${totalSummaProducs().toFixed(
        2
      )} $`}</div>
      <div className="order-quantity-basket">
        Количество товара: {totalProducs()}
      </div>
      <div className="order-batton-panel">
        <button
          type="button"
          className="order-clear-basket"
          onClick={() => clearBasket()}
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
};

export default BasketOrder;
