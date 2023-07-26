import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
  token: null,
  balance: 0,
  transactions: [],
};

export const login = createAsyncThunk("user/login", async (credentials) => {
  const response = await axios.post(
    "http://localhost:3000/users/login",
    credentials
  );
  return response.data;
});

export const logout = createAsyncThunk("user/logout", async (token) => {
  const response = await axios.get("http://localhost:3000/users/logout", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const register = createAsyncThunk("user/register", async (data) => {
  const response = await axios.post("http://localhost:3000/users/signup", data);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.removeItem("persist:root");
        state.isLoading = false;
        state.user = null;
        state.isAuth = false;
        state.token = null;
        state.balance = 0;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload.data.accessToken);
        state.user = action.payload.data.user.firstName;
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.token = action.payload.data.accessToken;
        state.balance = action.payload.data.user.balance;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});
export const { updateTransactions } = userSlice.actions;
export default userSlice.reducer;
