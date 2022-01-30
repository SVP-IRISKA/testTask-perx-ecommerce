import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
  const amountProducts = useSelector((s) => s.basket.listBasket);
  const list = useSelector((store) => store.products.listProducts);

  const totalProducs = () => {
    return Object.values(amountProducts).reduce((acc, rec) => acc + rec, 0);
  };

  const totalPrice = (name) => list.find((item) => item.name === name).price;

  const totalSummaProducs = () => {
    return Object.entries(amountProducts).reduce((acc, [name, q]) => {
      return acc + totalPrice(name) * q;
    }, 0);
  };

  return (
    <nav>
      <Link className="header-store-name" to="/">
        Магазин "80lvl"
      </Link>
      <div className="header-basket-panel">
        <div className="header-basket-info">
          <div className="header-basket total ">
            Сумма товара: {totalSummaProducs().toFixed(2)} $
          </div>
          <div className="header-basket qnt ">
            Количество товара: {totalProducs()}
          </div>
        </div>
        <Link className="header-basket-btn-link" to="/basket">
          Корзина
        </Link>
      </div>
    </nav>
  );
};

export default Header;
