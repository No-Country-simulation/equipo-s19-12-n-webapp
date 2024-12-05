import { useState } from 'react';

function usePostFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (userData) => {
    setLoading(true);
    setError(null); // Limpiamos errores anteriores
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*",
          'Acept': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(response)
      if (!response.ok) {
        //      throw new Error('Error en la solicitud');
        const result = await response.json();
        setError(result);  // Guardamos los datos de la respuesta
        throw new Error(result);
      }

      const result = await response.json();
      setData(result);  // Guardamos los datos de la respuesta
    } catch (err) {
      setError(err.message);  // Guardamos cualquier error
    } finally {
      setLoading(false);  // Indicamos que la solicitud ha terminado
    }
  };

  return { postData, data, loading, error };
}

export default usePostFetch;
