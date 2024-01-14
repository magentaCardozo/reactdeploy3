import React from 'react'
import Section1 from '../components/section-1-homeScreen/Section1'
import Section2 from '../components/section-2-homeScreen/Section2'
import { StyledSection2 } from '../components/section-2-homeScreen/section2.style'
import { StyledSection1 } from '../components/section-1-homeScreen/section1.style'

const HomeScreen = () => {
  return (
    <div className="home-screen"style={{backgroundColor:'#DADAD6'}}>
        <Section1></Section1>
          <StyledSection2></StyledSection2>
    </div>
  )
}

export default HomeScreen
