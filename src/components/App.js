import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header welcomeMessage="Free Movies"
        clickToEnter="Choose A Movie To Continue" />
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );;
}

export default App;
