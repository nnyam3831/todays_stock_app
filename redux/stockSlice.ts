import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const stockSlice = createSlice({
  name: "stocks",
  initialState: {
    goldenCross: [] as any,
    kos: [
      {
        dam: "dam",
      },
    ] as any,
    rise: [] as any,
    search: [] as any,
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
export default stockSlice.reducer;
