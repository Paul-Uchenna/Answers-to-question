import product from "../products";

function ProductPrice() {
  const price = product.price;
  return <h2 className="fw-bolder">{price}</h2>;
}

export default ProductPrice;
