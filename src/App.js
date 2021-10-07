import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Info from './components/Info';
import Login from './components/Login';
import Validate from './components/Validate';
import Codigo from './components/Codigo';
import SendCode from './components/Send_Code';
import ResendCode from './components/Resend_Code';
import AceptTerms from './components/Acept_Terms';
import SendData from './components/Send_Data';
import TermsConditions from './components/Terms_conditions';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/validate">
            <Validate/>
          </Route>
          <Route path="/codigo">
            <Codigo/>
          </Route>
          <Route path="/resend-code">
            <ResendCode/>
          </Route>
          <Route path="/send-code">
            <SendCode/>
          </Route>
          <Route path="/acept-terms">
            <AceptTerms/>
          </Route>
          <Route path="/send-data">
            <SendData/>
          </Route>
          <Route path="/terms-conditions">
            <TermsConditions/>
          </Route>
          <Route path="/">
            <Info/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
