import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="invoinces" element={<SobreMim />} />
          <Route path="activity" element={<Post />} />
        </Route>
        
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
