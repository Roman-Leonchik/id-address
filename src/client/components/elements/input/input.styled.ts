import styled from "styled-components"

export const StyledInput = styled.input`
    height: 58px;
    width: 100%;
    background-color: ${({ theme }) => theme.white};
    border: none;
    padding: 10px 10px 10px 20px;
    color: ${({ theme }) => theme.dark};
    outline: none;
    ::placeholder {
        color: ${({ theme }) => theme.gray};
        transition: 0.3s;
        opacity: 1;
    }
    &:focus {
        ::placeholder {
            color: ${({ theme }) => theme.gray};
            opacity: 0;
            font-size: 0;
        }
    }
`
