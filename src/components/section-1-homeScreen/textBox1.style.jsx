import styled from "styled-components";
import TextBox1 from "./TextBox1";

export const StyledTextBox1=styled(TextBox1)`

    .styleText{
    all:unset;
    position:absolute;
    top:10rem;
    left:2rem;
    display:block;
    height:15rem;
    width:80%;
    text-align:center;
    font-family:audrey;
    }
    .styleSmile{
      position: absolute;
      top:9rem;
      right:3rem;
    }
    .styleLine{
      position: absolute;
      top:22rem;
      right:6rem;
    }

@media screen and  ((width>=800px) and (width<1200px)){
    .styleSmile{
      position: absolute;
      top:6.5rem;
      right:0.8rem;
    }
    .styleLine{
      position: absolute;
      top:23rem;
      right:4rem;
    }
}
@media screen and  ((width>=1200px)){
    .styleSmile{
      position: absolute;
      top:2%;
      right:0.5%;
    }
    .styleLine{
      position: absolute;
      top:55%;
      right:7%;
    }
        .styleText{

    top:10%;
    left:2rem;
    display:block;
    height:15rem;
    width:80%;
    text-align:center;
    font-family:audrey;
    }
}


`