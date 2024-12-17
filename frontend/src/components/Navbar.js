import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import {Link,useLocation} from 'react-router-dom'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useState } from 'react';



export default function Navbar(props) {
    const drawerWidth=props.drawerWidth;
    const content=props.content;
    const location= useLocation();
    const path= location.pathname;
    const [open,setOpen]=useState(false);
    const changeOpenState=()=>{
        setOpen(!open);
    }
    const mydrawer=(
        <Box sx={{ overflow: 'auto' }}>
        <List>
            <ListItem >
              <ListItemButton component={Link} To="" selected={""===path}>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton component={Link} To="" selected={"/about"===path}>
                <ListItemIcon>
                  <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton component={Link} To="" selected={"/create"===path}>
                <ListItemIcon>
                  <NoteAddIcon/>
                </ListItemIcon>
                <ListItemText primary={"Create"} />
              </ListItemButton>
            </ListItem>
        </List>
        
      </Box>
    
    )
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <IconButton 
             onClick={changeOpenState}
             color='inherit'
             sx={{display:{xs:'block',sm:'none'},mr:2}}
              >
                <MenuIcon/>
            </IconButton>
          <Typography variant="h6" noWrap component="div">
            Django React Application
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display:{xs:'none',sm:'block'},
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {mydrawer}
      </Drawer>

      <Drawer
        open={open}
        variant="temporary"
        onClose={changeOpenState}
        sx={{
          width: drawerWidth,
          display:{xs:'block',sm:'none'},
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {mydrawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div>
            {content}
        </div>
      </Box>
    </Box>
  );
}