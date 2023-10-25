import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const WrapperForSpans = styled.div`
  .animated-span{
  display: inline-block;
  text-align: center;
  line-height: 50px;
  margin: 5px;
  &.animate{
  animation: fadeIn 0.5s ease-in-out;
  animation-fill-mode: both;
  }
}
    @keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

`


const SecondSection = (props) =>{
    const {visible} = props
    const [animate, setAnimation] = useState(false)
    const [secondVisble, setSecondVisible] = React.useState(false)
    useEffect(()=>{
        const container2 = document.getElementById('secondBanner')
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                   setSecondVisible(true);
                }
            });
        },[])
        if(container2){
            observer.observe(container2)
        }
        const animatedSpans = document.querySelectorAll('.animated-span');
        animatedSpans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.2}s`;});
    },[])
    useEffect(()=>{
        if(secondVisble && !animate)
            setAnimation(true)
    }, [secondVisble])

    return(
        <WrapperForSpans id="secondBanner" className={animate ? 'animate': ''}>
            <span className={classNames("animated-span text-5xl w-full text-center", {'animate': animate})}>Earn 1% assured cashback on your spends. Get 5X</span>
            <span className={classNames("animated-span text-5xl w-full text-center", {'animate': animate})}>more value than cashback at the Uni Store. Enjoy</span>
            <span className={classNames("animated-span text-5xl w-full text-center", {'animate': animate})}>round the clock Whatsapp support. And it's</span>
            <span className={classNames("animated-span text-5xl w-full text-center", {'animate': animate})}>lifetime free; no joining fee, no annual charges.</span>
        </WrapperForSpans>
    )
}

export default SecondSection