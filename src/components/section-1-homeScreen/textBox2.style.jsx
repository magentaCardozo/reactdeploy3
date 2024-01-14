import styled from "styled-components";
import TextBox2 from "./TextBox2";

export const StyledTextBox2 = styled(TextBox2)`
    all: unset;
    position:absolute;
    top:-7%;
    left:5%;
    display:block;
    border-top-right-radius:45%;
    border-bottom-left-radius:45%;
    height:70%;
    width:100%;
    background-color:rgba(0,0,0,0.1);
    font-family:audrey;

h2{
    margin-left:10%;
    margin-top:10%;
    font-size:5rem;
    text-align:left;
    letter-spacing:1px;
    font-weight:100;
}
h2 span{
    color:purple;
}
h3{
    margin-top:5%;
    margin-left:20%;
    width:70%;
    font-size:30px;
    text-align:justify;
    letter-spacing:1px;
    font-weight:500
}
@media screen and  ((width>=500px) and (width<950px)){
    h3{
    text-align:left;
    font-size:25px;

    }
}

@media screen and  ((width>=950px) and (width<1375px)){
    h3{
    text-align:left;
    font-size:28px;
    }
}
@media screen and  ((width>=800px) and (width<950px)){
    h2{
        font-size:3rem;
    }
}
@media screen and  (max-width:799px){
    left:0%;
        top:-13%;

    h2{
    font-size:4rem;

    }
}

`