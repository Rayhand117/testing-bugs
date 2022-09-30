import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"

function App() {
  return (
    <div className="App">
    <h1>Testing example</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
