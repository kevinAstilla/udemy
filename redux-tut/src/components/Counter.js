import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const onIncrementHandler = () => {
    dispatch(counterAction.increment());
  }

  const onDecrementHandler = () => {
    dispatch(counterAction.decrement());
  }

  const onIncreaseHandler = () => {
    dispatch(counterAction.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onDecrementHandler}>Decrement</button>
        <button onClick={onIncreaseHandler}>Increase by 5</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
