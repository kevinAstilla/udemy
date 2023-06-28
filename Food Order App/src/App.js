import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModal, setIsModalShow] = useState(false);

  const showCartHandler = () => {
    setIsModalShow(true);
  };
  const hideCartHandler = () => {
    setIsModalShow(false);
  };
  return (
    <CartProvider>
      {isModal && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
