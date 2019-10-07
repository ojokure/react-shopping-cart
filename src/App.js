import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./Contexts/ProductContext";
import CartContext from "./Contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={cart}>
          <Navigation cart={cart} />
        </CartContext.Provider>
        {/* Routes */}
        <CartContext.Provider value={{ products, addItem }}>
          <Route exact path="/" component={Products} />
        </CartContext.Provider>
        <CartContext.Provider value={{ products, addItem }}>
          <Route path="/cart" component={ShoppingCart }/>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
