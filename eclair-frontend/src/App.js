import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import explore from './components/explore';
import homepage from './components/homepage';
import asset from './components/asset';
import dashboard from './components/dashboard';
import mint from './components/mint';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={homepage} />
      <Route exact path='/explore' component={explore} />
      <Route exact path='/asset/:id' component={asset} />
      <Route exact path='/dashboard' component={dashboard} />
      <Route exact path='/mint' component={mint} />
    </div>
  );
}

export default App;
