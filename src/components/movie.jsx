import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import '../styles/movie.css'

  const apiLink =process.env.REACT_APP_API_URL+"/pelicula/";


function Movie() {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(false); // Para controlar el estado de carga
    const [error, setError] = useState(null); // Pa
    let {id} = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Inicia el estado de carga
        setError(null); // Resetea el error previo
  
        try {
          // Realizamos la solicitud GET a la API
          const response = await fetch(apiLink + id);
          const data = await response.json(); // Convirtiendo la respuesta a JSON
          setPeliculas(data);
          console.log(data);;
           // Actualiza el estado con los resultados obtenidos
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
        <main className='main-moviecard'>
        <section className='info-moviecard'>
      <div className='information-moviecard-container'>


       <h2 className='title-moviecard'>Título</h2>
       <p className='subtitle-moviecard'>{peliculas.nombre}</p>

       <h2 className='title-moviecard'>Fecha de Estreno</h2>
       <p className='subtitle-moviecard'>{peliculas.fecha_estreno}</p>

       <h2 className='title-moviecard'>Director</h2>
       <p className='subtitle-moviecard'>{peliculas.director_creador}</p>

       <h2 className='title-moviecard'>Sinopsis</h2>
       <p className='subtitle-moviecard'>{peliculas.sinopsis}</p>
       
       <h2 className='title-moviecard'>Duracion</h2>
       <p className='subtitle-moviecard'>{peliculas.duracion} minutos</p>
      </div>
        </section>
    
       <section className='characters-movies'>
         
         <div className='characters-movie-card'>

       <h2 className="title-moviecard">Personajes</h2>
       <div className='container-characters'>
        
            {peliculas.personajes && peliculas.personajes.map((personaje, index) => (
              <div style={{backgroundImage: `url(${personaje.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center"}} key={index} className="character-card">
                <a href={"/characters/"+personaje.nombre}>
                <p className="character-name">{personaje.nombre}</p>
                </a>
                <p className="character-description">Participación: {personaje.descripcion}</p>
              </div>
            ))}
       </div>
            </div>
        </section>
            </main>

          <Outlet/>
      </div>
  )
}
export default Movie