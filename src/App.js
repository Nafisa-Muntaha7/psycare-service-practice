import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Pages/Footer/Footer';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Pages from './components/Pages/Pages/Pages';
import Programs from './components/Pages/Programs/Programs';
import Register from './components/Pages/Register/Register';
import Services from './components/Pages/Services/Services';
import AuthProvider from './context/AuthProvider';

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
              <Services />
            </Route>
            <Route path="/programs">
              <Programs />
            </Route>
            <Route path="/pages">
              <Pages />
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
