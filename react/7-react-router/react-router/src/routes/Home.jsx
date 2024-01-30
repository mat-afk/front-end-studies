import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

const Home = () => {
  const { data: products } = useFetch(url);

  return (
    <div>
      <h1>Home</h1>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.price} R$</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
