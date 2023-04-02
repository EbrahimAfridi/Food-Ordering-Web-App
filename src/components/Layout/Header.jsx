import React from "react"
import MealImage from '../../assets/meals2.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header (props) {
    return(
        <>
            <header className={classes.header}>
                <h1>Ramadan Meals</h1>
                <HeaderCartButton/> 
            </header>
            <div className={classes['main-image']}>
                <img className="main-image" src={MealImage} alt="Table full of food" />
            </div>
        </>
    )
}