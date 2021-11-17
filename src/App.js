import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import ProtectedRoute from './Routes/ProtectedRoute'
import Main from './main';
import Intermediate from './intermediate';
import { Landing } from './pages/common/';
import { UserContextProvider } from './contexts/user';
import { ApplicationContextProvider } from './contexts/applicationcontext';
function App() {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <ApplicationContextProvider>
        <Switch>
          <ProtectedRoute path='/s' component={Main} exact />
          <Route path='/' component={Landing} exact />
          <Route path='/interm' component={Intermediate} exact />
          <Redirect to="/" />
        </Switch>
        </ApplicationContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
