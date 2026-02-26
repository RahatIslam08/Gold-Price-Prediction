import React, { useState } from "react";
import Importance from "./components/Importance";
import LiquidMoney from "./components/LiquidMoney";
import GoldValue from "./components/GoldValue";
import Market from "./components/Market";
import PredictionModel from "./components/PredictionModel";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import SectionModal from "./components/SectionModal";
import "./App.css";

function App() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { id: "importance", title: "IMPORTANCE", component: <Importance /> },
    { id: "liquidMoney", title: "LIQUID MONEY", component: <LiquidMoney /> },
    { id: "goldValue", title: "GOLD'S VALUE", component: <GoldValue /> },
    { id: "market", title: "MARKET (JAN-MAY)", component: <Market /> },
    { id: "prediction", title: "PREDICTION MODEL", component: <PredictionModel /> },
    { id: "shop", title: "SHOP", component: <Shop /> },
    { id: "contact", title: "CONTACT US", component: <ContactUs /> },
  ];

  return (
    <div className="app-container">

      {/* Top Header */}
      <header className="top-header">
        <h3>Understanding Why Gold Shines in Any Economy</h3>

        <div className="header-buttons">
          <button className="btn blue">Dark Mode</button>
          <button className="btn yellow">User Registration</button>
          <button className="btn green">Admin Registration</button>
        </div>
      </header>

      {/* Main Card */}
      <div className="card">
        <h1 className="title">Financial Portal</h1>
        <div className="underline"></div>

        {/* Vertical Section Buttons */}
        <div className="menu">
          {sections.map((sec) => (
            <p
              key={sec.id}
              onClick={() => setOpenSection(sec.id)}
              className="menu-item"
            >
              {sec.title}
            </p>
          ))}
        </div>
      </div>

      {/* Modals */}
      {sections.map((sec) => (
        <SectionModal
          key={sec.id}
          title={sec.title}
          isOpen={openSection === sec.id}
          onClose={() => setOpenSection(null)}
        >
          {sec.component}
        </SectionModal>
      ))}

    </div>
  );
}

export default App;