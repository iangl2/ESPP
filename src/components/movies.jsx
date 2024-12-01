import React, { useState, useEffect } from 'react'

import '../styles/movies.css'
const apiLink =process.env.REACT_APP_API_URL+"/pelicula/";
function Movies() {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(false); // Para controlar el estado de carga
  const [error, setError] = useState(null); // Pa

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inicia el estado de carga
      setError(null); // Resetea el error previo

      try {
        // Realizamos la solicitud GET a la API
        const response = await fetch(apiLink);
        const data = await response.json(); // Convirtiendo la respuesta a JSON
        setPeliculas(data.peliculas);
        console.log(data.peliculas); // Actualiza el estado con los resultados obtenidos
      } catch (error) {
        setError("Error al cargar los héroes");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <header className='header-movies'>

      </header>
            <main className='main-movies'>
        <h1 className='h1-movies'>Select your Movie</h1>
        <section className='grid-movies'>
        {peliculas.map((peliculas) => {
         
            return (
                <a className='' href={`/movies/${peliculas.nombre}`}>
                  <div className='card-movies'>

                {peliculas.nombre}
                <p className='sinopsis-movies'>{peliculas.sinopsis}</p>
                  </div>
              
                </a>
            )
          
          
        })}

        </section>
</main>
    </div>
  )
}
export default Movies;