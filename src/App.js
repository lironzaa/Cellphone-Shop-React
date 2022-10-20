import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Phones from "./components/Phones/Phones";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [ cartIsShown, setCartIsShown ] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Phones/>
            </main>
        </CartProvider>
    );
}

export default App;
