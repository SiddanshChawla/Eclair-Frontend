import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import explore from './components/explore';
import homepage from './components/homepage';
import transactions from './components/transactions';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={homepage} />
      <Route exact path='/explore' component={explore} />
      <Route exact path='/transactions/:_id' component={transactions} />



    </div>
  );
}

export default App;
