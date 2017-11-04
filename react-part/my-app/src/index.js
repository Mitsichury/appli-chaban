import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Homepage from './pages/homepage';
import SinglePage from './pages/singlepage';
import ErrorPage from './pages/errorpage';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router, Route,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/:id" exact component={SinglePage} />
          <Route path="/error/:code" component={ErrorPage} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
