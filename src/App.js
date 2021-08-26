import logo from './logo.svg';
import './App.css';
import {AppLayout} from './components/AppLayout'
import {LandingPage} from './components/LandingPage'
import {ProtectedRoute} from './components/ProtectedRoute'

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Protected React Router</h1>
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <ProtectedRoute exact path="/app" component={AppLayout}/>
      </Switch>
    </div>
  );
}
export default App;
