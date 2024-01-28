import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

import "./App.css";

function App() {
  // GET - Fetching API data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  // POST - Creating a new product
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  return (
    <div>
      <h1>HTTP in React</h1>
      {/* GET - Fetching API data */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
      {/* POST - Creating a new product */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Price</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <button type="submit">Add product</button>
        </form>
      </div>
    </div>
  );
}

export default App;
