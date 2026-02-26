
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

function GoldValue() {
  const chartRef = useRef(null);
  let goldChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const labels = ['2020', '2021', '2022', '2023', '2024', '2025'];
    const data = [1520, 1790, 1830, 1965, 2075, 2185]; // USD/oz

    goldChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Gold Price (USD/oz)",
            data: data,
            borderColor: "#D4AF37",
            backgroundColor: "rgba(212, 175, 55, 0.2)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "#333",
            },
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
      if (goldChart) goldChart.destroy();
    };
  }, []);

  return (
    <div>
      <h2>Gold's Value Over the Years</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

export default GoldValue;