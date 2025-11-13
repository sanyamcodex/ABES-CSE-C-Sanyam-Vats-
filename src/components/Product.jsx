import './Product.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="category">Category: {product.category}</p>
      <p className="description">{product.description}</p>
      <p className="rating">Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;