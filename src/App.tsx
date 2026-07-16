import Home from "./pages/Home"
import { Routes , Route } from "react-router-dom";
import Vision from "./pages/Vision";
import Dashboard from "./pages/Dashboad";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/vision" element={<Vision/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </>
  )
}

export default App
