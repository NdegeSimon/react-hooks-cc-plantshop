import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [inStock, setInStock] = useState(true);

  const handleStockToggle = () => {
    setInStock(!inStock);
    // In a real app, you might want to update the plant on the server
    // For now, we'll just update the local state
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
