import { useState } from 'react';

function useGetFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Función para hacer la solicitud GET
  const getData = async () => {
    setLoading(true);
    setError(null); // Limpiamos errores anteriores
    try {
      const response = await fetch(url, {
        method: 'GET',  // Cambiado de 'POST' a 'GET'
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*", // Si es necesario para CORS
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        /* throw new Error('Error en la solicitud'); */
        const result = await response.json();
        setError(result);  // Guardamos los datos de la respuesta
      }

      const result = await response.json();
      setData(result);  // Guardamos los datos de la respuesta
    } catch (err) {
      //setError(err.message);  // Guardamos cualquier error

    } finally {
      setLoading(false);  // Indicamos que la solicitud ha terminado
    }
  };

  return { getData, data, loading, error };
}

export default useGetFetch;
