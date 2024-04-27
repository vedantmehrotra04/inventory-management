import React, {useState} from 'react';
import {Switch} from '@mui/material';
import styled from "styled-components";
import { FlexDiv, Typography } from './StyledComponent';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const {isAdmin} = useSelector(state => state);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const dispatch = useDispatch()

    return (<Heading>
    <FlexDiv justifyContent={'center'} alignItems={'center'} mr={'80px'}>
    <Typography color='white'>admin</Typography>
    <StyledSwitch {...label}  checked={!isAdmin} onClick={() => dispatch({type : 'CHANGE_USER'})}/>
    <Typography color='white'>user</Typography>
    </FlexDiv>
    </Heading>)
}

export default Header;

const Heading = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

const StyledSwitch = styled(Switch)`
&& {
    .MuiSwitch-thumb {
      color: ${({checked}) => checked ? '#d5d53a' : 'white'}; // Thumb color for both states
    }

    .MuiSwitch-track {
      background-color: ${({ checked }) => (checked ? '#b1b152' : '#ffffffa3')} !important;
      opacity: 1 !important; /* Ensure the track is fully visible */
    }
  }
`

// const StyledSwitch = (props) => (
//     <Switch
//       sx={{
//         '& .MuiSwitch-thumb': {
//           color: 'white', // Thumb color for both states
//         },
//       }}

//       style={{
//         '& .Mui-checked .MuiSwitch-track': {
//           backgroundColor: 'white', // Track color for checked state
//         },
//       }}
//       {...props}
//     />
//   );