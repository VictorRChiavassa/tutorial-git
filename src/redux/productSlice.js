import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    createProduct: (state, action) => {
      state.data.push(action.payload);
    },
    readProducts: (state, action) => {
      state.data = action.payload;
    },
    updateProduct: (state, action) => {
      const index = state.data.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { createProduct, readProducts, updateProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
