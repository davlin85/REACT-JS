import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Products from './views/Products'
import Home from './views/Home'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route path="/products" exact component={Products} />
          <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
