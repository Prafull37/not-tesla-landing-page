import {useRef,useEffect,useState,useImperativeHandle,forwardRef} from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

 function Dialog({children},ref) {
    const [isOpen,setOpen]=useState(false);
    const [display,setDisplay]=useState(false);
    const portalRef=useRef(null)

    if(portalRef.current===null){
        portalRef.current=document.createElement('div');
    }

    //eslint-disable-next-line
    const updateModal=()=>setOpen((state)=>!state)
    /**
     *  useImperativeHandle is used to share updateModal as component instance.User can access using ref.current property
     */
    useImperativeHandle(ref,()=>({
        updateModal:updateModal
    }),[updateModal])

    
    const hasChildren=!!children

    useEffect(()=>{
        setDisplay(hasChildren);
    },[hasChildren])


    useEffect(()=>{
        const portal = portalRef.current;
        Object.assign(portal.style,{
            display:"none",
            position:"fixed",
            top:0,
            right:0,
            width:"100%",
            zIndex:10
        })
        document.body.appendChild(portal)
        return ()=> document.body.removeChild(portalRef.current)
    },[])

   


    useEffect(()=>{
        if(display){
            portalRef.current.style.display="block";
        }else{
           const timeout=setTimeout(()=>{
                portalRef.current.style.display="none";
            },350)
            return ()=>clearTimeout(timeout)
        }
    },[display])

    if(portalRef.current){

        return createPortal(isOpen?<>
        <Backdrop onClick={updateModal} isOpen>
                <SideBar>
                    <Section>
                        <CrossButton onClickCapture={updateModal}>
                            <div>
                                <CloseIcon fontSize="small"/>
                            </div>
                        </CrossButton>
                        {children}
                    </Section>
                </SideBar>
                </Backdrop>
                </>
            :null,
            portalRef.current
        );
    }
    return null;
}


export default forwardRef(Dialog);


const Backdrop=styled.div`
    background-color:rgba(0,0,0,0.3);
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    transition:background-color .5s ease,
    backdrop-filter .5s ease,
    -webkit-backdrop-filter .5s ease;
    backdrop-filter:blur(4px);
   
`


const SideBar=styled.div`
    display:${(props)=>props.isOpen?"none":"block"};;
    background-color:white;
    width:90%;
    height:100vh;
    position:absolute;
    transform:${(props)=>props.isOpen?"translateX(100%)":"translateX(0%)"};
    transition: all 1.5s ease;
    top:0;
    right:0;
    z-index:16;
    @media (min-width:768px){
        width:25%;
    }
`

const Section=styled.section`
    display:flex;
    flex-direction:column;
    padding:24px;
`
const CrossButton=styled.button`
    align-self:flex-end;
    padding:8px;
    display:flex;
    text-align:center;
    border:none;
    margin-bottom:8px;
    border-radius:100%;
    cursor:pointer;
    background:transparent;
    transition:background-color 1s ease;
    
    div{
        background:transparent;
        border:none;
    }
    &:hover{
        backdrop-filter:blur(15px);
        background-color:rgba(0,0,0,0.05);
        opacity:1;
    }
    &:focus{
        backdrop-filter:blur(15px);
        background-color:rgba(0,0,0,0.05);
        opacity:1;
    }
`



