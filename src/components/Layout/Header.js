import { Fragment } from "react";

import backGround from '../../assets/background.jpg';
import classes from './Header.Module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Cellphone Shop</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={backGround} alt="background"/>
            </div>
        </Fragment>
    );
};

export default Header;