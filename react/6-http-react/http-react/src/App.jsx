import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

import "./App.css";

function App() {
  // GET - Fetching API data
  const [products, setProducts] = useState([]);

  // Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // POST - Creating a new product
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    // POST refactor
    httpConfig(product, "POST");
  };

  return (
    <div>
      <h1>HTTP in React</h1>
      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error handling */}
      {error && <p>{error}</p>}

      {/* GET - Fetching API data */}
      <ul>
        {items &&
          items.map((product) => (
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
          {/* POST loading */}
          {loading ? (
            <button type="submit" disabled>
              Wait...
            </button>
          ) : (
            <button type="submit">Add product</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
