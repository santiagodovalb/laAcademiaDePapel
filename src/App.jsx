import './App.css';
import Navbar from './components/Navbar/Navbar';
import fondo from './assets/Fondo.png'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Videos from './containers/Videos/Videos';
import About from './containers/About/About';
import Entradas from './containers/Entradas/Entradas';
import Bancanos from './containers/Bancanos/Bancanos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <img src={fondo} alt='fondo' className='fondo'/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/videos' component={Videos} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Entradas} />
        <Route path='/bancanos' component={Bancanos} />
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  );
}

export default App;
