import React from 'react';
import styled from "styled-components";
import { Box, FlexDiv } from './StyledComponent';
import { Typography } from './StyledComponent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import { useSelector } from 'react-redux';

const Card = () => {

    const {metric} = useSelector(state => state);

    return (<FlexDiv flexDirection={'column'}>
    <Heading marginLeft={'30px'}>
        Inventory stats
    </Heading>
    <Row flexDirection={'row'} gap={'20px'} justifyContent={'center'}>
    <CardComponent>
        <ShoppingCartIcon sx={{ fill: 'white', fontSize: 40}}/>
        <FlexDiv flexDirection={'column'} ml={'16px'}>
        <Typography color={'white'}>
            Total product
        </Typography>
        <Heading>{metric?.totalProducts}</Heading>
        </FlexDiv>
    </CardComponent>
    <CardComponent>
        <CurrencyExchangeIcon sx={{ fill: 'white', fontSize: 40}}/>
        <FlexDiv flexDirection={'column'} ml={'16px'}>
        <Typography color={'white'}>
            Total store value
        </Typography>
        <Heading>{metric?.totalStoreValue}</Heading>
        </FlexDiv>
    </CardComponent>
    <CardComponent>
        <RemoveShoppingCartIcon sx={{ fill: 'white', fontSize: 40}}/>
        <FlexDiv flexDirection={'column'} ml={'16px'}>
        <Typography color={'white'}>
            Out of stock
        </Typography>
        <Heading>{metric?.outOfStock}</Heading>
        </FlexDiv>
    </CardComponent>
    <CardComponent>
        <CategoryIcon sx={{ fill: 'white', fontSize: 40}}/>
        <FlexDiv flexDirection={'column'} ml={'16px'}>
        <Typography color={'white'}>
            No of category
        </Typography>
        <Heading>{metric?.category}</Heading>
        </FlexDiv>
    </CardComponent>
    </Row>
    </FlexDiv>)
}

export default Card;

const Heading = styled.h2`
color: white;
${({marginLeft}) => marginLeft && `
margin-left: ${marginLeft}`}
`;

const CardComponent = styled(Box)`
flex: 1;
max-width: calc(25% - 20px);
background-color: #546941;
display: flex;
flex-direction: row;
border-radius: 6px;
box-sizing: border-box;
padding: 14px;
`;

const Row = styled(FlexDiv)`
gap: 20px
`