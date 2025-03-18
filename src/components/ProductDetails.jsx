import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from './Product';

function ProductDetails() {
  const params = useParams();
  console.log(params);
  const [product, SetProduct] = useState({});
  const api_url = 'https://fakestoreapi.com/products';
  //   const api_url = `https://fakestoreapi.com/products/${params.id}`;

  useEffect(() => {
    fetch(api_url + '/' + params.id)
      .then((resp) => resp.json())
      .then((data) => SetProduct(data));
  }, [params]);
  console.log(product);
  return (
    <>
      <h1>Product List</h1>

      <Product key={product.id} product={product} showProduct={false} />
    </>
  );
}

export default ProductDetails;
