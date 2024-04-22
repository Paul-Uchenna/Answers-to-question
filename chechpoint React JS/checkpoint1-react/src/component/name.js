import product from "../products";

function ProductName() {
  const name = product.name;

  return <h2 className="fw-bolder">{name}</h2>;
}

export default ProductName;
