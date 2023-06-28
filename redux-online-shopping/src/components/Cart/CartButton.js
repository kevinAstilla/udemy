import { useDispatch, useSelector } from 'react-redux'; 
import classes from './CartButton.module.css';

import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const distpatch = useDispatch();
  const totalItem = useSelector(state => state.cart.totalItem);

  const onClickHandler = () => {
    distpatch(uiAction.cartModalShowToggle());
  }

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
