import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
        
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #363636 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
      
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;

        :hover {
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
    
    .hECjAS {
        background: #d20000 !important;
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        width: 100%;
        border: 1px solid #edf3f5;
        border-radius: 4px;
        padding: 13px 0;
        cursor: pointer;
        margin-top: 0.625rem;
        max-width: 180px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
    }


    .eBTCOv {
        font-size: 1.2rem;
        color: #363636;
        margin: 0.5rem 2rem;
    }
    .XyMUA:hover, .XyMUA:active, .XyMUA:focus {
        color: #d20000 !important;
        text-underline-position: under;
        -webkit-text-decoration: #d20000   underline;
        text-decoration: #d20000   underline;
    }
    .jNtMOK {
        background: #d20000;
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        width: 100%;
        border: 1px solid #edf3f5;
        border-radius: 4px;
        padding: 13px 0;
        cursor: pointer;
        margin-top: 0.625rem;
        max-width: 180px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
    }
    .jNtMOK:hover, .jNtMOK:active, .jNtMOK:focus {
        color: #fff;
        border: 1px solid #d20000 !important;;
        background-color: #d20000 !important;;
    }
    .sc-iktFfs, .lfpUAv{

        font-size:1.4rem


    }
  

    
`;
