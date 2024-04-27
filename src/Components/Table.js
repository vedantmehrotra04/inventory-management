import React, { useEffect }from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Actions from './Actions'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from './common';

const TableComponent = () => {
  const {list, isAdmin} = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(()=> {
    if(list.length === 0){
      dispatch(getData());
    }
  },[list])


    return (<TableContainer component={Paper} sx={{borderRadius: '10px', margin: '10px', width: 'inherit'}}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{'&:nth-last-of-type(1)': {paddingRight: '20px'}}}>
              <TableCell>
                  <Card>
                      <HeadingText>Name</HeadingText>
                  </Card>
              </TableCell>
              <TableCell align="right">
              <Card>
                      <HeadingText>Category</HeadingText>
                  </Card>
              </TableCell>
              <TableCell align="right">
              <Card>
                      <HeadingText>Price</HeadingText>
                  </Card>
              </TableCell>
              <TableCell align="right">
              <Card>
                      <HeadingText>Quantity</HeadingText>
                  </Card>
              </TableCell>
              <TableCell align="right">
              <Card>
                      <HeadingText>Value</HeadingText>
                  </Card>
              </TableCell>
              <TableCell align="right">
              <Card>
                      <HeadingText>ACTION</HeadingText>
                  </Card>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item, index) => {
              if(!isAdmin && item?.isDisabled){
                return null
              }
              return (
                <TableRow
              key={`${index}-item`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, opacity: item?.isDisabled && 0.9, backgroundColor: item?.isDisabled && 'white'}}

            >
              <TableCell component="th" scope="row">
                {item?.name}
              </TableCell>
              <TableCell align="right">{item?.category}</TableCell>
              <TableCell align="right">{item?.price}</TableCell>
              <TableCell align="right">{item?.quantity}</TableCell>
              <TableCell align="right">{item?.value}</TableCell>
              <TableCell align="right">
                  <Actions item={item} isDisabled={!isAdmin}/>
              </TableCell>
            </TableRow>
              )
            })}
        </TableBody>
          </Table>
          </TableContainer>)
}


export default TableComponent;

const Card = styled.div`
background-color: black;
border-radius: 12px;
padding: 2px 8px;
display: inline-flex;
`

const HeadingText = styled.p`
display: contents;
color: #b1b152;
`