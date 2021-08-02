export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce(
    (TotalAmount, item) => TotalAmount + item.quantity * item.price,
    0
  );
export const Count = (basket) =>
  basket?.reduce((TotalCount, item) => TotalCount + item.quantity, 0);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_to_Cart":
      const addBasket = state.basket.some(
        (item) => item.id === action.product.id
      );
      if (addBasket) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, action.product],
        };
      }
    case "increase_quantity":
      const inBasket = state.basket.some(
        (item) => item.id === action.product.id
      );
      if (inBasket) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

    case "decrease_quantity":
      const lessBasket = state.basket.some(
        (item) => item.id === action.product.id
      );
      if (lessBasket) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.product.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          ),
        };
      }
    case "remove_from_cart":
      const index = state.basket.findIndex(
        (basketProduct) => basketProduct.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("this product cant removed ");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "empty_basket":
      return {
        ...state,
        basket: [],
      };
    case "set_user":
      return { ...state, user: action.user };
    default:
      return state;
  }
};
export default reducer;
