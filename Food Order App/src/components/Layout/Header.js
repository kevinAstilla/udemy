import { Fragment } from 'react';

import classes from './Header.module.css';

import HeaderCartButton from '../Cart/HeaderCartButton';
import MealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={ MealsImage } alt="a table full of food"/>
            </div>
        </Fragment>

    );
}

export default Header;