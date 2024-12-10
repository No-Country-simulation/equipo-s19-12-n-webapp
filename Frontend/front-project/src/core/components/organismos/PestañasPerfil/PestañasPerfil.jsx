import { useState } from "react";
import "./PestañasPerfil.css";
import AcercaDe from "../AcercaDe/AcercaDe";
import Ofertas from "../../moleculas/ofertas/Ofertas";
import SearchInput from "../../atomos/SearchInput/SearchInput";
import Button from "../../atomos/Button/Button";

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
          {/* Aquí puedes importar y renderizar el componente de "Catálogo" */}
          <div className="contenedorInputPerfil">
            <SearchInput />
          </div>
          <Ofertas />
          <div className="contenerdorBtnCatalogo">
            <Button
              variante={"orange"}
              texto={"Agregar producto"}
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PestañasPerfil;
