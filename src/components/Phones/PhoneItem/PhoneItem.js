import classes from './PhoneItem.Module.css';
import PhoneItemForm from "./PhoneItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const PhoneItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    };

    return (
        <li className={classes.phone}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <PhoneItemForm onAddToCart={addToCartHandler} id={props.id}/>
            </div>
        </li>
    );
}

export default PhoneItem;