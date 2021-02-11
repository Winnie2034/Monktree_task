import './App.css';
import LLeft from "./Components/Login Page/Left/Left";
import LRight from './Components/Login Page/Right/Right';
import SLeft from './Components/Signup Page/Left/Left';
import SRight from './Components/Signup Page/Right/Right';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/signin'>
            <LLeft />
            <LRight />
          </Route>
          <Route path='/'>
            <SLeft />
            <SRight />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
