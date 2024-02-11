import { useEffect, useState } from 'react';

import { Product } from './Product.interface';

export const useProducts = () => {
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

  return {
    error,
    isLoading,
    products
  };
};
