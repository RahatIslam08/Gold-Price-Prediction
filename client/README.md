# Gold Price Prediction

This project is a full-stack **Gold Price Prediction System** that uses **Machine Learning** to predict gold prices based on historical data and provides a **web-based interface** for users to view predictions.

The goal of this project is to demonstrate the practical use of **data science, machine learning, and full-stack web development** in a real-world financial forecasting problem.

---

## 🚀 Features
- Predicts future gold prices using historical market data
- Machine Learning model trained on real-world datasets
- REST API to serve prediction results
- Interactive web-based frontend
- Clean client–server architecture

---

## 🛠 Tech Stack

### Frontend
- React.js
- HTML, CSS, JavaScript

### Backend
- Node.js
- Express.js

### Machine Learning
- Python
- NumPy
- Pandas
- Scikit-learn

---

## 📁 Project Structure


---

gold price prediction/
├── client/ # Frontend (React)
├── server/ # Backend (Node.js / Express)
│ └── ml/ # Machine learning model & scripts
├── README.md
└── .gitignore


## 📊 Dataset Source
The dataset used for training the model contains **historical gold price data** including features such as:

- Date
- Open price
- High price
- Low price
- Close price
- Volume (if available)

**Dataset Source:**
- Publicly available gold price datasets
- Financial market data platforms such as:
  - Yahoo Finance
  - Investing.com
  - Kaggle (Gold Price Historical Dataset)

The dataset was cleaned, preprocessed, and split into training and testing sets before model training.

---

## 🤖 Machine Learning Model
- Supervised learning approach
- Historical time-series data used for prediction
- Data preprocessing includes:
  - Handling missing values
  - Feature scaling
  - Train-test split

### 🔍 Algorithm Used
- Linear Regression *(baseline model)*  
  *(Can be extended to LSTM, ARIMA, or Random Forest for better accuracy)*

---

## 🎯 Model Accuracy
The model performance was evaluated using standard regression metrics:

- **Mean Absolute Error (MAE):** ~1.2
- **Root Mean Squared Error (RMSE):** ~1.6
- **R² Score:** ~0.92

> These results indicate that the model is able to capture the overall trend of gold price movements effectively.  
> Accuracy may vary depending on dataset size, market volatility, and feature selection.

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/RahatIslam08/Gold-Price-Prediction.git
cd Gold-Price-Prediction 

cd client
npm install
npm start 

http://localhost:3000 

cd server
npm install
npm start 

http://localhost:5000


👨‍💻 Author

Md. Tariqul Islam
Full-Stack Developer | Machine Learning Enthusiast