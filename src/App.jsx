import { Container } from "@mui/material";
import NavBar from "./components/navbar/navbar";
import Inicio from "./pages/inicio";
import { Route, Routes } from "react-router-dom";
import Analisis from "./pages/analisis";
import Calendario from "./pages/calendario";
import Habitaciones from "./pages/habitaciones";
import Checks from "./pages/checks";
import AgregarProductos from "./pages/agregarProductos";
import VerProductos from "./pages/verProductos";
import AgregarUsuarios from "./pages/agregarUsuarios";
import VerUsuarios from "./pages/verUsuarios";

function App() {

  const routes = [
    { path: '/inicio', component: <Inicio /> },
    { path: '/analisis', component: <Analisis /> },
    { path: '/calendario', component: <Calendario /> },
    { path: '/habitaciones', component: <Habitaciones /> },
    { path: '/checks', component: <Checks /> },
    { path: '/agregarProductos', component: <AgregarProductos /> },
    { path: '/verProductos', component: <VerProductos /> },
    { path: '/agregarUsuarios', component: <AgregarUsuarios /> },
    { path: '/verUsuarios', component: <VerUsuarios /> },
  ]

  return (
    <>
      <NavBar />
      {/* <Container> */}
        <Routes>
          
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))
          }
          
        </Routes>
      {/* </Container> */}
    </>
    
  );
}

export default App
