
import './App.css';
import Content from './components/Content'
import Header from "./components/Header"
import "./index.css";
import {useLayoutEffect,useEffect,useDebugValue} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import styled from 'styled-components';


export const createNavLinks=(vehicles)=>{
  const eligibleData= vehicles.filter((vehicle)=> vehicle.type==="car" || vehicle.type==="solar");
  return eligibleData.map((data)=> (
    {title:data.title,
      id:data.id}
      ))
}

export function useVehicle(){
  const dispatch=useDispatch();
  const data=useSelector((data)=>data.vehicleData);

  useDebugValue(`Status  === ${data.status}`);
  useDebugValue(data.vehicles.length > 0 ? "Sucess":"Error")
  useDebugValue(data.vehicles || data.error)

  useEffect(()=>{
    dispatch({type:'FETCH_VEHICLE_DATA'});
  },[dispatch])
  
  return data;
}


function App() {

  const {status,vehicles,error} = useVehicle();
  const menu = createNavLinks(vehicles);

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[])

 if(status==='SUCCESS'){
   return (
    <div className="App">
    
     <Header navMenu={menu}/>
      {vehicles.map((vehicle,index)=><Content car={vehicle} key={`${vehicle.title+vehicle.id}`} /> )}
    </div>
   );
 }
 else if(status === "ERROR"){
   <Error> Sorry for the inconvenience
    {error}
  </Error>
 }
 else{
   return (
     <StyledLoader />
   )
 }
}

// export const Snap=({children})=>{
//  const snapRef=useRef(false);
//  console.log("running",snapRef)
//  if(snapRef &&snapRef.current){

//    console.log("snapRef,",snapRef.current.style.overflow)
//  }
//     return (
//       <SnapScroll innerRef={snapRef}>
//         <div>
//           {children}
//         </div>
//       </SnapScroll>
//     )
// }


const Error=styled.pre`
  background-color:orange;
  color:rgba(206, 17, 38, 0.05);;
  padding:16px;
`

const StyledLoader=({children})=>{
  return (<>
    <Loader>Loading...</Loader> 
    {!!children && children}
    </>
  )
}

const Loader=styled.div`

`

// const SnapScroll=styled.section`
 

// `


export default App;
