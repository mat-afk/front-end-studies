import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/products/${id}`;

  const { data: product, loading } = useFetch(url);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {product && (
        <div>
          <h2>Product ID: {id}</h2>
          <h3>Name: {product.name}</h3>
          <h4>Price: {product.price}</h4>
          {/* Nested routes */}
          <Link to={`/products/${id}/info`}>More info</Link>
        </div>
      )}
    </div>
  );
};

export default Product;
