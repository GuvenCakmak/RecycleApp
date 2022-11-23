import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";
import "../components/stylePages/StyleStore.css";

function Store() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/Cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name}></img>
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">{product.price}kr</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Store;
