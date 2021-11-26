
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Service from './Pages/Service/Service';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Pages/context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivetRout from './Pages/Login/Login/PriverRoute/PrivetRout';
import ServiceDetails from './Pages/Service/ServiceDetails/ServiceDetails';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <PrivetRout path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivetRout>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivetRout path="/appointment">
              <Appointment></Appointment>
            </PrivetRout>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
