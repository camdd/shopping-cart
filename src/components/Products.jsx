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
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3> - ${product.price}
              </div>
              <div>
                <button style={{backgroundColor: isProductInCart ? 'red' : '#09f'}}
                  onClick={() =>{
                    isProductInCart 
                    ? removeFromCart(product) : addToCart(product)
                  }

                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
