import Box1Image1 from "./Box1Image1";
import styled from "styled-components";

export const  StyledBox1Image1=styled(Box1Image1)`
    all:unset;
    position:absolute;
    top:0rem; 
    left:0rem;width :100%;
    width : 100%;
    height : 100%;
    

.img{
    position:absolute;
    top:5rem; 
    left:4.5rem;
    display:block;

}

@media screen and  ((width>=350px) and (width<500px)){
    .img{
    position:absolute;
    top:-8rem; 
    left:-1rem;
    display:block;

}
}
@media screen and  ((width>=500px) and (width<=800px)){
.img{
    position:absolute;
    top:-4rem; 
    left:-1.5rem;
    display:block;

}

}
@media screen and  ((width>=800px) and (width<1200px)){
    .img{
    position:absolute;
    top:-5rem; 
    left:-1rem;
    display:block;

}

}
@media screen and  (width>=1200px){
    .img{
    position:absolute;
    top:-4rem; 
    left:1.5rem;
    display:block;

}

}

`
// For Box 3
export const  StyledBox1Image13=styled(Box1Image1)`
.img{
    position:absolute;
    top:5rem;
    left:3.7rem;
    display:block;
}
    

`