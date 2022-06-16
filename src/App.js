import LoginOrSignup from "./pages/LoginOrSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" to element={<LoginOrSignup />} />
        <Route path="/signup" to element={<Signup />} />
        <Route path="/login" to element={<Login />} />
        <Route path="/dashboard" to element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
