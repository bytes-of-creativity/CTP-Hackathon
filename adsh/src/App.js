import './styles/App.css';
import HomeContainer from './pages/HomeContainer';
import LogInContainer from './pages/LogInContainer';
import ViewPostContainer from './pages/ViewPostContainer';
import { Routes, Route } from "react-router-dom"
//import AddUser from './data/AddUser'; error in here when exported

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer/>} />
      <Route path="/login" element={<LogInContainer/>} />
      <Route path="/ViewPost" element={<ViewPostContainer/>} />
    </Routes>
  )
}

export default App;
