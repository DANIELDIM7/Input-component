import React from 'react'
import { styled } from 'styled-components'
import { BiSolidPhone } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";

const InputDesign = styled.input`
width: ${(props) => {
    if (props.fullWidth === true) {
      return '100%'
    } else {
      return '200px'
    }
  }};
height: ${(props) => {
    if (props.size === 'sm') {
      return '40px'
    } else {
      return '56px'
    }
  }};
outline: none;
background-color: ${(props) => {
    if (props.disabled === true) {
      return 'rgba(224, 224, 224, 1)'
    } else {
      return 'none'
    }
  }};
border: 1px  ${(props) => {
    if (props.error === true) {
      return 'solid rgba(211, 47, 47, 1)'
    } else if (props.disabled === true) {
      return 'none'

    }
    else {
      return 'solid rgba(130, 130, 130, 1)'
    }
  }} ;
border-radius: 8px;
&:hover{
 border: 1px ${(props) => {
    if (props.disabled === true) {
      return 'none'
    } else {
      return 'solid rgba(51, 51, 51, 1)'
    }
  }}
 
};
&:focus{
  
  border: 1px  ${(props) => {
    if (props.error) {
      return 'solid rgba(211, 47, 47, 1)'
    } else if (props.disabled === true) {
      return 'none'
    }
    else {
      return ' solid rgba(41, 98, 255, 1)'
    }
  }} ;
  
};
font-size: 14px;   
font-weight:500;
color: ${(props) => {
    if (props.value === true) {
      return 'rgba(51, 51, 51, 1)'
    } else if (props.value === false) {
      return 'rgba(130, 130, 130, 1)'
    }
  }};
display: block;
place-content: center;
padding-left: 5px;
position:relative;


`

const DivInput = styled.div`
width: ${(props) => {
    if (props.fullWidth === true) {
      return '100%'
    } else {
      return '206px'
    }
  }};
height: '77px'
;

position:relative

`

const LabelInput = styled.label`
font-size: 12px;
font-weight: 400;
color: ${(props) => {
    if (props.error === true) {
      return 'rgba(211, 47, 47, 1)'
    } else {
      return 'rgba(51, 51, 51, 1)'
    }
  }}  ;
  &:hover{
 border-color: gray;
};

`

const SpanInput = styled.span`
font-size: 10px;
font-weight: 400;
color: ${(props) => {
    if (props.error === true) {
      return 'rgba(211, 47, 47, 1)'
    } else {
      return 'rgba(130, 130, 130, 1)'
    }
  }} 

`

/* INPUT ICONO */

const InputIconContainer = styled.div`
width: 200px;
height: 101px;

`
const SecondariContainer = styled.div`
width: 100%;
height: ${(props) => {
    if (props.size === 'sm') {
      return '40px'
    } else {
      return '56px'
    }
  }};
border: 1px solid rgba(130, 130, 130, 1);
border-radius: 8px;
display: flex;
flex-direction: ${(props) => {
    if (props.endIcon === true) {
      return 'row-reverse'
    } else {
      return 'row'
    }
  }};
align-items: center;

`

const InpuTIcon = styled.input`
outline: none;
border: none;
font-size: 14px; 
color:rgba(130, 130, 130, 1);

`
/* TextArea */
const InputTextArea = styled.textarea`
width: '200px';
outline: none;
background-color: ${(props) => {
    if (props.disabled === true) {
      return 'rgba(224, 224, 224, 1)'
    } else {
      return 'none'
    }
  }};
border: 1px  ${(props) => {
    if (props.error === true) {
      return 'solid rgba(211, 47, 47, 1)'
    } else if (props.disabled === true) {
      return 'none'

    }
    else {
      return 'solid rgba(130, 130, 130, 1)'
    }
  }} ;
border-radius: 8px;
&:hover{
 border: 1px ${(props) => {
    if (props.disabled === true) {
      return 'none'
    } else {
      return 'solid rgba(51, 51, 51, 1)'
    }
  }}
 
};
&:focus{
  
  border: 1px  ${(props) => {
    if (props.error) {
      return 'solid rgba(211, 47, 47, 1)'
    } else if (props.disabled === true) {
      return 'none'
    }
    else {
      return ' solid rgba(41, 98, 255, 1)'
    }
  }} ;
  
};
font-size: 14px;   
font-weight:500;
color: ${(props) => {
    if (props.value === true) {
      return 'rgba(51, 51, 51, 1)'
    } else if (props.value === false) {
      return 'rgba(130, 130, 130, 1)'
    }
  }};
display: block;
place-content: center;
padding-left: 5px;
position:relative;

`





const Input = (props) => {
  if (props.startIcon === true || props.endIcon) {
    return <InputIconContainer>
      <LabelInput error={props.error}>{props.label}</LabelInput>
      <SecondariContainer startIcon={props.startIcon} endIcon={props.endIcon} size={props.size}>
        {props.startIcon ? <BiSolidPhone style={{ fontSize: '18px', padding: '5px', color: 'rgba(130, 130, 130, 1)' }} /> : <AiFillLock style={{ fontSize: '18px', padding: '5px', color: 'rgba(130, 130, 130, 1)' }} />}

        <InpuTIcon placeholder={props.placeHolder}></InpuTIcon>

      </SecondariContainer>
      <SpanInput>{props.helperText}</SpanInput>
    </InputIconContainer>
  } else if (props.multiLine === true) {
    return <InputIconContainer><LabelInput error={props.error}>{props.label}</LabelInput><InputTextArea rows={props.row} placeholder={props.placeHolder}></InputTextArea></InputIconContainer>
  } else {
    return <DivInput fullWidth={props.fullWidth} multiline={props.multiline} row={props.row}>
      <LabelInput error={props.error}>{props.label}</LabelInput>
      <InputDesign placeholder={props.placeHolder} error={props.error} disabled={props.disabled} value={props.value} size={props.size} fullWidth={props.fullWidth} maxLength='500'  ></InputDesign>
      <SpanInput error={props.error}>{props.helperText}</SpanInput>
    </DivInput >
  }






}

export default Input

