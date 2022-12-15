import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const createReaction = createAsyncThunk("createReaction", async ({datos, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${apiUrl}api/reactions`;
  try {
    const res = await axios.post(url, datos, headers);
    return {
      success: true,
      reactions: res.data.response,
      response: res,
    };
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});


const getReactions = createAsyncThunk("getReactions", async (data) => {
  let headers = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWEwOGY4MjNmZjgyMWJlNTU3MWRmMiIsIm5hbWUiOiJhbnRvbmVsbGEiLCJwaG90byI6Imh0dHBzOi8vd3d3LnNveXhlbmVpemUuY29tLmFyL19fZXhwb3J0LzE2NzA5Njk4NjU2ODUvc2l0ZXMvc295eGVuZWl6ZS9pbWcvMjAyMi8xMi8xMy9sazIzZGdkM2RkZGQyM3MyZC5qcGdfMTkwODUxOTgxLmpwZyIsImxvZ2dlZCI6dHJ1ZSwiaWF0IjoxNjcxMDc3NTgyLCJleHAiOjE3MDI2MTM1ODJ9.pCfZqzsOznE5pPTTRuj3kPuiqtLf3K5WPrUhjHJddtQ` } };
  let url = `${apiUrl}api/reactions?${data.eventId}`;
  try {
    const res = await axios.get(url, headers);
    return {
      success: true,
      reactions: res.data,

    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});



const updateReactions = createAsyncThunk("updateReactions", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  let url = `${apiUrl}api/reactions?${datos.commentId}&name=${datos.name}`;
  try {
    const res = await axios.put(url, datos, headers);
    console.log(res);
    return {
      success: true,
      reactions: res.data.data,
      reactioned: res.data.reactioned,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});

const reactionsActions = {
  createReaction,
  getReactions,
  updateReactions,

};

export default reactionsActions;
