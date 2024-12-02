import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/teams.css'
import { Link } from 'react-router-dom';
const apiLink =process.env.REACT_APP_API_URL+"/equipos/";

function Teams() {
  const [equipos, setEquipos] = useState([]);
  const [loading, setLoading] = useState(false); // Para controlar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inicia el estado de carga
      setError(null); // Resetea el error previo

      try {
        // Realizamos la solicitud GET a la API
        const response = await fetch(apiLink);
        const data = await response.json(); // Convirtiendo la respuesta a JSON
        setEquipos(data.equipos);
        console.log(data.equipos); // Actualiza el estado con los resultados obtenidos
      } catch (error) {
        setError("Error al cargar los equipos");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <main className='main-teams'>
        <h1 className='h1-teams'>The Mightiest Teams on Earth</h1>
        <section className='grid-teams'>
          {equipos.map((equipo) => {
            
            let i=equipo.integrantes.length;
            return(
           
              <div className='card-teams'>
                  <h1 className='name-teams'>
                    {equipo.nombre}
                    </h1>
                <h2 className='title-teams'>Objetivo:</h2>
                  <p className='info-teams'>{equipo.objetivo}</p>
                  <h2 className='title-teams'>Fecha de Creación:</h2>
                  <p className='info-teams'>{equipo.fecha_creacion}</p>
                  <h2 className='title-teams'>Ubicación:</h2>
                  <p className='info-teams'>{equipo.ubicacion}</p>
                  <h2 className='title-teams'>Miembros</h2>
                  <p className='info-teams'>{equipo.integrantes.map((integrante)=>{
                  if (i>1) {
                      i--;                    
                    return(
                    
                        <Link to={`/characters/${integrante}`}>
                    
                        {integrante}, 
                       
                        </Link>
                     )
                    
                  }
                  return(
                    
 
                    <Link to={`/characters/${integrante}`}>
                    
                    {integrante}
                   
                    </Link>
                   )
                 } )}</p>
                
              </div>
           
          )})}
        </section>
      </main>
    </div>
  );
}  export default Teams;