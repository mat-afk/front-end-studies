import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = `http://localhost:3000/products?${searchParams}`;

  const { data: products, loading } = useFetch(url);

  return (
    <div>
      <h1>Search results</h1>
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

export default Search;
