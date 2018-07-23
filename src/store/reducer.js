import * as actionType from './actions.js';
const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese:0,
        meat: 0
    },
    totalPrice: 5, 
    initprices: {
        salad: 0.5,
        bacon: 0.4,
        cheese: 0.7,
        meat: 1.5
    }
}
const reducer = (state =initialState, action ) =>{
    switch(action.type){
        case (actionType.ADD_INGREDIENT): 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingName]: (state.ingredients[action.ingName] + 1 )
                },
                totalPrice: (state.totalPrice + state.initprices[action.ingName])
            }; 
        case (actionType.REMOVE_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingName]: (state.ingredients[action.ingName] - 1 )
                },
                totalPrice: (state.totalPrice - state.initprices[action.ingName])
            }; 
        default:
            return state;
    } 
}
export default reducer;
