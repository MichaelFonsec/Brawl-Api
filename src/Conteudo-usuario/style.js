import styled from "styled-components";
import imgbackground from '../assets/wallpapers/wallpapersden.com_brawl-stars-2022_1920x1080.jpg';

export const BoxBrawl = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;

    background: url(${imgbackground});

    #box{
        border: 2px solid black;
        border-radius: 10px;
        padding: 20px;
        backdrop-filter: blur(5px);

        display: flex;
        flex-direction: column;
        
        color: white;
        text-align: center;

        button{
            padding: 6px 0;
            background-color: white;
            border: none;
        }

        button:hover{
            background-color: hsl(0, 0%, 95%);
        }
    }

    input[type="text"]{
        margin: 10px 0;
        outline: none;
        box-sizing: border-box;
        padding: 4px;
    }
`;