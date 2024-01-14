import styled from "styled-components";
import Box1 from "./Box1";

export const StyledBox1=styled(Box1)`
width:100%;
height:40vh;
margin-top:3rem;
position: relative;
display: flex;
position: relative;
align-items:center;
justify-content:center;

margin-top:3.5rem;

.first{
    overflow: hidden;
    background-image: linear-gradient(to left, #F9FF00, #F9FF00, #FFFFFF, #FFFFFF);
    position: relative;
    width:100%;
    height:100%;
    min-width:4rem;
    min-height:4rem;
}
.img-content{
    height:200%;
    position: absolute;
    top:-55%;
    left:-5%;
    aspect-ratio:1/1;
    overflow: hidden;
}
.text{
    position : absolute;
    left : 50%;
    top : 50%;
    transform: translate(-50%, -50%);
        position:Absolute;
    font-family:audrey;
    font-size:2rem;
    font-weight:bolder;
    color:black;
    text-align:center;
}
@media screen and (max-width:767px) {
    margin-top:5rem;
}

`