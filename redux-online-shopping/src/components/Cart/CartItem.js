import { useDispatch } from 'react-redux';

import { cartAction } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const onClickAddHandler = () => {
    dispatch(cartAction.addItem(props.item));
  };
  const onClickSubtractHandler = () => {
    dispatch(cartAction.removeItem(props.item));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onClickSubtractHandler}>-</button>
          <button onClick={onClickAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
