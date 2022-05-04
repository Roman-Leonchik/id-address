import styled from "styled-components"
import { media } from "@src/client/components/lib/styled-components/variables"
import { InfoBlock } from "@elements/info/info-block.element"

export const StyledHeader = styled.header`
    height: 280px;
    padding: 30px;
    background-image: url(${require("@assets/img/pattern-bg.png")});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 2;
    ${media.tablet`
        height: 300px;
        padding: 25px;
    `}
`

export const StyledTitle = styled.h1`
    margin: 0 0 28px;
    padding: 0;
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.white};
    ${media.tablet`
        font-size: 24px;
    `}
`

export const StyledForm = styled.form`
    position: relative;
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
    display: block;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
`

export const StyledSubmit = styled.input`
    width: 55px;
    background-color: ${({ theme }) => theme.gray};
    border: none;
    background-image: url(${require("@assets/svg/icon-arrow.svg")});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    font-size: 0;
    position: relative;
    &:hover {
        background-color: ${({ theme }) => theme.dark};
    }
    ${media.tablet`
        width: 70px;
    `}
`
export const StyledInfoBlock = styled(InfoBlock)`
    position: absolute;
    bottom: -80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    ${media.tablet`
        bottom: -160px;
    `}
`
