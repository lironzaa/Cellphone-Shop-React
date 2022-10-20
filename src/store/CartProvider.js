import CardContext from "./card-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
}

const CartProvider = props => {
    const [ cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item });
    };

    const removeItemToCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

    return <CardContext.Provider value={cartContext}>
        {props.children}
    </CardContext.Provider>
};

export default CartProvider;