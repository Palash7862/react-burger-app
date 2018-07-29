import * as actionType from './actionTypes';
import axios  from '../../hoc/AxiosOrder/AxiosOrder';

export const addIngredient = (name) => {
    return {
        type: actionType.ADD_INGREDIENT, 
        ingName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionType.REMOVE_INGREDIENT, 
        ingName: name
    }
};

export const setIngredient = (ingredients) =>{
    return {
        type: actionType.SET_INGREDIENT, 
        ingredients: ingredients
    }
}

export const fatchIngredientFaild = () =>{
    return {
        type: actionType.FATCH_INGREDIENT_FAILD
    }
}

export const initIngredient = () =>{ 
    return dispatch =>{
        axios.get('/ingredients.json')
            .then(response=>{ 
                //const resArray = Object.assign( [], response.data);
                //console.log(Array.prototype.reverse(resArray));  
                dispatch(setIngredient(response.data));
                //this.setState({ingredients: response.data});
                //console.log(response);
            })
            .catch(error=>{
                dispatch(fatchIngredientFaild());
            });
    } 
}