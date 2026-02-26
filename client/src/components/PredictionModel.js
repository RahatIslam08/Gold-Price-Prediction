
import React, { useState } from "react";

function Prediction() {
  const [inputs, setInputs] = useState({
    sp500: "",
    silver: "",
    usoil: "",
    eurusd: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sp500: parseFloat(inputs.sp500),
          silver: parseFloat(inputs.silver),
          usoil: parseFloat(inputs.usoil),
          eurusd: parseFloat(inputs.eurusd),
        }),
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      setResult(data.prediction);
    } catch (err) {
      console.error(err);
      setError("Prediction failed. Make sure the server is running.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Gold Price Prediction</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>S&P 500:</label>
        <input
          type="number"
          name="sp500"
          value={inputs.sp500}
          onChange={handleChange}
          step="0.01"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Silver Price:</label>
        <input
          type="number"
          name="silver"
          value={inputs.silver}
          onChange={handleChange}
          step="0.01"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>USOIL Price:</label>
        <input
          type="number"
          name="usoil"
          value={inputs.usoil}
          onChange={handleChange}
          step="0.01"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>EUR/USD:</label>
        <input
          type="number"
          name="eurusd"
          value={inputs.eurusd}
          onChange={handleChange}
          step="0.01"
        />
      </div>

      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict Gold Price"}
      </button>

      {result !== null && (
        <h3 style={{ marginTop: "20px" }}>
          Predicted Gold Price: ${result.toFixed(2)}
        </h3>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Prediction;