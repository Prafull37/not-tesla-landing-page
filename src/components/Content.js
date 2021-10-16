
import React from 'react'
import styled, { keyframes } from 'styled-components';
// import downArrow from "%PUBLIC_URL%/images/down-arrow.svg"
import Fade from "./Fade";

function Content({car}) {
   
    const {title,
    description,
    image,leftButtonText,rightButtonText} =car;

    return (
        <View bgImage={image}>
            <Fade direction="bottom">
            <ItemWrapper>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemWrapper>
            </Fade>
            <ButtonContainer>
            <Fade direction="bottom">
            <Buttons>
                <LeftButton className={!rightButtonText && "darker-button"}>
                       {leftButtonText}
                </LeftButton>
              { !!rightButtonText&&  <RightButton>
                    {rightButtonText}
                </RightButton>}
            </Buttons>
            </Fade>
                <DownArrow src={process.env.PUBLIC_URL+"/images/down-arrow.svg"} alt="Moving down arrow"/>
            </ButtonContainer>
        </View>
    )
}

export default Content


const View=styled.div`
    ${'' /* width:100vw; */}
    height:100vh;
    background:${props=> `url(${process.env.PUBLIC_URL}/images/${props.bgImage})`};
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    text-align:center;
    position:relative;
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const ItemWrapper= styled.div`
    align-items:center;
    display:inline-block;
    margin-top:13vh;
    font-famnily: "Gotham Book";
    font-color:rgb(57, 60, 65);
`;
const ButtonContainer= styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    bottom:16px;
`;

const Buttons=styled.div``


const LeftButton= styled.button`
    width:256px;
    background-color:rgba(23, 26, 32, 0.5);
    color:white;
    text-align:center;
    font-family:"Gotham SSm";
    font-size:12px;
    border:none;
    border-radius:25px;
    padding:12px 24px;
    margin:8px;
    cursor:pointer;
`
const RightButton=styled(LeftButton)`
    background-color:rgba(255, 255, 255, 0.65);
    color: black;
`
const animatedArrow=keyframes`
  0%,20%,50%,80%,100%{
    transform: translateY(0);
  }
  40%{
    transform: translateY(5px);
  }
  60%{
    transform: translateY(3px);
  }
`
const DownArrow=styled.img`
    margin-top:12px;
    height:40px;
    animation:  ${animatedArrow} infinite 1.5s;
`;