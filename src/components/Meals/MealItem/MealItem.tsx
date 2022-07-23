import React from "react";
// @ts-ignore
import classes from "./MealItem.module.css"

interface MealProp {
    mealName: string;
    description: string;
    price: number;
}

const MealItem: React.FC<MealProp> = props => {
    const price = `$${props.price.toFixed(2)}`;
    return <li>
        <div>
            <h3 className={classes.meal}>{props.mealName}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        </div>
    </li>
}

export default MealItem;