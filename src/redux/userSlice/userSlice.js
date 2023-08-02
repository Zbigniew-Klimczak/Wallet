import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  isLogoutModal: false,
  isAddTransactionModal: false,
  error: null,
  token: null,
  refreshToken: null,
  balance: 0,
  transactions: [],
};

export const ERRORS = Object.freeze({
  NotAuthorized: "Request failed with status code 401",
});

export const login = createAsyncThunk("user/login", async (credentials) => {
  const response = await axios.post(
    "https://wallet-backend-efx6.onrender.com/users/login",
    credentials
  );
  return response.data;
});

export const logout = createAsyncThunk("user/logout", async (token) => {
  const response = await axios.get(
    "https://wallet-backend-efx6.onrender.com/users/logout",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

export const register = createAsyncThunk("user/register", async (data) => {
  const response = await axios.post(
    "https://wallet-backend-efx6.onrender.com/users/signup",
    data
  );
  return response.data;
});

export const updateInfo = createAsyncThunk("user/current", async (token) => {
  const response = await axios.get(
    "https://wallet-backend-efx6.onrender.com/users/current",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

export const refreshTokens = createAsyncThunk("user/tokens", async (token) => {
  const response = await axios.post(
    "https://wallet-backend-efx6.onrender.com/users/tokens",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLogoutModal: (state, action) => {
      state.isLogoutModal = action.payload;
    },
    setAddTransactionModal: (state, action) => {
      state.isAddTransactionModal = action.payload;
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
        state.refreshToken = null;
        state.transactions = [];
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
        state.user = action.payload.data.user.firstName;
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.token = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        state.balance = action.payload.data.user.balance;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(updateInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.user = action.payload.data.firstName;
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.transactions = action.payload.data.transactions;
        state.balance = action.payload.data.balance;
      })
      .addCase(updateInfo.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message === ERRORS.NotAuthorized) {
          state.token = null;
        }
        state.error = action.error.message;
      })
      .addCase(refreshTokens.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshTokens.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        state.error = null;
      })
      .addCase(refreshTokens.rejected, (state, action) => {
        if (action.error.message === ERRORS.NotAuthorized) {
          state.user = null;
          state.balance = 0;
          state.transactions = [];
          state.token = null;
          state.refreshToken = null;
          state.isAuth = false;
        }
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  updateTransactions,
  setLogoutModal,
  setAddTransactionModal,
  clearError,
} = userSlice.actions;
export default userSlice.reducer;
