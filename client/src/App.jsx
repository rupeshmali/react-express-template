import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PATHS } from "./utils/constants"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/common/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.HOME} element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App