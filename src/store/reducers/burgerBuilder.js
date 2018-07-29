import * as actionType from '../actions/actionTypes';
const initialState = {
    ingredients: null,
    totalPrice: 5, 
    initprices: {
        salad: 0.5,
        bacon: 0.4,
        cheese: 0.7,
        meat: 1.5
    },
    error: false
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
        case (actionType.SET_INGREDIENT):
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false
            }; 
        case (actionType.FATCH_INGREDIENT_FAILD):
            return {
                ...state, 
                error: true
            };
        default:
            return state;
    } 
}
export default reducer;
