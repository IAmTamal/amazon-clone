export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":

      //logic for adding items to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
        //adding "products" to the basket
        //and returning the total data 
        //action.item is basically all the props of the item here

      };

    case "REMOVE_FROM_BASKET":

      //logic for removing items from the basket

      //so we copy the old basket into this
      let newBasket = [...state.basket];

      //we look for the id
      const index = state.basket.findIndex((basket) => basket.id === action.id);


      if (index >= 0) {
        //item exsists, remove it
        console.log("ID FOUND");
        newBasket.splice(index, 1);

      }

      //returning the new basket
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
