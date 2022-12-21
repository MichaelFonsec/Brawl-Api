import styled from "styled-components";
import imgbackground from '../assets/wallpaper.png'

export const BoxBrawl = styled.div`
    height: 100vh;
    color: white;
    background-color: blue;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;

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