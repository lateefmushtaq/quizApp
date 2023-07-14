import { BrowserRouter, Routes,Route } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import NoPage from './pages/NoPage';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>  </Route>
        <Route path="/about" element={<About/>}>  </Route>
        <Route path="/contact" element={<Contact/>}>  </Route>
        <Route path="*" element={<NoPage/>}>  </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
