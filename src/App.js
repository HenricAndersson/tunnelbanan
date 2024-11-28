import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
  );
}

export default App;
