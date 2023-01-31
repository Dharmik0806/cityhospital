import logo from './logo.svg';
import './App.css';
import Header from './componant/header/Header';
import Home from './container/home/Home';
import Footer from './componant/footer/Footer';
import { Route, Switch } from 'react-router-dom';
import About from './container/about/About';
import Department from './container/department/Department';
import Doctors from './container/doctors/Doctors';
import Contact from './container/Contact/Contact';
import Sighup from './container/auth/Sighup';
import Signin from './container/signin/Signin';
import ForgatePassword from './container/forgatePass/ForgatePassword';
import Auth from './container/auth/Auth';
import Medicine from './container/medicine/Medicine';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Switch>
        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/about"} component={About} />
        <PublicRoute exact path={"/Contact"} component={Contact} />
        <PublicRoute exact path={"/doctors"} component={Doctors} />
        <PublicRoute exact path={"/department"} component={Department} />
        <PublicRoute exact path={"/auth"}  restricated={true} component={Auth} />
        <PrivateRoute exact path={"/medicine"}  component={Medicine} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
