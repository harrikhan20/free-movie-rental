import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header welcomeMessage="Free Movies"
        clickToEnter="Click To Continue" />
        <Switch>
          <Route path="/">
            <Home />

          </Route>
        </Switch>
      </Router>
    </div>
  );;
}

export default App;
