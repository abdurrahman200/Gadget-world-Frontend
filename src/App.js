import './App.css';
import Body from './Components/Home/Body';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from './Components/Form/SignIn';
import SignUp from './Components/Form/SignUp';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import Order from './Components/CheckOut/Order';
import Deals from './Components/CheckOut/Deals';
import PrivateRoute from './Components/Auth/PrivateRoute.jsx';
import { createContext } from 'react';

import CheckOut from './Components/CheckOut/CheckOut';
import EditProduct from './Components/Admin/EditProduct';
import AdminPanel from './Components/Admin/AdminPanel';
import Auth, { AuthContextProvider } from './Components/Auth/useAuth';

import loader from './Assets/Images/loader.gif';

export const UserContext = createContext();

function App() {
  const auth = Auth();
  // console.log(auth);
  return (
    auth.user === undefined || auth.user ?
      <AuthContextProvider>
        <Router>
          <Switch>

            <Route exact path="/"> <Body /> </Route>
            <Route path="/Home"> <Body /> </Route>
            <PrivateRoute path="/CheckOut/:id"> <CheckOut /> </PrivateRoute>
            <PrivateRoute path="/Order"> <Order /> </PrivateRoute>
            <PrivateRoute path="/Deals"> <Deals /> </PrivateRoute>
            <Route path="/Contact"> <Contact /> </Route>
            <PrivateRoute path="/AdminPanel"> <AdminPanel /> </PrivateRoute>
            <PrivateRoute path="/EditProduct"> <EditProduct /> </PrivateRoute>
            <Route path="/SignIn"> <SignIn /> </Route>
            <Route path="/SignUp"> <SignUp /> </Route>
            <Route path="*"> <NotFound /> </Route>

          </Switch>
        </Router>
      </AuthContextProvider>
      :
      <img src={loader} width="200" alt="loader"/>
      // <h1>Loading . . . . . </h1>
  );
}

export default App;
