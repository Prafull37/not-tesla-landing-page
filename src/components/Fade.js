import React from 'react'
import styled,{keyframes} from 'styled-components'

const animations={
    bottom:keyframes`
    0%{
        transform:translateY(40px);
        opacity:0;
    }
    35%{
        transform:translateY(25px);
        opacity:0.4;
    }
    70%{
        transform:translateY(10px);
        opacity:0.7;
    }
    100%{
        transform:translateY(0px);
        opacity:1;
    }
`


}

function Fade({children,direction="bottom"}) {
    return (
        <FadeContainer direction={direction}>
            {children}   
        </FadeContainer>
    )
}


const FadeContainer=styled.div`
    position:relative;
    animation: ${(props)=>animations[props.direction]};
    animation-duration:1s;
`


export default Fade;
