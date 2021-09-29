import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import ProtectedRoute from './Routes/ProtectedRoute'
import Main from './main';
import Intermediate from './intermediate';
import { Landing } from './pages/common/';
import { UserContextProvider } from './contexts/user';
function App() {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Switch>
          <ProtectedRoute path='/s' component={Main} exact />
          <Route path='/' component={Landing} exact />
          <Route path='/interm' component={Intermediate} exact />
          <Redirect to="/" />
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
