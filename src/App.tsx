import { Routes, Route } from "react-router-dom";
import Pregunta from "./pages/Pregunta"; 
import YesPage from "./pages/YesPage";  
import NoPage from "./pages/NoPage";  

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pregunta />} />
      <Route path="/exito" element={<YesPage />} />
      <Route path="/fracaso-garrafal" element={<NoPage />} />
    </Routes>
  );
}

export default App;