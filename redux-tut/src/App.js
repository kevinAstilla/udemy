import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header'
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';


function App() {
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
    
  );
}

export default App;
