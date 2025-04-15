import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";
function ProductDetails({ product, addToCart }) {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }} className="product">
      <Link to="/">
        <TiArrowLeft className="icon" />
      </Link>
      <div className="product-details">
        <img src={product.image} />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <button className="add-to-card" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <p>Price: ${product.price}</p>

        <p>
          {product.likes}
          <FaStar />
        </p>
        <p>{product.details}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
