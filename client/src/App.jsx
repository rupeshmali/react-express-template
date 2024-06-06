import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PATHS } from "./utils/constants"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/common/Navbar"
import { AuthProvider } from "./contexts/auth"
import AuthLayout from "./components/auth/AuthLayout"
import Layout from "./components/protected/Layout"
import Landing from "./pages/Landing"

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex flex-col">
          <Navbar />
          <Routes>
            <Route path={PATHS.LANDING} element={<Landing />} />
            <Route path={PATHS.HOME} element={<Layout />} >
              <Route index element={<Home />} />
            </Route>
            <Route path={PATHS.REGISTER} element={<AuthLayout />}>
              <Route path={PATHS.LOGIN} element={<Login />} />
              <Route index element={<Register />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App