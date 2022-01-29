import React from "react";
import Header from "../header/header";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  deleteFromBasket,
  deleteFromProductBasket,
} from "../../reducers/basket";
import "./basket.css";
import BasketOrder from "./basketOrder";

const Basket = () => {
  const productsBasket = useSelector((s) => s.basket.listBasket);
  const dispatch = useDispatch();

  console.log(productsBasket);

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
      <BasketOrder />
      <div className="table_basket">
        {/* <div className="all_basket_products"> */}
        {Object.entries(productsBasket).map((item, index) => {
          //item [key, value]
          return (
            <div key={index} className="basket_product">
              <div>картинка</div>
              <div>{item[0]}</div>
              <div className="button_basket_panel">
                <button
                  type="button"
                  className="count"
                  onClick={() => delBasket(item[0])}
                >
                  -
                </button>
                <div className="count-product">{item[1] || 0}</div>

                <button
                  type="button"
                  className="count"
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
    // </div>
  );
};

export default Basket;
