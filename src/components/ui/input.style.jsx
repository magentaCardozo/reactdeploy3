import Input from "./Input";
import styled from "styled-components";

export const StyledInput=styled(Input)`
    width:80%;
    min-width:25rem;
    @media screen and (max-width: 767px){
        display:none;
        
    }
`