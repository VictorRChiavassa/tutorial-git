import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Asegúrate de ajustar la ruta según sea necesario

const store = configureStore({
  reducer: rootReducer,
});

export default store;
