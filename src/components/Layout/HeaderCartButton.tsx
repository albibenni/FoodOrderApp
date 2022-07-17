import React from "react";
import CartIcon from "../Cart/CartIcon";
// @ts-ignore
import classes from "./HeaderCartButton.module.css";

interface props {

}


const HeaderCartButton: React.FC<props>= ({}) => {

    return (
        <>
            <button className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>
                    3
                </span>

            </button>
        </>
    )
}

export default HeaderCartButton;