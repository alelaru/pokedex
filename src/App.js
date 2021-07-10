import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailsPage from "./pages/profile";
//This ROUTES is used to store all the possible routes in the future
import * as ROUTES from "./constants/routes";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.DASHBOARD} exact component={Dashboard}></Route>
        <Route path={ROUTES.PROFILE} component={DetailsPage}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
