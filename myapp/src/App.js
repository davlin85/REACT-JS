import '../src/css/style.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Customers from './views/Customers'
import Home from './views/Home'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route path="/Customers" exact component={Customers} />
          <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
