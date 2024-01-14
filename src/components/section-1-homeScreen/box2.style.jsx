import Box2 from "./Box2";
import styled from "styled-components";

export const StyledBox2=styled(Box2)`
    all: unset;
    width: 100%;
    height: 100%;
    display: grid;
        margin-top:3.5rem;
    grid-template-columns : 50% 50%;
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;

    .first{
        position : relative;
        display: grid;
        place-items : center;
        overflow-x: hidden;
    }
    .second{
        position : relative;
        display: grid;
        place-items: center;
        overflow-x: hidden;

    }
    .container-first {
        min-width:400px;
        position: inherit;
        width : 70%;
        height : 500px;
    }
    .container-second {
        min-width:400px;
        position: inherit;
        width : 70%;
        height : 500px;
    }
@media screen and  ((width>=800px) and (width<950px)){
        height: 85%;

    .container-first{
            min-width :350px;
            height : 400px;
    }
    .container-second{
            min-width :350px;
            height : 400px;

    }
}
@media screen and  (max-width:799px){
    grid-template-columns:100%;
    height:80%;
    .second{
        display: none;
    }
    .first{
        overflow:hidden;
    }
    .container-first{
            min-width :350px;
            width:90%;
            top: 10%;
    }
}
@media screen and (max-width:767px) {
    margin-top:2rem;
}
`