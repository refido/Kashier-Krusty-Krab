const intialState = {
    loading: false,
    cartItems: [],
};

export const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "HIDE_LOADING":
            return {
                ...state,
                loading: false,
            };
        case "ADD_TO_CART":
            let itemExists = false;
            let updatedCartItems = state.cartItems.map(item => {
                if (item._id === action.payload._id) {
                    itemExists = true;
                    return { ...item, quantity: item.quantity + action.payload.quantity };
                } else {
                    return item;
                }
            });
            if (!itemExists) {
                updatedCartItems.push(action.payload);
            }
            return {
                ...state,
                cartItems: updatedCartItems
            };
        case "UPDATE_CART":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item._id === action.payload._id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case "DELETE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item._id !== action.payload._id
                ),
            };
        case "RESET_CART":
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
};