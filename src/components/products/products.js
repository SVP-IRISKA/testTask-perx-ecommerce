import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header/header";
import { getProducts } from "../../reducers/products";
import { addToBasket, deleteFromBasket}  from "../../reducers/basket";
import "./products.css";

const Products = () => {
  const allProducts = useSelector((s) => s.products.listProducts)
  const quantity = useSelector((s) => s.basket.listBasket);
  const dispatch = useDispatch();

  const addBasket = (name) => {
    dispatch(addToBasket(name))
  }

  const delBasket = (name) => {
    dispatch(deleteFromBasket(name))
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <hr></hr>

      <div className="products-list">
        {allProducts.map((item) => {
          return (
            <div
              key={Date.now() + Math.floor(Math.random() * 1000)}
              className="product"
            >
              <div className="product-title">{item.name}</div>
              <hr></hr>
              {/* <div className="product-image"> */}
                <img className="product-image" src="https://murmuring-tor-81614.herokuapp.com/logo/node.png" alt="Защита картера" />
              {/* </div> */}
              <div className="product-price">{`${item.price} $`}</div>
              <div className="product-btn-panel">
                <button type="button" className="product-add-basket" onClick={() => delBasket(item.name)} >-</button>
                <div className="product-count">{quantity[item.name] || 0}</div>
                <button type="button" className="product-add-basket" onClick={() => addBasket(item.name)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
