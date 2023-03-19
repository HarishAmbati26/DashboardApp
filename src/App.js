import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Advanced from './components/advanced/advanced';
import Beginner from './components/beginner/beginner';
import Home from './components/home/home';
import Intermediate from './components/intermediate/intermediate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="beginner" element={<Beginner />} />
          <Route path="intermediate" element={<Intermediate />} />
          <Route path="advanced" element={<Advanced />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
