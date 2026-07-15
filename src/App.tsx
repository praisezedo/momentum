import Home from "./pages/Home"
import { Routes , Route } from "react-router-dom";
import Vision from "./pages/Vision";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/vision" element={<Vision/>}/>
        </Routes>
    </>
  )
}

export default App
