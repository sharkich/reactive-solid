import { FC, useEffect, useState } from 'react';
import './Products.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const Products: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(async response => await response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className="title">Products</h1>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {JSON.stringify(error)}</p>}

      <div className="products">
        {products.map(product => (
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
              {product.price.toLocaleString('en-US', {
                currency: 'USD',
                style: 'currency'
              })}
            </p>
            <p>{product.category}</p>
            {product.category !== 'jewelery' && <p>{product.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
