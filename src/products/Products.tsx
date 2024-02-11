import { FC, useEffect, useState } from 'react';
import './Products.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
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
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="title">Products</h1>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {JSON.stringify(error)}</p>}

      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <p>
              <img alt={product.title} height={50} src={product.image} width={50} />
            </p>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
