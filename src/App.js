import { useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import { CartContext } from './CartContext';
import Navigation from './components/Navigation';
// import { getCart, storeCart } from './helpers';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';



function App() {

    const [cart, setCart] = useState({})

    // fetch cart from local storage
    useEffect(() => {
        // const cart = getCart()
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));
        console.log(cart)

    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])


  return (
    <Router>
        <CartContext.Provider value={{ cart, setCart }}>
            <Navigation/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/products' element={<ProductsPage/>}/>
              <Route path='/products/:_id' element={<SingleProduct/>}/>
          </Routes>
        </CartContext.Provider>
    </Router>
  );
}

export default App;
