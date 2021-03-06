import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        touch-action: manipulation;
    }

    :root {
        --borderColour: #c8c8c8;
        --bgColour: #98989c;
        --opColour: #FBB814;
        --btnColour: rgb(239, 239, 239);
        --maxWidth: 1280px;

    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        @media screen and (max-width: 575.98px){
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
        }
    }

    #calculator {
        display:flex;
        flex-direction: column;
        height: auto;
        border: 1px solid var(--borderColour);
        font-family: 'Noto Sans TC', sans-serif;

        @media screen and (max-width: 575.98px){
            width: 100%;
            height: auto;
        }

        @media screen and (min-width: 576px) {
            width: 400px;
        }
    }
`;
