import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { useNavigate } from "react-router-dom";

export default function NavListDrawer() {

    const Navigate = useNavigate();

    const elementosNav = [
        { title: 'Inicio', path: '/inicio', icono: <HomeRoundedIcon /> },
        { title: 'Análisis', path: '/analisis', icono: <BarChartRoundedIcon /> },
        { title: 'Calendario', path: '/calendario', icono: <CalendarMonthRoundedIcon /> },
        { title: 'Habitaciones', path: '/habitaciones', icono: <LocalHotelRoundedIcon /> },
        { title: 'Check-in/Check-out', path: '/checks', icono: <ListAltRoundedIcon /> },
    ]

    const elementosProductos = [
        { title: 'Agregar Producto', path: '/agregarProductos', icono: <ControlPointRoundedIcon /> },
        { title: 'Ver Productos', path: '/verProductos', icono: <VisibilityRoundedIcon /> },
    ]

    const elementosClientes = [
        { title: 'Agregar Usuario', path: '/agregarUsuarios', icono: <ControlPointRoundedIcon /> },
        { title: 'Ver Usuarios', path: '/verUsuarios', icono: <VisibilityRoundedIcon /> },
    ]

    const handleNavigation = (path) => {
        Navigate(path);
    }
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        {elementosNav.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icono}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        {elementosProductos.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icono}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        {elementosClientes.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icono}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </nav>
    </Box>
  );
}
