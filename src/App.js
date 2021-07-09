import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonProfilePage from './pages/profile';
import * as ROUTES from "./constants/routes"

function App() {

  return (
    
    <Router>
      <Switch>
        <Route path={ROUTES.DASHBOARD} exact component={Dashboard}></Route>
        <Route path={ROUTES.PROFILE} component={PokemonProfilePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
