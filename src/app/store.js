import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productsSlice';
import userReducer from '../features/users/usersSlice';
import adminReducer from '../features/adminSettings/adminSlice';

 const store = configureStore({
    reducer: {
      products: productReducer,
      users: userReducer,
      admin: adminReducer,
    }
})

export default store;