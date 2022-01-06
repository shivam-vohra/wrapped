import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Wrapped from './components/Wrapped';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/wrapped" element={<Wrapped/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
