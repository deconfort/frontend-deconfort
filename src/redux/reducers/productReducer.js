import { createReducer } from "@reduxjs/toolkit";
import productAction from "../actions/productAction";

const { getProducts, getProductsFilter } = productAction;

const initialState = {
  product: [],
  value: "",
  categories: [],
  checks: []
};

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProducts.fulfilled, (state, action) => {
      let categoriesCategory = action.payload.map((event) => event.category);
      let categoriesCategoryFilter = [...new Set(categoriesCategory)];
      return {
        ...state,
        cities: action.payload,
        categories: categoriesCategoryFilter,
      };
    })
    .addCase(getProductsFilter.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
});

export default productsReducer;