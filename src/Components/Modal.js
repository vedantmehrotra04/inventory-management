import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import {FlexDiv} from './StyledComponent'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#1d1d1d',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white'
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const {isVisible, props} = useSelector(state => state.Modal);
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
      if(Object.keys(props).length > 0){
          let obj = {}
          Object.keys(props).forEach(key => 
            {
                if(key !== 'name'){
                    obj[key] = props[key]
                }
            }
            )
            setValues(obj)
      }
  },[props])

  return (
    <div>
      { isVisible && <Modal
        open={isVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h4>Edit Product</h4>
            <h6>{props?.name}</h6>
            <StyledFlex flexDirection={'row'} flexWrap={'wrap'}>
            { Object.keys(props).map(key => (key !== 'name' && <StyledBox>
           <StyledText>{key}</StyledText>
           <StyledInput
           type='text'
           onChange={(e) => {setValues({
               ...values,
               [key]: e.target.value
           })}}
           value={values[key]}
           />
           </StyledBox>))}
           </StyledFlex>
           <FlexDiv justifyContent={'flex-end'}>
           <Button sx={{color: '#d5d53a'}} onClick={() => dispatch({type: 'CLOSE_MODAL'})}>Cancel</Button>
           <Button sx={{backgroundColor: '#605d5d', color: '#d5d53a',  marginRight: '10px', marginLeft: '8px'}} onClick={() => dispatch({type: 'CLOSE_MODAL', payload: {...values, name: props.name}})}>Save</Button>
           </FlexDiv>
        </Box>
      </Modal>}
      </div>
  );
}

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #605d5d
`
const StyledText = styled.p`

`

const StyledBox = styled.div`
flex-basis: 45%;
box-sizing: border-box;
flex-grow: 1;
`

const StyledFlex = styled(FlexDiv)`
gap: 10px;
`