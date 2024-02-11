import { FC } from 'react';

import { Product } from './Product.interface';
import { ProductItem } from './ProductItem';

interface Props {
  products: Product[];
}

export const ProductsList: FC<Props> = ({ products }) => (
  <div className="products">
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);
