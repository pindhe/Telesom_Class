import { useState } from "react";

const products = [{ name: "Sandalwood Tasbiix", category: "Spiritual", price: "$18", icon: "✦", tone: "sand", tag: "Popular" }, { name: "Travel Prayer Mat", category: "Essentials", price: "$32", icon: "▦", tone: "blue", tag: "New" }, { name: "Amber Attar", category: "Fragrance", price: "$24", icon: "♢", tone: "amber", tag: "" }, { name: "Daily Journal", category: "Stationery", price: "$14", icon: "▤", tone: "green", tag: "" }];

function Shop() {
  const [liked, setLiked] = useState([]); const [cart, setCart] = useState(0); const toggleLike = (name) => setLiked((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);
  return <div className="shop-page"><div className="shop-toolbar"><div><h2>Curated for your day</h2><p>Thoughtful objects for a more intentional routine.</p></div><button className="cart-button">▱ <span>{cart}</span> Cart</button></div><div className="category-row"><button className="category active">All products</button><button className="category">Spiritual</button><button className="category">Essentials</button><button className="category">Fragrance</button></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><div className={`product-art ${product.tone}`}><span>{product.icon}</span>{product.tag && <em>{product.tag}</em>}<button className={`heart ${liked.includes(product.name) ? "liked" : ""}`} onClick={() => toggleLike(product.name)} aria-label="Favorite">♡</button></div><div className="product-info"><span>{product.category}</span><h3>{product.name}</h3><div><strong>{product.price}</strong><button onClick={() => setCart(cart + 1)}>Add to cart <b>+</b></button></div></div></article>)}</div></div>;
}

export default Shop;
