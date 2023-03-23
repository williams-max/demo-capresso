
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import ListSubheader from '@mui/material/ListSubheader';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Paleta from '../common/Paleta';
import InventarioCierre from '../../../app/modules/inventario-cierre/InventarioCierre';
import Solicitudes from '../../../app/modules/solicitudes/Solicitudes';
import RevisionPedido from '../../../app/modules/revision-pedido/RevisionPedido';


const drawerWidth = 240;


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  // backgroundColor:'black',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#383737',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: '#383737',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    //  backgroundColor:'red',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      //  backgroundColor:'green'
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      // backgroundColor:'green'
    }),
  }),
);

const items = [
    {
      title: "VENTAS",
      items: [{
        title: "SUCURSALES",
        items: [{
          title: "sucursal pando"},
        { title: "surcusal salmanca" },
        { title: "Sucursal América Oeste" },
        { title: "Sucursal Hupermall" },
        { title: "Sucursal Lincoln" }
      ]
      }]
    },
    {
      title: "PEDIDIOS",
      items: [{ title: "Pedidos extraordinarios" }, 
              { title: "Cronograma Entrega" },
              { title: "Permisos email"}, 
              { title: "PLANTA",
                items: [{
                  title: "Pedidos consolidados"},
                { title: "despacho"}]},
                { title: "SUCURSAL DE PRUEBA",
                items: [{
                  title: "Inventario de Cierre"},
                { title: "Solicitudes"}]}
            ]
    },
    {
      title: "REPORTES",
      items: [{
        title: "SUCURSALES",
        items: [{
          title: "sucursal pando"},
        { title: "surcusal salmanca" },
        { title: "Sucursal América Oeste" },
        { title: "Sucursal Hupermall" },
        { title: "Sucursal Lincoln" }
      ]
      }]
    },
    {
      title: "RECETAS",
      items: [{ title: "subitem" }, { title: "subitem" }]
    },
    {
      title: "CONFIGURACIONES",
      items: [{ title: "subitem" }, { title: "subitem" }]
    },
    {
      title: "CLIENTES",
      items: [{ title: "subitem" }, { title: "subitem" }]
    },
    {
      title: "SEGURIDAD",
      items: [{ title: "subitem" }, { title: "subitem" }]
    },
    {
      title: "USUARIOS",
      items: [{ title: "subitem" }, { title: "subitem" }]
    },
    {
      title: "PERFILES",
      items: [{ title: "subitem" }, { title: "subitem" }]
    }
  ];

export default function MiniDrawer({ children }: any) {

  const [openOne, setOpenOne] = React.useState(true);

  const [windowStatus, setWindowStatus] = React.useState({
    solicitudesStatus: true,
  })

  const handleClick = () => {
    setOpenOne(!openOne);
  };


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

function SidebarItem({ item }: any) {

    const [collapsed, setCollapsed] = React.useState(true);
    const { title, items } = item;

    function toggleCollapse() {
      setCollapsed(prevValue => !prevValue);
    }

    function onClick() {

      console.log("items ", title)
      if (Array.isArray(items)) {
        toggleCollapse();
      }
    }

    let expandIcon;
    if (Array.isArray(items) && items.length) {
      expandIcon = !collapsed ? <ExpandLess /> : <ExpandMore />;
    }

    return (
      <>
        <ListItem onClick={onClick} button dense>
          <div style={{color:'white'}}>{title}</div>
          {expandIcon}
        </ListItem>
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {Array.isArray(items) ? (
            <List disablePadding dense>
              {items.map((subItem, index) => (
                <SidebarItem key={`${subItem.id}${index}`} item={subItem} />
              ))}
            </List>
          ) : null}
        </Collapse>
      </>
    );
  }

function Sidebar({ items }: any) {
    return (
      <>
        <List disablePadding dense>
          {items.map((sidebarItem: any, index: any) => (
            <SidebarItem
              key={`${sidebarItem.title}${index}`}
              item={sidebarItem}
              
            />
          ))}
        </List>
      </>
    );
  }

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            GLOBAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ backgroundColor: 'red' }}>
        <DrawerHeader sx={{ backgroundColor: '#383737' }}>
          <div style={{ width: '60%', margin: 'auto',marginTop:'20px', marginBottom: '8px' }}>
            <img style={{ width: '100%' }} src="https://sistemageneral.azurewebsites.net/assets/dist/img/logo.png" />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: 'white' }} /> : <ChevronLeftIcon sx={{ color: 'red' }} />}
          </IconButton>
        </DrawerHeader>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#383737' }}>
          <AccountCircleRoundedIcon />
          <h1 style={{ fontSize: '13px', margin: '0px', padding: '0px', color: 'white' }}>ADOLFO MONDOCORRE</h1>
        </div>
        {/*<Divider />*/}
        <List sx={{ backgroundColor: '#383737', height:'100vh' }}>
            
          <Sidebar items={items}/>
        </List>
       
        <Divider />



      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <DrawerHeader />
        {/*windowStatus.solicitudesStatus ?
          <><Solicitudes/></> : <>
            <InventarioCierre />
          </>
        */}
        {children}
      </Box>
    </Box>
  );
}
//<Solicitudes/>
//<RevisionPedido/