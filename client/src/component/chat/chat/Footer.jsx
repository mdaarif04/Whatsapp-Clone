import { Box, InputBase, styled } from '@mui/material'

import {EmojiEmotionsOutlined, AttachFile, Mic} from '@mui/icons-material';
import { useEffect } from 'react';
import { uploadFile } from '../../../service/api';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg)
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {

    useEffect(() => {
      const getImage = async() => {
        if (file) {
            const data = new FormData();
            data.append("name",file.name);
            data.append("file",file);

            let res = await uploadFile(data);
            console.log(res);
            setImage(res.data);
        }
      }
      getImage();
    }, [file])
    
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

  return (
    <Container>
        <EmojiEmotionsOutlined/>
        <label htmlFor="fileInput">
        <ClipIcon />
        </label>
        <input 
        type="file" 
        id="fileInput"
        style={{display:"none"}}
        onChange={(e) => onFileChange(e)}
        />
        <Search> 
            <InputField 
            placeholder='Type a Messages'
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => sendText(e)}
            value={value}
            />
        </Search>
        <Mic />
    </Container>
  )
}

export default Footer
