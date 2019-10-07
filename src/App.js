import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./Contexts/ProductContext";
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
      <ProductContext.Provider>
        <Navigation cart={cart} />
      </ProductContext.Provider>

      {/* Routes */}
      <ProductContext.Provider>
        <Route
          exact
          path="/"
          render={() => <Products products={products} addItem={addItem} />}
        />
      </ProductContext.Provider>

      <ProductContext.Provider>
        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
