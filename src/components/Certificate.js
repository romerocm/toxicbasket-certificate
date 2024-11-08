import React from 'react';
import '../styles/Certificate.css';
import logo from '../assets/toxicbasket-logo.svg';

function Certificate({ recipientName }) {
  const date = new Date().toLocaleDateString();
  
  return (
    <div className="certificate">
      <div className="certificate-content">
        {/* Sello decorativo */}
        <div className="official-seal">SELLO OFICIAL</div>

        {/* Encabezado */}
        <div className="header">
          <img src={logo} alt="ToxicBasket Logo" className="company-logo" />
          <h1>PERMISO OFICIAL</h1>
          <h2>Departamento de Decisiones Post-Ruptura</h2>
        </div>

        {/* Contenido principal */}
        <div className="main-content">
          <p>Por la presente se autoriza a:</p>
          <div className="recipient-name">{recipientName}</div>
          <p>A consumir</p>
          <h3>HELADO PARA DESAYUNAR</h3>
          <p>Sin remordimientos, culpa o juicios de ningún tipo</p>
        </div>

        {/* Validez */}
        <div className="validity">
          <p>Válido hasta que sanes tu corazón</p>
          <p>(O hasta que se acabe el helado, lo que ocurra primero)</p>
        </div>

        {/* Firmas */}
        <div className="signatures">
          <div className="signature-block">
            <div className="signature-line">Firma del Departamento</div>
          </div>
          <div className="signature-block">
            <div className="signature-line">Firma del Portador</div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="footer">
          <p>*Documento legalmente no vinculante, pero moralmente infalible</p>
          <p>*El Departamento de Decisiones Post-Ruptura no se hace responsable por manchas de helado en la ropa</p>
        </div>
      </div>
      <button onClick={() => window.print()} className="print-button">
        Imprimir Permiso
      </button>
    </div>
  );
}

export default Certificate;
