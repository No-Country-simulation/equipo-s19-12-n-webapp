import { useState } from "react";
import "./PestañasPerfil.css";
import AcercaDe from "../AcercaDe/AcercaDe";

// Componente para las pestañas
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-header">
        {children.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

// Componente para cada panel de contenido
const TabPanel = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

// Componente principal
const PestañasPerfil = () => {
  return (
    <div>
      <Tabs>
        <TabPanel label="Acerca de">
          {/* Aquí puedes importar y renderizar el componente de "Acerca de" */}
          <AcercaDe />
        </TabPanel>
        <TabPanel label="Catálogo">
          <h2>Catálogo</h2>
          <p>Contenido de la sección Catálogo.</p>
          {/* Aquí puedes importar y renderizar el componente de "Catálogo" */}
        </TabPanel>
        <TabPanel label="Reservas">
          <h2>Reservas</h2>
          <p>Contenido de la sección Reservas.</p>
          {/* Aquí puedes importar y renderizar el componente de "Reservas" */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PestañasPerfil;
