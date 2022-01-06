import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Wrapped from './components/Wrapped';
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState(["Home", "Food"]);
  const addCategory = (c) => { 
    setCategories(c)
  }
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard categories={categories} onCategoryAdded={addCategory} />}></Route>
          <Route path="/wrapped" element={<Wrapped/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
