import * as actionType from './actionTypes';
import axios  from '../../hoc/AxiosOrder/AxiosOrder';

export const purchesInit = ()=>{
    return {
        type: actionType.PURCHES_INIT 
    }
}
export const purchesProcessStart = ()=>{
    return {
        type: actionType.PURCHES_PROCESS_START 
    }
}

export const purchesProcessSuccess = (orderData)=>{
    return {
        type: actionType.PURCHES_PROCESS_SUCCESS, 
        orderData: orderData
    }
}

export const purchesProcessFails = ()=>{
    return {
        type: actionType.PURCHES_PROCESS_FAILD
    }
}

export const purchesProcess = (orderData)=>{ 
    return dispatch =>{ 
        dispatch(purchesProcessStart());
        axios.post('/order.json', orderData)
            .then(response=>{   
                dispatch(purchesProcessSuccess(orderData)); 
            })
            .catch(error=>{
                dispatch(purchesProcessFails());
            });
    } 
}

export const orderFetchStart = ()=>{
    return {
        type: actionType.ORDER_FETCH_START 
    }
}

export const orderFetchFaild = (error)=>{
    return {
        type: actionType.ORDER_FETCH_FAILD, 
        error: error
    }
}

export const orderFetchSuccess = (orderData)=>{
    return {
        type: actionType.ORDER_FETCH_SUCCESS,
        orderData: orderData
    }
}

export const orderFetch = ()=>{
    return dispatch=>{
        dispatch(orderFetchStart());
        axios.get('/order.json')
            .then(response=>{  
                const newOrders = Object.keys(response.data).map(igKey=>{
                                const singleOrder = {
                                    id: igKey,
                                    ...response.data[igKey]
                                }
                                return singleOrder; 
                            });
                dispatch(orderFetchSuccess(newOrders));
            })
            .catch(error=>{
                dispatch(orderFetchFaild(error));
            });
    }
}