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
import ForgatePassword from './container/forgatePass/ForgatePassword';
import Auth from './container/auth/Auth';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import SigninFormik from './container/signin/SigninFormik';
import Signin from './container/auth/Signin';
import Layout from './Admin/component/layout/Layout';
import Medicine from './Admin/container/Medicine';

function App() {
  return (
    <>
      {/* <Header />
      <Switch>
        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/about"} component={About} />
        <PublicRoute exact path={"/Contact"} component={Contact} />
        <PublicRoute exact path={"/doctors"} component={Doctors} />
        <PublicRoute exact path={"/department"} component={Department} />
        <PublicRoute exact path={"/auth"} restricted={true} component={Signin} />
        <PrivateRoute exact path={"/medicine"} component={Medicine} />
      </Switch>
      <Footer /> */}

      <Switch>
        <Layout>
        <Route exact path={"/Medision"} component={Medicine} />

        </Layout>
      </Switch>
    </>
  );
}

export default App;
