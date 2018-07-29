import * as actionType from '../actions/actionTypes';

const initialState = { 
    order: null, 
    loading: false, 
    prochesed: true,
    error: false
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case actionType.PURCHES_INIT :
            return {
                ...state,
                loading: false,
                prochesed: false,
            }
        case actionType.PURCHES_PROCESS_START :
            return {
                ...state,
                loading: true 
            }
        case actionType.PURCHES_PROCESS_SUCCESS :
            return {
                ...state,
                loading: false, 
                prochesed: true
            }
        case actionType.ORDER_FETCH_START :
            return {
                ...state,
                order: [], 
                loading: true 
            }
        case actionType.ORDER_FETCH_FAILD :
            return {
                ...state,
                order: [], 
                loading: false
            } 
        case actionType.ORDER_FETCH_SUCCESS :
            return {
                ...state,
                order: action.orderData, 
                loading: false  
            }   
        default:
             return state;
    }
}

export default reducer;