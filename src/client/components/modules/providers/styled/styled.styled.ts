import { createGlobalStyle, css } from "styled-components"
import styledNormalize from "styled-normalize"
import "@assets/fonts/styled.css"

const globalStylesCss = css`
    ${styledNormalize};

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 18px;
        line-height: 1.2;
        font-family: "Rubik", sans-serif;
    }
`

export const StyledGlobal = createGlobalStyle`${globalStylesCss};`
