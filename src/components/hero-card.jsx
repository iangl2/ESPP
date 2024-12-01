import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/hero-card.css';
import { useParams, Outlet } from 'react-router-dom';

const apiLink =process.env.REACT_APP_API_URL+"/heroe/";



const Heroe =  () =>{
    let {id} = useParams();
    const [hero, setHero] = useState([]);
    const [description, setDescription] = useState([]);
 
    useEffect(() => {
        const getHeroe = async () => {
            const res = await fetch(apiLink+id);
            const hero = await res.json()
            console.log(hero) 
           setHero(hero)
           setDescription(hero.descripcion)
           
        }
        getHeroe();
    }, [])

    return(
        <div className='hero-card'>

          <header className='hero-header'>
            <h1 className='hero-name'>{hero.nombre}</h1>

          </header>

       
            <section className='section-image'>
                <img className='hero-image' src={hero.imagen} alt={hero.nombre} />
            </section>

            <section className='description-section'>
                {
                Object.keys(description).map((id) => (
                   <div className='description-container'>

                    <h2 className='description-title'>

                        {id}:
                    </h2>
                     <p className='description-text'>

                         {description[id]}
                     </p> 
                   </div>
                ))
                }
            </section>

            <Outlet />
        
  
        </div>
    );
  }

export default Heroe;