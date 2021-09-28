import './App.css';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import Main from './main';
import {Landing} from './pages/common/';
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/s' component={Main}/>
        <Route path='/' component={Landing}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
