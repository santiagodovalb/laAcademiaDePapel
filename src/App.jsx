import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Videos from './containers/Videos/Videos';
import Nosotres from './containers/Nosotres/Nosotres';
import Entradas from './containers/Entradas/Entradas';
import Bancanos from './containers/Bancanos/Bancanos';
import Footer from './components/Footer/Footer';
import Admin from './containers/Admin/Admin';
import NuevaEntrada from './containers/NuevaEntrada/NuevaEntrada'
import Contacto from './containers/Contacto/Contacto';
import { useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from './state/user';
import Entrada from './containers/Entrada/Entrada';
import EditEntrada from './containers/Entrada/EditEntrada';
require('dotenv').config()


function App() {

  const auth = getAuth();
  const dispatch = useDispatch()

  auth.onAuthStateChanged(user => {
    if (user) dispatch(setUser({email: user.email}))
    
  })

  return (
    <div className="App">
      <Navbar />
      
      <Footer />
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/nosotres' component={Nosotres} />
        <Route path='/aportes' component={Bancanos} />
        <Route path='/compras' component={Entradas} />
        <Route exact path='/newsletter' component={Entradas} />
        <Route path='/newsletter/:id' component={Entrada} />
        <Route path='/edit/:id' component={EditEntrada} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/admin' component={Admin} />
        <Route path='/nuevaentrada' component={NuevaEntrada} />
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  );
}

export default App;
