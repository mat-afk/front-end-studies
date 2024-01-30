import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

// Dynamic routes
import { Link } from "react-router-dom";

const Home = () => {
  const { data: products, loading } = useFetch(url);

  return (
    <div>
      <h1>Home</h1>
      {loading && <p>Loading...</p>}

      {products &&
        products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.price} R$</p>
            {/* Dynamic routes */}
            <Link to={`/products/${product.id}`}>Details</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
