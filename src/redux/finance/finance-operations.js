import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { successNotif, errorNotif } from "../../services";
import { globalActions } from "../globall";

const getAllTransactions = createAsyncThunk(
  "finance/getAllTransactions",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions`);

      return data;
    } catch (error) {
      errorNotif("Failed to load transaction history", {
        comment: error.response.data.message || null,
        closeTime: 5000,
      });

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const addTransaction = createAsyncThunk(
  "finance/addTransaction",
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post("/transactions", transaction);

      successNotif("Transaction added", 2000);

      thunkAPI.dispatch(getAllTransactions());
      thunkAPI.dispatch(globalActions.closeModalAddTransaction());

      return data;
    } catch (error) {
      errorNotif("Failed to create transaction", {
        comment: error.response.data.message || null,
        closeTime: 5000,
      });

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getStatistics = createAsyncThunk(
  "finance/getStatistics",
  async (period, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/statistics/statistics?startDate=${period.startDate}&endDate=${period.endDate}`
      );

      return data;
    } catch (error) {
      errorNotif("Failed to get statistics", {
        comment: error.response.data.message || null,
        closeTime: 5000,
      });

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getCategories = createAsyncThunk(
  "finance/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/categories/hardcoded");

      return data;
    } catch (error) {
      errorNotif("Failed to get list of available categories", {
        comment: error.response.data.message || null,
        closeTime: 5000,
      });

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export { getAllTransactions, addTransaction, getStatistics, getCategories };
