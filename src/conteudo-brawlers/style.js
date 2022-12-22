import styled from "styled-components";
import imgbackground from '../assets/wallpapers/original-image-2361-scaled.jpeg';

export const BoxBrawl = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;

    background: url(${imgbackground});

    #box{
        padding: 20px;
        text-align: center;
        background-color: white;
    }
`;