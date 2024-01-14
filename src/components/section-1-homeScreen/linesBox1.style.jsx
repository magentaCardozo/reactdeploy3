import styled from "styled-components";
import LinesBox1 from "./LinesBox1";

export const StyledLinesBox1= styled(LinesBox1)`

position: absolute;
left:0rem;
top:0rem;
width:100%;
height:100%;

    .image1{
        position: absolute;
        left :19.5rem;
        top :8rem;
    }
    .image2{
        position: absolute;
        left :-1.6rem;
        top :16.2rem;
    }
    .image3{
        position: absolute;
        left :13rem;
        top :24rem;
    }

@media screen and  ((width>=350px) and (width<500px)){
left:-5.5rem;
top:-12.8rem;
width:100%;
height:100%;
}
@media screen and  ((width>=500px) and (width<=800px)){
left:-6rem;
top:-8.8rem;
width:100%;
height:100%;

}
@media screen and  ((width>=800px) and (width<1200px)){
left:-5.5rem;
top:-9.8rem;
width:100%;
height:100%;
}
@media screen and  (width>=1200px){
left:-3rem;
top:-9.0rem;
width:100%;
height:100%;
}
`