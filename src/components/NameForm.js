import React, { useState } from "react";
import "../styles/NameForm.css";
import logo from "../assets/toxicbasket-logo.svg";

function NameForm({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="name-form-container">
      <div className="form-header">
        <img src={logo} alt="ToxicBasket Logo" className="logo" />
        <h2>¿Corazón Roto? ¡Tenemos el Remedio!</h2>
      </div>
      <form onSubmit={handleSubmit} className="name-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
          required
        />
        <button type="submit">Generar Certificado</button>
      </form>
    </div>
  );
}

export default NameForm;
