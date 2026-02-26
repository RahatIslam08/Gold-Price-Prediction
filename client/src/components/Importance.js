
import React from "react";

function Importance() {
  const content = [
    {
      title: "Historical Value",
      text: "For thousands of years, gold has been valued for its unique properties..."
    },
    {
      title: "Economic Stability",
      text: "Gold often serves as a hedge against inflation and currency devaluation..."
    },
    {
      title: "Limited Supply",
      text: "Unlike fiat currencies that can be printed at will, gold has a finite supply..."
    },
    {
      title: "Universal Acceptance",
      text: "Gold is recognized and accepted worldwide..."
    },
    {
      title: "Portfolio Diversification",
      text: "Adding gold to an investment portfolio can help reduce overall risk..."
    }
  ];

  return (
    <div>
      <h2>Why Gold is Important</h2>
      {content.map((section, idx) => (
        <div key={idx} style={{ marginBottom: "15px" }}>
          <h3>{section.title}</h3>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Importance;