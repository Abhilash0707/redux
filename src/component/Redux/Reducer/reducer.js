import {ADD_TO_CART, REMOVE_TO_CART} from '../../Constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
  console.log(action,'actionnnnn');
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_TO_CART:
      let result = state.filter(item => {
        return item.name !== action.data;
      });
      return [...result];

    default:
      return state;
  }
};
