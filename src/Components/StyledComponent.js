import styled from "styled-components";
import {
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    letterSpacing,
    position,
    shadow,
    space,
    system,
    typography,
} from 'styled-system';

export const FlexDiv = styled.div`
    display: flex;
    ${flexbox}
    ${layout}
    ${typography}
    ${letterSpacing}
    ${space}
    ${color}
    ${position}
    ${background}
    ${border}
    ${shadow}
`;

export const Box = styled.div`
    ${flexbox}
    ${layout}
    ${typography}
    ${letterSpacing}
    ${space}
    ${color}
    ${position}
    ${background}
    ${border}
    ${shadow}
`;

export const Typography = styled.p`
${color}
`;