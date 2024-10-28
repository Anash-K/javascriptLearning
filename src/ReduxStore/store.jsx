import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import taskReducer from './slices/todoSlice'; 

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    taskSlice: taskReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
