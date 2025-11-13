import { useState, useEffect } from 'react'
import './App.css'
import ProductCard from './components/Product'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }, [])

  if (loading) {
    return <div className="loading">Loading products...</div>
  }

  return (
    <div className="app">
      <h1>Fake Store</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App;
