import { useState, useEffect } from "react";
import ArrowButton from "../../atomos/ArrowButton/ArrowButton";
import "./Pagination.css";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  // Función que simula la obtención de datos del backend
  const fetchData = (page) => {
    // Simulando la respuesta de una API con un retraso de 1 segundo
    setTimeout(() => {
      // Emulamos los datos de la página solicitada
      const dataForCurrentPage = Array.from({ length: 10 }, (_, index) => ({
        id: (page - 1) * 10 + index + 1,
        name: `Item ${(page - 1) * 10 + index + 1}`,
      }));
      setData(dataForCurrentPage);
    }, 1000);
  };

  // Llamamos a fetchData cuando cambia la página
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para manejar el click en un número de página
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Genera el listado de números de página
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${i === currentPage ? "active" : ""}`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <div className="pagination-container">
        <div className="parrafo">Total de {totalPages} páginas</div>

        {/* Flecha hacia la izquierda */}
        <ArrowButton
          onClick={goToPreviousPage}
          isDisabled={currentPage === 1}
          direction="left"
        />
        {/* Números de página */}
        <div className="page-numbers">{renderPageNumbers()}</div>
        {/* Flecha hacia la derecha */}
        <ArrowButton
          onClick={goToNextPage}
          isDisabled={currentPage === totalPages}
          direction="right"
        />
      </div>
      {/* Mostrando los datos obtenidos de la "API trucha" */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
