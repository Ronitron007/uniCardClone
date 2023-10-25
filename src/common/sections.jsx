import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled('div',{ shouldForwardProp: (props) => props !== 'backgroundColor'})`
    height: 100vh;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
 
`


const Section = (props) =>{
    const {children, className, id, backgroundcolor} = props
    return(
        <Wrapper className={className} id={id} backgroundColor={backgroundcolor}>
        {children}
        </Wrapper>
    )
}

export default Section