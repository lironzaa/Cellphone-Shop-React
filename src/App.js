import Header from "./components/Layout/Header";
import React, { Fragment } from "react";
import Phones from "./components/Phones/Phones";

function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                <Phones/>
            </main>
        </Fragment>
    );
}

export default App;
