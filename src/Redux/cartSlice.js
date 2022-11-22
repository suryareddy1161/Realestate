import { createSlice } from "@reduxjs/toolkit";
import data from '../Components/CardsData';

const initialState = {
  cartItems: data,
  EmptyCart: [],
  /* EmptyCart: [],
  amount: 50,
  isLoading: true */
  filtered_data:[],
}
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.EmptyCart.push(action.payload)

    },
    location_search: (state, action) => {
      function location(data) {
        return data.location === action.payload;
      }
      state.filtered_data = state.cartItems.filter(location);
      console.log(state.filtered_data);
    },
    price_search: (state, action) => {
      let priceRange = action.payload.split("-")
      console.log(priceRange)
      function price(data) {
        if (Number(data.price) > priceRange[0] && Number(data.price) < priceRange[1]) {
          return data;
        }

      };

      state.filtered_data = state.cartItems.filter(price);
      console.log(state.filtered_data);
    },
    
    propertyType_search: (state, action) => {
      function property(data) {
        return data.propertyType === action.payload;
      }
      state.filtered_data = state.cartItems.filter(property);
      console.log(state.filtered_data, action.payload);
    },
    date_search: (state, action) => {
      console.log(action.payload);
      function dateFilter(data) {
        return data.date == action.payload
      }
      state.filtered_data = state.cartItems.filter(dateFilter)
      console.log(state.filtered_data);
    }
  },


})
// console.log(cartSlice)
export const { first_data,addToCart , propertyType_search ,price_search,date_search,location_search ,filtered_data} = cartSlice.actions
export default cartSlice.reducer