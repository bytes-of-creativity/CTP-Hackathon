import './styles/App.css';
import Home from './pages/Home';
import Dummy from './pages/Dummy';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route path="home" element={<Home />} />
    </Routes>
  )
}

export default App;
