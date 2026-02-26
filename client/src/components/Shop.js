
import React from "react";

function Shop() {
  const products = [
    { id: 1, name: "Gold Coin 1oz", price: 1800 },
    { id: 2, name: "Gold Bar 10g", price: 580 },
    { id: 3, name: "Gold Necklace", price: 2200 },
    { id: 4, name: "Gold Earrings", price: 1500 },
  ];

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h2>Gold Shop</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                padding: "10px 15px",
                backgroundColor: "#D4AF37",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;