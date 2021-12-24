import React from 'react';
import Card from '../../UI/Card';
import CartContext from '../../store/meal-context';
import { useContext } from 'react';
import classes from './CardPage.module.css'

const DrinksList = (props) => {
    const crtContext = useContext(CartContext);

    const addItems = () => {
        crtContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 1,
            image: props.image
        })
    }
    return (
        <Card>
            <h3>{props.name}</h3>
            <img src={props.image} alt="drinks-images" />
            <p>${props.price}</p>
            <button className={classes.selectBtn} onClick={addItems}>Select</button>
        </Card>
    )
}

export default DrinksList
