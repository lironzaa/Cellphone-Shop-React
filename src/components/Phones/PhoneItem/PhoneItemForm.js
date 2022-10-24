import classes from './PhoneItemForm.Module.css';
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const PhoneItemForm = props => {
    const [ amountIsValid, setAmountIsValid ] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const amountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || amountNumber < 1 || amountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(amountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount 1-5</p>}
        </form>
    );
};

export default PhoneItemForm;