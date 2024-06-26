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
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { deepOrange } from '@mui/material/colors';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Card, Button } from 'react-bootstrap';
import { Avatar } from "@files-ui/react";
import { createPortal } from "react-dom";
import UpdatePassword from './UpdatePassword'
import DeleteProfile from './DeleteProfile'
import { useState } from 'react';



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

const imageSrc ='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Avataer image upload

  const [imageSource, setImageSource] = React.useState(imageSrc);
  const handleChangeSource = (selectedFile) => {
    setImageSource(selectedFile);
   };


  // Modal
  const [modalOpen, setModalOpen] = useState(false)     // Update password open modal
  const [modalOpen1, setModalOpen1] = useState(false)   // Delete account open modal



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Dropdown
            style={{
              left: '780px'
            }}
          >
            <Dropdown.Toggle
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
              }}
            >
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                fontSize: '20px'
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

      <div style={{
        textAlign: 'center',
        marginTop: '200px',
        marginBottom: '500px',
        position: 'relative',
        left: '22%',
      }}>
        <Card style={{
          width: '1000px',
          height: '1000px'

        }}>
          <Card.Body>
            <h1>Edit profile settings</h1>
            <br /><br /><br />


            <Form.Label>Update profile photo</Form.Label>
            <Avatar src={imageSource} alt="Avatar"
             onChange={handleChangeSource} 
             style={{
              left:'380px'
             }}
             />


            <br />
            <br />
            <div style={{ textAlign: 'left' }}>


              <Form.Label>Update name</Form.Label>
              <Form.Control type="text"
                style={{ width: '500px' }}
              /><br /><br />

              <Form.Label>Update Email</Form.Label>
              <Form.Control type="email"
                style={{ width: '500px' }}
              /><br /><br />

              <Form.Label>Notifications</Form.Label>
              <Form.Check type="switch" />



            </div>




            <br />
            <br />
            <br />
            <Button
              style={{
                marginRight: '30px',
                width: '150px'
              }}


            >Save Settings</Button>
            
            <Button
             onClick={()=>setModalOpen(true)}
              style={{
                 marginRight: '30px',
                width: '180px'
              }}
              >
              
              
              Update Password
              
              
              
              </Button>

              {modalOpen && <UpdatePassword setOpenModal={setModalOpen} />}

            <Button
             onClick={()=>setModalOpen1(true)}
             style={{
             width: '180px'
           }}
           >
              
              
              
              
              Delete Account
              
              
              
              </Button>

              {modalOpen1 && <DeleteProfile setOpenModal={setModalOpen1} />}
            




          </Card.Body>
        </Card>

      </div>

    </Box>
  );
}
