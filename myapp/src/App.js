import '../src/css/style.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Customers from './views/Customers'
import SignUp from './views/SignUp'
import ThankYou from './views/ThankYou'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/thankyou" exact component={ThankYou} />
          <Route path="/" exact component={Customers} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
