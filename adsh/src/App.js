import './styles/App.css';
import HomeContainer from './pages/HomeContainer';
import LogInContainer from './pages/LogInContainer';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer/>} />
      <Route path="/login" element={<LogInContainer/>} />
    </Routes>
  )
}

export default App;
