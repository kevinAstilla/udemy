import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authenticationAction } from '../store/authentication';

const Header = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);

  const logoutOnClickHandler = () => {
    dispatch(authenticationAction.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (<ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutOnClickHandler}>Logout</button>
          </li>
        </ul>)}
      </nav>
    </header>
  );
};

export default Header;
