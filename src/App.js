import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
    <AmplifySignOut />
    <div className="App py-2">
      <header className="App-header mb-4">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="flex justify-center">
          Edit <code>src/App.js</code> and save to reload.
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default withAuthenticator(App);
