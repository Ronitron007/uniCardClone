import React from 'react';
import Section from './common/sections';
import { useEffect } from 'react';
import Footer from './Footer';
import ApplyNowForm from './common/applyNowSection';
import CardImg from './assets/nx_wave_hero.png'
import OnePercentImg from './assets/one_percent_cashback.png'
import SecondSection from './secondSection';
import { createPortal } from 'react-dom';
import styled from 'styled-components'
 
const InvisibleWrapper = styled.div`
    display: none;
`
const StyledDiv = styled.div`
   ::-webkit-scrollbar {
    display: none;
}    
`

function Home() {
    const [showFooter, setShowFooter] = React.useState(false);
    const [firstRender, setFirstRender] = React.useState(false)
    const [secondVisble, setSecondVisible] = React.useState(false)
    const [phone, setPhone] = React.useState()
    const [accept, changeAccept] = React.useState()
    
    useEffect(()=>{
    const container = document.getElementById('topBanner');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Check if the container is in the viewport.
            if (entry.isIntersecting) {
               setShowFooter(false);
            } else {
                setShowFooter(true);
            }
        });
        setFirstRender(true)
    },[])
    if(container){
        observer.observe(container);
    }
});
// Start observing the container.

    return (
        <>
        <StyledDiv className='font-sans'>
        <Section id="topBanner" backgroundcolor="#222" className="flex">
            <div className='w-1/3'>
            <h1 className='text-5xl text-white text-left'><b>NX Wave</b> The next-gen credit card for those who love rewards.</h1>
            <p className='text-white text-left my-4' >1% Cashback5x RewardsZero Forex Markup</p>
            <div id='portal-position1'/>
            </div>
            <img style={{maxWidth:"30%"}} src={CardImg}></img>
            </Section>
        <Section ><SecondSection visible={secondVisble}/></Section>
        <Section>
            <span className='text-6xl w-1/4'>1% assured cashback on your spends.The more you spend, the more you earn.</span>
            <img src={OnePercentImg} style={{maxWidth:"30%"}}/>
        </Section>
        <Section>
            <img src={OnePercentImg} style={{maxWidth:"30%"}}/>
            <span className='text-6xl w-1/4'>1% assured cashback on your spends.The more you spend, the more you earn.</span>
        </Section> 
        <Section>
            <span className='text-6xl w-1/4'>1% assured cashback on your spends.The more you spend, the more you earn.</span>
            <img src={OnePercentImg} style={{maxWidth:"30%"}}/>
        </Section>
        <Footer className="flex" visible={showFooter}>
        <div id='portal-position2'/>
       </Footer> 

        </StyledDiv>
        <InvisibleWrapper>
        {firstRender ? createPortal(<ApplyNowForm fullScreen={showFooter} accept={accept} changeAccept={changeAccept} phone={phone} setPhone={setPhone}/>, !showFooter ? document.getElementById('portal-position1'): document.getElementById('portal-position2') ): null}
        </InvisibleWrapper>
            </>
    );
}

export default Home;
