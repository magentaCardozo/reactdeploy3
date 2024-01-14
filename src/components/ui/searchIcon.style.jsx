import SeachIcon from "./SeachIcon";
import styled from "styled-components";

export const StyledSearchIcon=styled(SeachIcon)`
        display:none;

    @media screen and (max-width: 767px) {
        display:block;
        width:20px;
        color:#333;

        transform:translateY(0%);
        
    }
`