import {configureStore} from '@reduxjs/toolkit';
import orderReducer from '../redux/orderSlice';

export default configureStore({
  reducer: {
    order: orderReducer,
  },
});
