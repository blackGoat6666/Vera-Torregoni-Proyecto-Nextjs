import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usar localStorage como predeterminado
import cartSliceReducer from "./slices/cartSlice";

// Configuración de persistencia
const persistConfig = {
    key: 'root', // Clave de almacenamiento
    storage,     // Tipo de almacenamiento
};

// Reducer persistente
const persistedReducer = persistReducer(persistConfig, cartSliceReducer);

// Crear la tienda con el reducer persistente
export const store = configureStore({
    reducer: {
        cart: persistedReducer
    },
    devTools: true, // Siempre habilitar DevTools
});

// Crear el persistor
export const persistor = persistStore(store);
