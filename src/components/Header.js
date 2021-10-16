import {useRef} from 'react'
import styled from 'styled-components';
import Dialog from './Dialog';


const MenuArray=["Modal S","Modal 3","Modal X","Modal Y","Solar Roof","Solar Panels"];




export default function Header({navMenu}) {
    const ModalRef=useRef(null);
    return (
        <Head>
            <H1>
                <a href="/" >
                <img src={process.env.PUBLIC_URL+"/images/logo.svg"} alt="Tesla"/> 
                </a>
            </H1>
            <NavMenu>
                <NavigationLinks>
                   {MenuArray.map((name)=><SingleNavigation fontWeight="bold" name={name.toUpperCase()} key={name}/>)}
                </NavigationLinks>
            </NavMenu>
            <RightNav>
                <SingleNavigation name="Shop"/>
                <SingleNavigation name="Tesla Account"/>
                <Menu  onClick={()=>ModalRef.current.updateModal()}>
                    <div className="menu-button">
                        Menu
                    </div>
                </Menu>
                <Dialog ref={ModalRef}>
                    <SingleNavigation name="Existing Inventoy"/>
                    <SingleNavigation name="Used Inventory"/>
                    <SingleNavigation name="Trade In "/>
                    <SingleNavigation name="Test Drive "/>
                    <SingleNavigation name=" Cybertruck"/>
                    <SingleNavigation name="Roadster "/>
                    <SingleNavigation name="Semi"/>
                    <SingleNavigation name="Charging"/>
                    <SingleNavigation name="Firewall"/>
                    <SingleNavigation name="Commercial Energy"/>
                    <SingleNavigation name="Utilities"/>

                    <SingleNavigation name=" Find Us"/>

                    <SingleNavigation name=" Support"/>

                    <SingleNavigation name="Inverstor Relations"/>
                    <SingleNavigation name={
                        <section>
                            <span>
                                United States
                            </span> 
                            <span>
                                English
                            </span>
                        </section>
                    }/>
                </Dialog>
            </RightNav>
        </Head>
    )
}

const SingleNavigation=({name,fontWeight="normal"})=>( <NavLink>
            <Button fontWeight={fontWeight} className="navLinks" >{name}</Button>
</NavLink>)


const Head=styled.header`
    position:fixed;
    top:0;
    left:0;
    right:0;
    padding:4px 20px;
    display:flex;
    align-items:center;
    z-index:5;
`

const H1=styled.h1`
    min-height:54px;
    display:flex;
    justify-content:center;
    min-width:18%;
`
const NavMenu=styled.nav`
    display:flex;
    justify-content:space-around;
    flex-grow :1;
`
const NavigationLinks=styled.div`
    justify-content:center;
    align-items:center;
    display:none;
    .navLinks{
        cursor:pointer;
        
    }

    @media (min-width:1128px){
       display:flex;
    }
     
`
const NavLink=styled.div`
    padding:12px 7px;
    transition:background-color 0.3s ease;
    &:hover{
        backdrop-filter:blur(20px);
        background-color:#18;
        border-radius:8px;
        opacity:1;
    }
`;

const Button=styled.button`
    padding:8px;
    text-align:center;
    background-color:transparent;
    font-family:"Gotham SSm";
    font-size:14px;
    border:none;
    padding:0 4px;
    display:flex;
    font-weight:${(prop)=>prop.fontWeight};
`
const RightNav=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding-right:12px;
    .navLinks{
        padding:0 12px;
        display:none;
        @media (min-width:1128px){
            display:block;
        }
    }
`

const Menu=styled.button`
    padding:10px;
    text-align:center;
    backdrop-filter:blur(15px);
    background-color:rgba(0,0,0,0.05);
    border-radius:8px;
    border:none;
    text-transform:uppercase;
    cursor:pointer;
    
    @media (min-width:1128px){
        background:none;
        backdrop-filter:none;
    }

    .menu-button{
        background-color:transparent;
        font-family:"Gotham SSm";
        font-size:14px;
        padding:0 4px;
        display:flex;
        font-weight:bold;
    }
`






