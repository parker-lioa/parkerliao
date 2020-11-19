import './App.css';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Me from './components/Me';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return(
    <div className="app">
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/"><Me/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/portfolio"><Portfolio/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
