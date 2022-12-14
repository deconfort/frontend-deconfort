import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const res = await axios.get(`${apiUrl}api/products`);
    return(res.data.response);
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getProductsFilter = createAsyncThunk(
  "getProductsFilter",
  async ({  value, order }) => {
    let url = `${apiUrl}api/products?name=${value}&order=${order}`;

    try {
      const res = await axios.get(url);
      console.log(res.data.response);
      return {
        products: res.data.response,
        value,
        order
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);

const productAction = {
  getProducts,
  getProductsFilter,
};

export default productAction;