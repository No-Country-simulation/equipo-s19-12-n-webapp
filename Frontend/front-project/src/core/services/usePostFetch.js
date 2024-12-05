import { useState } from 'react';

function usePostFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (userData) => {
    setLoading(true);
    setError(null); // Limpiamos errores anteriores
    console.log("Enviando:", JSON.stringify(userData));

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',  // Corregido: 'Accept' en lugar de 'Acept'
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();  // Leemos el cuerpo de la respuesta una sola vez

      if (!response.ok) {
        // Si la respuesta no es exitosa, lanzamos un error con el mensaje del servidor
        setError(result);  // Guardamos los detalles del error
        throw new Error(result.message || 'Error en la solicitud');
      }

      setData(result);  // Guardamos los datos si la solicitud es exitosa
      setError(null)
    } catch (err) {
      setError(err.message || 'Error desconocido');  // Guardamos cualquier error
      setData(null)
    } finally {
      setLoading(false);  // Indicamos que la solicitud ha terminado
    }
  };

  return { postData, data, loading, error };
}

export default usePostFetch;
