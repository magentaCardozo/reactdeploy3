import Box1 from "./Box1";
import styled from "styled-components";

export const StyledBox1=styled(Box1)`
width: 100%;
height: 100%;
    margin-top:3.5rem;
    display: grid;
grid-template-columns: 32% 34% 34%;

.styleImg2{
    position:absolute;
    top:3.8rem;
    left:8rem;
    display:block;
    }


.first{
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;

}
.second{
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;
    display: grid;
    place-items: center;
    overflow-x: hidden;

}
.second-container{
    word-wrap:break-word;
}
.third{
    all:unset;
    position: relative;
    
}

@media screen and  ((width<500px)){
grid-template-columns:100%;
height: 90%;


    .first{
        display: none;
}
.second{
        display: none;
        visibility:hidden;
}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:350px;
    position:inherit;
    top:12%;


}


}
@media screen and  ((width>=500px) and (width<800px)){
grid-template-columns:100%;
height: 90%;

    .first{
        display: none;
}
.second{
        display: none;
        visibility:hidden;
}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:500px;
    position:inherit;

}

}
@media screen and  ((width>=800px) and (width<1200px)){
grid-template-columns:50% 50%;
height: 100%;

    .first{
        display: none;
}
.second{

}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:500px;
    position:inherit;

}

}
@media screen and  ((width>=1200px)){
grid-template-columns:32% 34% 34%;

    .first{
        display: flex;
        justify-content: center;
        align-items: center;
}
.first-container{
    position : inherit;
        width:400px;
        max-width:500px;
        height:500px;
        max-height: 600px;
}
.second{

}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.second-container{
    height:500px;
    max-height:600px;
    width:100%;
    min-width:300px;
    position:inherit;
    word-wrap:break-word;

}
.third-container{
    height:500px;
    max-height:600px;
    width:400px;
    max-width:500px;
    position:inherit;

}

}
@media screen and (max-width:767px) {
    margin-top:5rem;
}

`