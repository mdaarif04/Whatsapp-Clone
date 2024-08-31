import { Box, Drawer, Typography,styled } from '@mui/material'
import React from 'react'
import { ArrowBack} from '@mui/icons-material'
import Profile from './Profile';

const drawerStyle = {
    left:20,
    top: 16,
    height: '95%',
    width:'30%',
    boxShadow: 'none'
}

const Header = styled(Box)`
  cursor:pointer;
  background: #008069;
  height: 109px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
    
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
    font-size: 17px;
`



const infoDrawer = ({open, setOpen}) =>{

    const handleCLose = () => {
        setOpen(false);
    }

  return (
    <Drawer
      open={open}
      onClose={handleCLose }
      PaperProps={{sx:drawerStyle}}
      style={{zIndex:1500}}
    >
        <Header>
            <ArrowBack onClick={() => setOpen(false)} />
            <Text>Profile</Text>
        </Header>
        <Component>
            <Profile/>
        </Component>
    </Drawer>
  )
}

export default infoDrawer
