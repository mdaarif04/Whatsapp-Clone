import React, { useState } from 'react'
import { useContext } from 'react'

import { AccountContext } from '../../../context/AccountProvider'
import { Box, styled } from '@mui/material';
import {Chat as MessageIcon, Update} from '@mui/icons-material';
import HeaderManu from './HeaderManu';
import InfoDrawer from '../../drawer/infoDrawer';

const Component = styled(Box)`
height:44px;
background: #ededed;
padding: 8px 8px;
display:flex;
align-items:center;
`;

const Wrapper = styled(Box)`
margin-left:auto;
& > *{
    margin-left:2px;
    padding:8px;
    color:#000
};
& :first-child{
    font-size:27px;
    margin-right:8px;
    margin-top:3px;
    cursor:pointer;
}
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius:'50%',
})

const Header = () =>{
    
    const [openDrawer, setOpenDrawer] = useState(false);
    const {account} = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

  return (
    <>
    <Component>
        <Image src={account.picture} alt="Not found"  onClick={() => toggleDrawer()}/>
        <Wrapper>
            <Update/>
            <MessageIcon/>
            <HeaderManu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  )
}

export default Header
