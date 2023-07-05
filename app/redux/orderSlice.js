import {createSlice} from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: [],
  },
  reducers: {
    setOrder: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setOrder} = orderSlice.actions;

export const setOrderFunction = value => dispatch => {
  dispatch(setOrder(value));
};

export const selectOrder = state => state.order?.value;

export default orderSlice.reducer;
