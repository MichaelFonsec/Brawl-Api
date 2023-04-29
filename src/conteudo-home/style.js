import styled from "styled-components";
import imgbackground from '../assets/wallpapers/wallpaper.png'

export const Boxprincipal = styled.div`
    height: 100vh;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    text-align: center;

    background: url(${imgbackground});

    button{
        background: transparent;
        border-color: white;
        color: white;
        max-width: 100px;
    }

    #informacao{
        display: none;
    }
`;