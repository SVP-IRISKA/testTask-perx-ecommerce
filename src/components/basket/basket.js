import React from "react";
import Header from "../header/header";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  deleteFromBasket,
  deleteFromProductBasket,
} from "../../redux/reducers/basket";
import "./basket.css";
import BasketOrder from "./basketOrder";

const Basket = () => {
  const productsBasket = useSelector((s) => s.basket.listBasket);
  const dispatch = useDispatch();
  const addBasket = (name) => {
    dispatch(addToBasket(name));
  };

  const delBasket = (name) => {
    dispatch(deleteFromBasket(name));
  };

  const delProductBasket = (name) => {
    dispatch(deleteFromProductBasket(name));
  };

  return (
    <div>
      <Header />
      <hr></hr>
      <BasketOrder />
      <div className="table_basket">
        {Object.entries(productsBasket).map((item) => {
          //item [key, value]
          return (
            <div
              key={Math.floor(Math.random() * 160000)}
              className="basket_product"
            >
              <div className="product-basket-image">
                <img
                  className="product-image"
                  src="https://murmuring-tor-81614.herokuapp.com/logo/node.png"
                  alt="Защита картера"
                />
              </div>
              <div className="product-title-basket">{item[0]}</div>
              <div className="button_basket_panel">
                <button
                  type="button"
                  className="btn-count-basket"
                  onClick={() => delBasket(item[0])}
                >
                  -
                </button>
                <div className="count-product">{item[1] || 0}</div>

                <button
                  type="button"
                  className="btn-count-basket"
                  onClick={() => addBasket(item[0])}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="btn_dell_from_basket"
                  type="button"
                  onClick={() => delProductBasket(item[0])}
                >
                  Удалить из корзины
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
