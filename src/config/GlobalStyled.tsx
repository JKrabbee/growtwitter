import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *, html, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: rgb(51, 51, 51);
        font-family: Karla, Roboto, sans-serif !important;
    }

    a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
}
    
`;

export default GlobalStyled;
