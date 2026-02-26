
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

function Market() {
  const chartRef = useRef(null);
  let marketChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const labels = [];
    const data = [];
    let basePrice = 2165; // Starting gold price USD/oz
    const today = new Date();

    // Generate 30 days of historical data
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      labels.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }));

      // Random fluctuations with slight upward trend
      const change = (Math.random() - 0.48) * 10;
      basePrice += change;
      data.push(basePrice.toFixed(2));
    }

    marketChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Gold Price (USD/oz)",
            data: data,
            borderColor: "#D4AF37",
            backgroundColor: "rgba(212, 175, 55, 0.2)",
            tension: 0.2,
            fill: true,
            pointRadius: 0, // Clean line
            pointHoverRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return "Price: $" + context.raw;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function (value) {
                return "$" + value;
              },
            },
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (marketChart) marketChart.destroy();
    };
  }, []);

  return (
    <div>
      <h2>Market Prices (Last 30 Days)</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

export default Market;