import './styles/App.css';
import HomeContainer from './pages/HomeContainer';
import DummyContainer from './pages/DummyContainer';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<DummyContainer />} />
      <Route path="home" element={<HomeContainer />} />
    </Routes>
  )
}

export default App;
