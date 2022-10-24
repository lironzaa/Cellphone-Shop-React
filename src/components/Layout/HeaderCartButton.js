import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.Module.css';
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cardCtx = useContext(CartContext)
    const cartItems = cardCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItems}</span>
        </button>
    )
};

export default HeaderCartButton;