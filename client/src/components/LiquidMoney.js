
import React from "react";

function LiquidMoney() {
  const content = [
    {
      title: "Predictable Value",
      text: "While gold prices fluctuate, they tend to be more stable than many other assets, particularly during economic crises, providing predictable liquidity even in uncertain times."
    },
    {
      title: "Fractional Ownership",
      text: "Gold can be owned in various sizes and weights, allowing for precise liquidation of only the amount needed, unlike larger assets such as real estate."
    },
    {
      title: "Crisis Resilience",
      text: "During financial crises when banks may fail or currencies collapse, gold often remains liquid and tradeable, serving as emergency money when other systems fail."
    }
  ];

  return (
    <div>
      <h2>Liquid Money Advantages</h2>
      {content.map((section, idx) => (
        <div key={idx} style={{ marginBottom: "15px" }}>
          <h3>{section.title}</h3>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
}

export default LiquidMoney;