import { ListItemSecondaryAction } from "@material-ui/core";

export const initialState = {
basket: [],
user:null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action){
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
            
        case 'REMOVE_FROM_BASKET' :
            //Logic for Removing item from the basket

            // cloned thed basket
            let newBasket = [...state.basket];

            // check to see if product exist
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                // item exist in the basket , remove it
                newBasket.splice(index,1);
            }else{
                console.warn(
                    'cant remove the product(id:${action.id}) as its not available'
                )
            }
            return {
                ...state,
                basket : newBasket,             
            };            
        default:
            return state;
    }
}

export default reducer;