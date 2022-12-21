import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/usersActions";

const { enter, reEnter, signOff, getUser, editProfile } = usersActions;

const initialState = {
  name: "",
  lastName: "",
  photo: "",
  logged: false,
  token: "",
  idUser: "",
  role: "",
  user: [],
};

const usersReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(enter.fulfilled, (state, action) => {
      const { success, response } = action.payload;
      if (success) {
        let { user, token } = response; //este token es el codigo que viene del backend
        localStorage.setItem(
          "token",
          JSON.stringify({ token: { user: token } })
        ); //este objeto token va a guardar
        let newState = {
          ...state,
          name: user.name,
          lastName: user.lastName,
          photo: user.photo,
          logged: true,
          role: user.role,
          idUser: user.id,
          token: token,
        };
        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    })
    .addCase(reEnter.fulfilled, (state, action) => {
      const { success, response, token } = action.payload;
      if (success) {
        let { user } = response;

        let newState = {
          ...state,
          name: user.name,
          lastName: user.lastName,
          photo: user.photo,
          logged: true,
          role: user.role,
          idUser: user.id,
          token: token,
        };

        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    })
    .addCase(signOff.fulfilled, (state, action) => {
      const { success, response } = action.payload;
      if (success) {
        localStorage.removeItem("token");
        let newState = {
          ...state,
          name: "",
          lastName: "",
          photo: "",
          logged: false,
          role: "",
          idUser: "",
          token: "",
        };
        console.log(newState);
        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    })
    .addCase(getUser.fulfilled, (state, action) => 
    {
    
      return {
        ...state,
        user: action.payload.response,
        
      };
    })
    .addCase(editProfile.fulfilled, (state, action) => 
    {
    
      return {
        ...state,
        user: action.payload.response,
        name: action.payload.response.name,
        lastName: action.payload.response.lastName,
        photo: action.payload.response.photo,
        country:action.payload.response.country,
        role: action.payload.response.role,
        age: action.payload.response.age
      };
    })
});

export default usersReducers;
