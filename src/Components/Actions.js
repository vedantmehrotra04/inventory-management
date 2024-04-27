import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';


const Actions = ({item, isDisabled}) => {
    const dispatch = useDispatch();

    return (<>
    <StyledVisibilityIcon sx={{fontSize: 20, marginRight: '2px'}} isDisabled={isDisabled} onClick={() => !isDisabled && dispatch({type: 'DISABLE', payload: item})}/>
    <StyledEditIcon sx={{fontSize: 20, marginRight: '2px', }} onClick={() => !isDisabled && dispatch({type: 'SHOW_MODAL', payload: item})} isDisabled={isDisabled}/>
    <StyledDeleteIcon sx={{fontSize: 20}} isDisabled={isDisabled} onClick={() => 
       !isDisabled && dispatch({type: 'DELETE', payload: item})
    }/>
    </>)
}

export default Actions;

const StyledVisibilityIcon = styled(VisibilityIcon)`
cursor: pointer;
fill: pink !important;
${({isDisabled}) => isDisabled && `
cursor: not-allowed !important;
fill: gray !important;
`}
`

const StyledEditIcon = styled(EditIcon)`
cursor: pointer;
fill: green !important;
${({isDisabled}) => isDisabled && `
cursor: not-allowed;
fill: gray !important;
`}
`

const StyledDeleteIcon = styled(DeleteIcon)`
cursor: pointer;
fill: red !important;
${({isDisabled}) => isDisabled && `
cursor: not-allowed;
fill: gray !important;
`}
`