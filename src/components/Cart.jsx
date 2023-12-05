import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./icons";
import "./Cart.css"

export function Cart () {
    const cartCheckboxId = useId()

    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>

            <aside className="cart">
        <ul>
            <li>
                <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="" />
                <div>
                    <strong>Iphone</strong> - $1399
                </div>

                <footer>
                    <small>
                        Qty: 1
                    </small>
                    <button>
                        +
                    </button>
                </footer>
            </li>
        </ul>
        <button>
            <ClearCartIcon />
        </button>
            </aside>
        </>
    )
}