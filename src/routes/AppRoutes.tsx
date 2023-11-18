import { Routes, Route } from "react-router-dom"
import LandingPages from "../pages/LandingPages"
import DetalleTareaPage from "../pages/DetalleTareaPage"


const AppRoutes: React.FC = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<LandingPages/>} />
        <Route path="/detalle/:taskId" element={<DetalleTareaPage/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes