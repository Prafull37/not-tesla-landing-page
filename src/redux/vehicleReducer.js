
import {put,takeEvery,call} from 'redux-saga/effects';
import carInfo from "../carInfo.json";

const initialState={
    status:'init',
    vehicles:[],
    error:[],
}

const INIT='INIT';
const FETCHING='FETCHING';
const SUCCESS='SUCCESS';
const ERROR='ERROR';
const DONE='DONE';

function* fetchVehicleDataFromAPI(){
    
    return yield carInfo;
}

export function* recieveVehicleData(){
    try{
        yield put({type:FETCHING});
        const data= yield call(fetchVehicleDataFromAPI);
        if(data !== undefined){
            yield put({type:SUCCESS,payload:{data}});
        }
        yield put({type:DONE})
    }catch(e){
       yield put({type:ERROR,payload:{error:"There is an error"}})
    }
    
}

export function*  watchVehicleSaga(){
    yield takeEvery('FETCH_VEHICLE_DATA',recieveVehicleData)
}


export default function vehicleReducer(state=initialState,action){
   
    switch(action.type){
        case INIT:
            return {...state,
                status:INIT,
                
            }
        case FETCHING:
            return {
                ...state,
                status:FETCHING,
                
            }
        case SUCCESS:
            return {
                ...state,
                status:SUCCESS,
                vehicles:action.payload.data,
              
            }
        case ERROR:{
            return {  ...state,
                status:ERROR,
                error:action.payload.error,
              
            }
        }
        case DONE:{
            return {
                status:DONE,
                ...state
            }
        }
        default:
            return state;
    }

}