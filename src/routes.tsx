import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/home'
import Perfil from './pages/Perfil/perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

export default Rotas
