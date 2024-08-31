import { Box, Divider, Typography, styled } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../constant/data'

const Image = styled('img') ({
    width:400,
    marginTop:100
});

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;
const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
    margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;


const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="Image" />
        <Title>Download WhatsApp for Windows</Title>
        <SubTitle>Make calls, share your screen and get a faster experience when you download the Windows app.</SubTitle>
        <SubTitle>Your personal messages are end-to-end encrypted</SubTitle>
        <StyledDivider/>
      </Container>
    </Component>
  )
}

export default EmptyChat
