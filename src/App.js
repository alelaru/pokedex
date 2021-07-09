import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonProfilePage from './pages/profile';


function App() {

  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/profile" component={PokemonProfilePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
