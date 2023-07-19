import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
  token: null,
};

export const login = createAsyncThunk("user/login", async (credentials) => {
  const response = await axios.post(
    "http://localhost:3000/users/login",
    credentials
  );
  return response.data;
});

export const logout = createAsyncThunk("user/logout", async () => {
  const response = await axios.get("http://localhost:3000/users/logout");
  return response.data;
});

export const register = createAsyncThunk("user/register", async (data) => {
  const response = await axios.post("http://localhost:3000/users/signup", data);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data.user;
        state.isAuth = true;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuth = false;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
        console.log(action.payload.data.token);
        state.isAuth = true;
        state.token = action.payload.data.token;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
