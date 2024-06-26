import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
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
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Dropdown from 'react-bootstrap/Dropdown';


const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));


export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
        <Dropdown
        style={{
          left:'780px'
        }}
        >
      <Dropdown.Toggle
      style={{
        background:'transparent',
       border:'none',
       fontSize:'24px',
      }}
      >
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu
      style={{
        fontSize:'20px'
      }}
      >
        <Dropdown.Item href="/editprofile">Edit Account</Dropdown.Item>
        <Dropdown.Item href="/">Help & support</Dropdown.Item>
        <Dropdown.Item href="/">FAQ</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
        </Toolbar>
      </AppBar>



      <Card
        style={{
          textAlign: 'center',
          top: '150px',
          marginBottom: '800px',
          width: '500px',
          height: '300px',
          left:'600px'


        }}>
        <Col>
          <Image src="https://secure.gravatar.com/avatar/f9842c686f30133d0e61bc2f8c1facdc?s=256&d=mm&r=pg" roundedCircle
            style={{ width: '100px' }}
          />
        </Col>
        <Card.Body>
          <Card.Title>Profile name</Card.Title>
          <Card.Text>
            Profile info
          </Card.Text>
        </Card.Body>
      </Card>



    </Box>
  );
}
