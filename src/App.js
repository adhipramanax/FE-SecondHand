import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={""} />
        <Route path="/my-account" element={""} />
        <Route path="/store" element={""} />
    </Routes>

  );
}

export default App;
