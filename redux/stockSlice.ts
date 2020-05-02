import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

interface Stock {
  title: string;
  price: string;
  percent: string;
  link: string;
}
const stockSlice = createSlice({
  name: "stocks",
  initialState: {
    goldenCross: [] as Stock[],
    kos: {} as any,
    rise: [] as Stock[],
    search: [] as Stock[],
  },
  reducers: {
    setGoldenCross(state, action) {
      const { payload } = action;
      state.goldenCross = payload;
    },
    setRise(state, action) {
      const { payload } = action;
      state.rise = payload;
    },
    setSearch(state, action) {
      const { payload } = action;
      state.search = payload;
    },
    setKos(state, action) {
      const { payload } = action;
      state.kos = payload;
    },
  },
});

export const { setGoldenCross, setKos, setSearch, setRise } = stockSlice.actions;

export const getGoldenCross = () => async (dispatch: any) => {
  try {
    const { data } = await api.goldenCross();
    dispatch(setGoldenCross(data));
  } catch (e) {
    console.warn(e);
  }
};
export const getRise = () => async (dispatch: any) => {
  try {
    const { data } = await api.rise();
    dispatch(setRise(data));
  } catch (e) {
    console.warn(e);
  }
};
export const getSearch = () => async (dispatch: any) => {
  try {
    const { data } = await api.search();
    dispatch(setSearch(data));
  } catch (e) {
    console.warn(e);
  }
};
export const getKOS = () => async (dispatch: any) => {
  try {
    const { data } = await api.kos();
    dispatch(setKos(data));
  } catch (e) {
    console.warn(e);
  }
};

export default stockSlice.reducer;
