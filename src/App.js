import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage/Homepage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/register" exact element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
