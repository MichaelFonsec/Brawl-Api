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
        padding: 20px;
        text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
    }
`;