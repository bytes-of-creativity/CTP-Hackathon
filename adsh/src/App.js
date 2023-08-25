import './styles/App.css';
import HomeContainer from './pages/HomeContainer';
import LogInContainer from './pages/LogInContainer';
import { Routes, Route } from "react-router-dom"
import ViewPostContainer from './pages/ViewPostContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewPostContainer/>} />
      <Route path="/login" element={<LogInContainer/>} />
    </Routes>
  )
}

export default App;
