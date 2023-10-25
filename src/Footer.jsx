import React, { Component } from 'react'
import styled from 'styled-components'
import ApplyNowForm from './common/applyNowSection'
const WrapperFooter = styled.div`
   position: fixed;
   width: 100vw;
   padding: 2rem;
   bottom: 0;
   min-height: 60px;            /* Footer height */
   background-color: #ddd;
   transition: all 0.4s ease-in-out;
   opacity: 0; 
   justify-content: space-evenly;
   align-items: center;
   flex-direction: row;
   transform: translateY(100%); 
   &.enabled {
       transform: translateY(0);
        opacity: 1;
    }
   `


const Footer = ({visible,children}) =>{
    return(
        <WrapperFooter className={visible ? 'enabled' :''}>
            {children}
        </WrapperFooter>
    )
} 

export default Footer