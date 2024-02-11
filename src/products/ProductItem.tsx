import { FC } from 'react';

import { Product } from './Product.interface';

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => (
  <div key={product.id} className="product">
    <h2>
      {product.category === 'jewelery' ? '👑' : null}
      {product.category === 'electronics' ? '📱' : null}
      {product.title}
    </h2>
    <p>
      <img alt={product.title} height={50} src={product.image} width={50} />
    </p>
    <p>
      <b>
        {product.price.toLocaleString('en-US', {
          currency: 'USD',
          style: 'currency'
        })}
      </b>
    </p>
    <p>{product.category}</p>
    {product.category !== 'jewelery' && <p>{product.description}</p>}
  </div>
);
