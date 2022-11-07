import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Phones from "./components/Phones/Phones";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [ cartIsShown, setCartIsShown ] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

  const notify = () => {
    toast("Order Completed!")
  };

    return (
        <CartProvider>
            {cartIsShown && <Cart onAlert={notify} onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Phones/>
            </main>
          <ToastContainer />
        </CartProvider>
    );
}

export default App;
