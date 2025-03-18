import React from 'react';
import { Link } from 'react-router';

function Product(props) {
  const { product, showProduct } = props;
  console.log(product);
  return (
    <div className="card">
      <img
        className="card-img-top w-25"
        src={product.image}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>{product.category}</p>
        <p className="card-text">{product.description}</p>
        <p>Price: {product.price}$</p>
        {showProduct && (
          <Link className="btn btn-primary" to={`/product/${product.id}`}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
