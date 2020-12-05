import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartContextProvider from './global/CartContext';
import Footer from './components/footer';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Banner/>
        <Switch>
          <Route path = "/" exact component = {Products}/>
          <Route path = '/cart' exact component = {Cart} />
        </Switch>
      </BrowserRouter>
      </CartContextProvider>
      <Footer/>
      
    </div>
  );
}
export default App;
