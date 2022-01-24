import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header';
import Navbar from './Navbar';
import Home from './Home';
import {useState, useEffect} from 'react';
import MovieSummary from './MovieSummary';
import AddMovieForm from './AddMovieForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import About from '../navigation/About';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';




function App() {

const [movies, setMovies] = useState([])

const history = useHistory()

useEffect(() => {
  fetch('http://localhost:3001/movies')
  .then(res => res.json())
  .then(data => setMovies(data))
}, [])







function addMovie(newMovie) {
  fetch('http://localhost:3001/movies', {
    method: 'POST', 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMovie) 
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setMovies([...movies, data])
    history.push('/')
  })
  
}





  return (
    <div className="App">
      <Router>
        <Navbar />
      
        <Switch>
          <Route exact path="/">
           <Header welcomeMessage="Free Movies"
        clickToEnter="Click To Enter!" />
        </Route>
        <Route exact path="/about">
          <About AboutMessage="I have created this website simply because of my love for movies! People have the 
          right to rent and post as much movies as they want. Each rental will cost you........ $0!! FREE! FREE! FREE! "/>

        </Route>
          <Route exact path="/home">
            <Home movies={movies} title={movies.title}/>
          </Route>
          <Route exact path = "/movies/new">
            <AddMovieForm addMovie={addMovie}/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );;
}

export default App;
