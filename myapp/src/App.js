import '../src/css/style.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import Customers from './views/Customers'
import NewCustomer from './views/NewCustomer'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route path="/Customers" exact component={Customers} />
          <Route path="/NewCustomer" exact component={NewCustomer} />
          <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
