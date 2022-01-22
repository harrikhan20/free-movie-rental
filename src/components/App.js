import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header';
import Navbar from './Navbar';
import Home from './Home';
import movies from '../containers/movies';
import {useState, useEffect} from 'react';
import MovieSummary from './MovieSummary';




function App() {

const [movies, setMovies] = useState([])

useEffect(() => {
  fetch('http://localhost:3001/movies')
  .then(res => res.json())
  .then(data => setMovies(data))
}, [])




  return (
    <div className="App">
      <Router>
        <Navbar />
       
        <Switch>
          <Route exact path="/">
           <Header welcomeMessage="Free Movies"
        clickToEnter="Click To Enter!" />
        </Route>
          <Route exact path="/home">
            <Home movies={movies} title={movies.title}/>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );;
}

export default App;
