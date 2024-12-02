
import { Link } from 'react-router-dom';
import '../styles/characters.css'
import React, { useState, useEffect } from 'react'

const apiLink =process.env.REACT_APP_API_URL+"/heroe/";


function Characters() {
  const [results, setResults] = useState([]); // Para almacenar los resultados de la API
  const [loading, setLoading] = useState(false); // Para controlar el estado de carga
  const [error, setError] = useState(null); // Pa
    const [searchTerm, setSearchTerm] = useState('')
    const [isMenuVisible, setMenuVisible] = useState(false); 

  


    const handleSearch = (event) => {
      const newSearchTerm = event.target.value; // Obtén el nuevo valor
      setSearchTerm(newSearchTerm); // Actualiza el estado
      console.log("Valor actual del input:", newSearchTerm); // Muestra el valor inmediatamente
    };
  
    useEffect(() => {
      console.log("Estado actualizado:", searchTerm); // Muestra el estado actualizado cada vez que cambia
    }, [searchTerm]);
   
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Inicia el estado de carga
        setError(null); // Resetea el error previo
  
        try {
          // Realizamos la solicitud GET a la API
          const response = await fetch(apiLink);
          const data = await response.json(); // Convirtiendo la respuesta a JSON
          setResults(data);
          console.log(data.heroes); // Actualiza el estado con los resultados obtenidos
        } catch (error) {
          setError("Error al cargar los héroes");
          console.log(error)
        } finally {
          setLoading(false); // Finaliza el estado de carga
        }
      };
  
      fetchData();
    }, []); 

    const handleFocus = () => {
      setMenuVisible(true); // Mostrar el menú al enfocar el campo
    };
  
    const handleBlur = () => {
      setTimeout(() => setMenuVisible(false), 200); // Ocultar el menú al perder el foco (pequeño retraso para evitar conflictos con clics en el menú)
    };
    return (
      <div className="characters-container">
        <div className="search-section">
          <h1 className='search-title'>Search for your Favorite SuperHero</h1>
          <input
          type="text"
          placeholder="Search heroes..."
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="search-input"
        />

      

{/* Estado de error */}
{error && <p>{error}</p>}

         
        {isMenuVisible && (
        <div className="menu">
          <ul className='menu-list'>
         
         {results.heroes.map((hero) => {
          if (hero.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
            return (
              <Link className='link-hero' to={`/characters/${hero.nombre}`}>
               
              <li key={hero.id}>
                {hero.nombre}
              </li>
                
              </Link>
            )
          }
          return null
        })}
         
          </ul>
        </div>
      )}
        </div>
      </div>
    )
  }
  
export default Characters