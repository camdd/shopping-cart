/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//1.crear contexto
export const CartContext = createContext();

//2.crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    //chequear si el producto ya está en el carrito
    const productInCartIndex = cart.findIndex(item=> item.id == product.id)
    if(productInCartIndex >= 0) {
        const newCart = structuredClone(cart) //structuredClone hace copias "profundas" de los arrays y los objetos, y si el array es muy grande tal vez no conviene usarlo, con slice sería más rápido tal vez
        newCart[productInCartIndex].quantity += 1
        return setCart(newCart)
    }

    setCart(prevState => ([
        ...prevState,
        {
            ...product,
            quantity: 1
        }
    ]))
    
  };

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item=> item.id != product.id))
    
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>);
}
