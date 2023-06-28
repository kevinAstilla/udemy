import { useContext, useState, useEffect } from 'react'

import CartContext from '../../store/cart-context';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [isBtnHighlighted, setIsButtonHighlighted] = useState(false);

    const { items } = cartCtx;

    const itemsInCart = items.reduce((totalItemCount, item) => {
        return totalItemCount +=  item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsButtonHighlighted(true);

        const timer = setTimeout(() => {
            setIsButtonHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [items])

    return (
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {itemsInCart}
            </span>
        </button>
    );
};

export default HeaderCartButton;