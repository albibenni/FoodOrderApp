import React from "react";
// @ts-ignore
import mealsImage from "../../assets/meals.jpeg";
// @ts-ignore
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food!"/>
            </div>
        </>
    )
};

export default Header;