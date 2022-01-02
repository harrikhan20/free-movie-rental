import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header';
import Navbar from './Navbar';
import Home from './Home';
import movies from '../containers/movies';
import {useState, useEffect} from 'react';

useEffect(() => {
  fetchData()
}, [input])


function App() {
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
            <Home movies={movies}/>
            

          </Route>
        </Switch>
      </Router>
    </div>
  );;
}
console.log(movies);
export default App;
