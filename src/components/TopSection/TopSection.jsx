import React from 'react'
import { styled } from 'styled-components'

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #1756dd32;
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding-top: 13%;
    z-index: 99;
`;

const Logo = styled.h1`
    margin: 0;
    color: #fff;
    font-weight: 800;
    font-size: 80px;
`;

const Slogan = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 10px;
`;

const Paragraph = styled.p`
    margin: 0;
    margin-top: 3em;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    max-width: 30%;
    text-align: center;
`;

const SaveButton = styled.button`
    outlined: none;
    border: none;
    background-color: #27b927;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border-radius: 8px;
    padding: 10px 2em;
    margin-top: 3em;
    cursor: pointer;
    text-transform: uppercase;
    border: 2px solid transparent;
    transition: all 350ms ease-in-out;

    &:hover {
        background-color: transparent;
        border: 2px solid #27b927;
    }
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
        <Logo>Global Warming</Logo>
        <Slogan>Keep it cold for safe living</Slogan>
        <Paragraph>You can save world and us EARTH! Just click on button!</Paragraph>
        <SaveButton>Save the world</SaveButton>
    </TopSectionContainer>
  )
}

export default TopSection