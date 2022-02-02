/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mediaQuery } from "../utils/mediaQuery";

export const mainWrap = css`
    font-family: Montserrat;
    text-align: center;
    width: 100vw;
    overflow-x: hidden;
`

export const productLandingWrap = css`
    width: 100vw;
    padding-top: 110px;
    @media (min-width: ${mediaQuery}) {
        width: auto;
        height: 30vh;
        padding-top: 225px;
        padding-bottom: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`
export const imgSliderWrap = css`
    overflow: hidden;
    width: 100vw;
    box-sizing: border-box;
    position: relative;
    @media (min-width: ${mediaQuery}) {
        width: 450px;
    }
`

export const buttonWrap = css`
    width: 50px;
    margin: auto;
    z-index: 1;
`

export const sliderLink = css`
    display: inline-flex;
    width: 16px;
    height: 16px;
    background: #2b6e6c;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    font-weight: 600;
    margin: 3px;
`

export const imgShowWrap = css`
    display: flex;
    overflow-x: auto;
    position: relative;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;  
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
    }
`

export const bowlImg = css`
    position: relative;
    margin: auto;
    scroll-snap-align: start;
    flex-shrink: 0;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    height: 325px;
    width: 100vw;
    @media (min-width: ${mediaQuery}) {
        height: 350px;
        width: 450px;
        margin: 0;
        padding: 0;
        margin-top: 50px;
    }
`

export const packetImg = css`
    position: relative;
    margin: auto;
    scroll-snap-align: start;
    flex-shrink: 0;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    height: 450px;
    width: 100vw;
    @media (min-width: ${mediaQuery}) {
        height: 450px;
        width: 450px;
        margin: 0;
        padding: 0;
    }
`

export const mainInfoWrap = css`
    text-align: left;
    padding-left: 20px;
    margin-top: 50px;
    margin-bottom: 40px;
    @media (min-width: ${mediaQuery}) {
        height: 170px;
        width: 340px;
        margin: 0; 
        padding: 0;
    }
`

export const productTitle = css`
    font-size: max(18px, 1.3vw);
    font-weight: 800;
    margin-bottom: 4px;
`

export const subheading = css`
    font-size: 14px;
    font-weight: 600;
`

export const testimonials = css`
    font-size: 12px;
    display: inline-block;
    transform: translateY(7.5px);
    font-weight: 600;
    text-decoration: underline;
    color: #f58f83;
    cursor: pointer;
`

export const inputQuantity = css`
    text-align: center;
    width: 150px;
    margin-top: 20px;
    margin-right: 15px;
`

export const addCartButton = css`
    background-color: #c3dedd;
    border: none;
    font-weight: 600;
    font-size: 11px;
    height: 30px;
    width: 160px;
    box-shadow: 3px 3px #2b6e6c;
    cursor: pointer;
    position: absolute;
    top: 17.5px;
    &:hover {
        background-color: #2b6e6c;
        color: white;
    }
`