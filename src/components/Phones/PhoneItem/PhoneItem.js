import classes from './PhoneItem.Module.css';
import PhoneItemForm from "./PhoneItemForm";

const PhoneItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.phone}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <PhoneItemForm/>
            </div>
        </li>
    );
}

export default PhoneItem;