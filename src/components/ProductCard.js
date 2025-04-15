import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart, setSelectedProduct }) {
  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}`}
        onClick={() => setSelectedProduct(product)}
      >
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>{product.category}</p>
        <p>
          {product.likes}
          <FaStar />
        </p>
        <button className="add-to-card" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
