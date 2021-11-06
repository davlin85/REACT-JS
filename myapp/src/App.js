import '../src/css/style.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Customers from './views/Customers'
import SignUp from './views/SignUp'
import ThankYou from './views/ThankYou'
import Navbar from './components/navbar/Navbar'
import CustomersDetails from './views/CustomersDetails'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/customers/customer/:id" exact component={CustomersDetails} />
          <Route path="/thankyou" exact component={ThankYou} />
          <Route path="/" exact component={Customers} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
