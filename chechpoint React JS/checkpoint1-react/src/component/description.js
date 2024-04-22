import product from "../products";

function ProductDescription() {
  const description = product.description;
  return <h2 className="fs-6 text-start">{description}</h2>;
}

export default ProductDescription;
