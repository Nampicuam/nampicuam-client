import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART, GET_BRAND_LIST, GET_CART_LIST, GET_CATEGORY_LIST, GET_PRODUCT_LIST, GET_RATING_LIST, UPDATE_CART_AMOUNT
} from "./actions";

const initialState = {
  productList: [],
  cartList: []
};

const EcommerceReducer = function (state = initialState, action) {
  const { type, payload} = action;
  switch (type) {
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        productList: [...payload]
      };
    }
    case GET_CATEGORY_LIST: {
      return {
        ...state,
        categoryList: [...payload]
      };
    }
    case GET_RATING_LIST: {
      return {
        ...state,
        ratingList: [...payload]
      };
    }
    case GET_BRAND_LIST: {
      return {
        ...state,
        brandList: [...payload]
      };
    }
    case GET_CART_LIST: {
      return {
        ...state,
        cartList: [...payload]
      };
    }
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cartList: [...payload]
      };
    }
    case DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cartList: [...payload]
      };
    }
    case UPDATE_CART_AMOUNT: {
      return {
        ...state,
        cartList: [...payload]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default EcommerceReducer;
