import React, { useEffect, useState } from 'react';
import Product from './Product';

function ProductsList() {
  const api_url = 'https://fakestoreapi.com/products';
  const [products, SetProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((resp) => resp.json())
      .then((data) => SetProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  };

  const getCategoriesProduct = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((resp) => resp.json())
      .then((data) => SetProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  console.log(products);

  return (
    <>
      <h1 className="text-center p-3">Our Product</h1>
      <div className="container">
        <div className="p-4">
          <button className="btn btn-info" onClick={() => getProducts()}>
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => {
                  getCategoriesProduct(cat);
                }}
                className="btn btn-info"
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="row ">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showProduct={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
