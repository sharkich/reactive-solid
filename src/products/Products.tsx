import { FC } from 'react';

import './Products.css';
import { Error } from './Error';
import { Loading } from './Loading';
import { ProductsList } from './ProductsList';
import { useProducts } from './useProducts';

export const Products: FC = () => {
  const { error, isLoading, products } = useProducts();

  return (
    <div>
      <h1 className="title">Products</h1>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {products.length && <ProductsList products={products} />}
    </div>
  );
};
