import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Profile from "../views/Profile";
import { NotFound } from "../views/NotFound";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }