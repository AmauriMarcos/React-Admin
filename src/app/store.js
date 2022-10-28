import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productsSlice';
import userReducer from '../features/users/usersSlice';
import adminReducer from '../features/adminSettings/adminSlice';
import authReducer from '../features/authSlice';
import propertyReducer from '../features/propertiesSlice';
import roomReducer from '../features/roomsSlice';

import {
  persistReducer,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
      products: productReducer,
      users: userReducer,
      admin: adminReducer,
      property: propertyReducer,
      auth: persistedReducer, 
      room: roomReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
  });
