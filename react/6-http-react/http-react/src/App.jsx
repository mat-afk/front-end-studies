import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>HTTP in React</h1>
      {/* Fetching API data */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
