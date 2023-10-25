import classNames from "classnames";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #000;
    padding:12px;
    font-size: 1.2rem;
    border-radius: 10px;
    width: max-content;
    *:focus {
    outline: none;
    }
    input{
        color: #fff;
        min-width: 13vw;
        :focus{
            outline: none;
            border: none;
        }
        border: none;
        padding: 0.5rem;
        background-color: black;
        ::placeholder{
            color:#888;
        }
    }
    button{
        border-radius: 10px;
        padding: 0.5rem;
        background-color: #fff061;
        color: black;
        cursor: pointer;
        &.disabled
        {background-color: #b9ad46;
        cursor: not-allowed}
    }
`
const CheckBoxWrapper= styled.div`
    
`


const ApplyNowForm = ({phone,setPhone,fullScreen, accept, changeAccept}) => {
  return (
    <div className={classNames({"flex justify-between items-center" : fullScreen})}>
    <Wrapper>
      <input placeholder="Enter Phone Number"  onChange={e=>setPhone(e.target.value)} value={phone}/>
      <button className={classNames({disabled : !accept })}>Apply Now</button>
    </Wrapper>
    <CheckBoxWrapper className={classNames({"w-1/2": fullScreen}, {"w-3/4":!fullScreen})}>
    <input className="text-lg mt-2" type="checkbox" checked={accept} onChange={(e)=>changeAccept(!accept)}></input>
    <span className={classNames("text-left text-xs ml-2",{'text-white': !fullScreen})}>You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</span>
    </CheckBoxWrapper>
    </div>
  );
}   

export default ApplyNowForm