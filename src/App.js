import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
      <Switch>
       <Route exact path = "/" component = {Home}/>
       <Route exact path = "/register" component = {Register}/>
       <Route exact path = "/login" component = {Login}/>
       <Route path = "/dashboard" component={Dashboard}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
