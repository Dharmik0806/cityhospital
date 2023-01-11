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

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}

      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/Contact"} component={Contact} />
        <Route exact path={"/doctors"} component={Doctors} />
        <Route exact path={"/department"} component={Department} />
        {/* <Route exact path={"/department"} component={Department} /> */}
        {/* <Route exact path={"/signin"} component={Signin} /> */}
        {/* <Route exact path={"/forgatePass"} component={ForgatePassword} /> */}
        <Route exact path={"/auth"} component={Auth} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
