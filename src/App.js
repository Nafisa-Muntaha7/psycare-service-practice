import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Pages/Footer/Footer';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import PrivateRoute from './components/Pages/PrivateRoute/PrivateRoute';
import Programs from './components/Pages/Programs/Programs';
import Register from './components/Pages/Register/Register';
import ServicesRoute from './components/Pages/ServicesRoute/ServicesRoute';
import AuthProvider from './context/AuthProvider';
import About from './components/Pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <ServicesRoute />
            </Route>
            <Route path="/programs">
              <Programs />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
