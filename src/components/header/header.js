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
      <Link className="store-name" to="/">Магазин</Link>
      ----название, навигация, корзина----
      <div>сумма товара: {totalSummaProducs().toFixed(2)} $</div>
      <div>количество товара: {totalProducs()}</div>
      <Link to="/basket">Корзина</Link>
    </nav>
  );
};

export default Header;
