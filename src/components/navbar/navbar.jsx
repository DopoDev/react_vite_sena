import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function NavBar() {
    const [open, setOpen] = useState(false);

  return (
    <div>

        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuRoundedIcon />
                </IconButton>
                <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1, paddingLeft: "10px", fontWeight: "bold"}}>
                    Admin Hotel
                </Typography>
                <Box >
                    <IconButton color="inherit">
                        <AccountCircleRoundedIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <NotificationsRoundedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>

        <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
          <NavListDrawer />
        </Drawer>
    </div>
  );
}