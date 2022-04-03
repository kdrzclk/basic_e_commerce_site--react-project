import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
