import MenuIcon from "./MenuIcon";
import styled from "styled-components";

export const StyledMenuIcon=styled(MenuIcon)`
        display:none;


        @media screen and (max-width: 767px) {
        width:22px;
        height:22px;
    
        &>div{
            height:100%;
            width:100%;
        }
        &>div>div{
            background-color:red;
            position: absolute;
            top:66px;
            right:0;
            width:50px;
            height:300%;

        }
        span{
            transition: all .2s;
            overflow:hidden;

        }
        span:nth-child(1),span:nth-child(3){
            display: block;
            height:2px;
            margin-top:3px;
            width:100%;
            background-color: black;   

        }

        span:nth-child(2){
            display: block;
            height:2px;
            margin-top:3px;
            width:70%;
            background-color: black;   
            transform: translateX(30%);
        }
        .menu-down>span:nth-child(2){
            display:none;
        }
        .menu-down>span:nth-child(1){
            width:80%;
            transform: translateX(20%) translateY(5px) rotate(45deg) ;


        }
        .menu-down>span:nth-child(3){
            width:80%;
            transform:  translateX(20%) translateY(0px) rotate(-45deg);
        }
        .menu-down{
            width:100%;
            height:100%;
            position: relative;
        }


        display:block;
        transform:translateY(18%);

        
    }
`