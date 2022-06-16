import LoginOrSignup from "./pages/LoginOrSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import UploadNotes from "./pages/UploadNotes";
import UploadCircular from "./pages/UploadCircular";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" to element={<LoginOrSignup />} />
        <Route path="/signup" to element={<Signup />} />
        <Route path="/login" to element={<Login />} />
        <Route path="/dashboard" to element={<Dashboard />} />
        <Route path="/forgotpassword" to element={<ForgotPassword />} />
        <Route path="/uploadnotes" to element={<UploadNotes />} />
        <Route path="/uploadcircular" to element={<UploadCircular />} />
      </Routes>
    </Router>
  );
}

export default App;
