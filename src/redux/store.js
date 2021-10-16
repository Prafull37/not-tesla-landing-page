import {createStore,applyMiddleware,combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga'

import {default as vehicleReducer,watchVehicleSaga} from './vehicleReducer';

const saga= createSagaMiddleware();
const reducers=combineReducers({
    vehicleData:vehicleReducer,
});
const middleWare= applyMiddleware(saga);

export default function store(){
    const store= createStore(reducers,middleWare);
    saga.run(watchVehicleSaga);
    return store;
}