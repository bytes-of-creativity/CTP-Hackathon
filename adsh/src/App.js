import './styles/App.css';
import HomeContainer from './pages/HomeContainer';
import LogInContainer from './pages/LogInContainer';
import ProfilePageContainer from './pages/ProfilePageContainer';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePageContainer/>} />
      <Route path="/login" element={<LogInContainer/>} />
    </Routes>
  )
}

export default App;
