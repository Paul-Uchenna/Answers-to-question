import product from "../products";

function ProductImage() {
  const image = product.image;
  return <img src={image} alt="BMW X6 images" />;
}

export default ProductImage;
