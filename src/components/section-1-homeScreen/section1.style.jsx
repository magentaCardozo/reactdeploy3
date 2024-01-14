import Section1 from "./Section1";
import styled from "styled-components";

export const StyledSection1=styled(Section1)`
    position: relative;
    width: 100%;
    height: 100vh;


.first{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.second{
    position: absolute;
    width: 80%;
    left: 50%;
    top: 70vh;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 25rem 25rem 25rem;
    justify-content: space-between;
    transform: translateX(-50%);
    height: 20rem;
}
`