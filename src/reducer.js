
import {
    ADD_TO_BASKET,
    SELECTED_PRODUCT
} from './actions';

export const initialState = {
    basket: [],
    selectedProduct: null
}

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.item,
            }
        default:
            return state;
    }
}

export default reducer;