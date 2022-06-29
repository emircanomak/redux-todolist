import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DeleteContext } from './context/ContextProvider';
import Alert from 'react-bootstrap/Alert'

const Navbar = () => {

const {dlttask,setDlettask} = useContext(DeleteContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"#232f3e"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}style={{textAlign:'center'}}>
            Redux Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {
           dlttask ? <Alert variant="danger" onClose={() => setDlettask(false)} dismissible>
           <Alert.Heading>Your task remove Succesfully</Alert.Heading>

         </Alert> : "" 
    }
    </>
  )
}

export default Navbar