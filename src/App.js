import './App.css';
import {Route, Routes, Link, useParams, Outlet} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Characters from './components/characters';
import Movies from './components/movies';
import Teams from './components/teams';
import Heroe from './components/hero-card';
import Movie from './components/movie';

function App() {

  return (
    <div className="App">
      <nav>
        <div className="site-title">ESPP</div>
        <ul>
            <Link className='links-nav'to="/">Home</Link>
            <Link className='links-nav'to="/characters">Characters</Link> 
            <Link className='links-nav'to="/movies">Movies & Series</Link>
            <Link className='links-nav'to="/teams">Teams</Link>
            <Link className='links-nav'to="/about">About</Link>
        </ul>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/characters" element={<Characters/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/teams" element={<Teams/>} />
      <Route path="/characters/:id" element={<Heroe/>} >
        
        </Route>
        <Route path="/movies/:id" element={<Movie/>} >
        
        </Route>


      </Routes>
    </main>

    </div>
  );
}

export default App;
