/* eslint-disable react/prop-types */
import { useCart } from "../hooks/useCart";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id} className="card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card__image"
              />

              <div className="card__overlay">
                <div className="card__header">
                  <div className="card__header-text">
                    <h3>{product.title}</h3> ${product.price}
                  </div>
                  
                  
                
                </div>
                <p className="card__description">
                {product.description ? product.description : "No Description"}
              </p>
              <button className="button"
                  style={{ backgroundColor: isProductInCart ? "#676767" : "#b1b1b1" }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon className="cartIcon"/> : <AddToCartIcon className="cartIcon" />}
                </button>
              </div>
              <div>
                
              </div>


            </li>
            
          );
        })}
      </ul>
    </main>
  );
}
