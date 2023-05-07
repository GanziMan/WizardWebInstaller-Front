import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root", 
  initialState: {
    mode: "",
    host: "",
    os: ""
  },
  reducers: {
    step1Re: (state, action) => { state.mode = action.payload },
    step2Re: (state, action) => { state.host = action.payload },
    step4Re: (state, action) => { state.os = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const { step1Re, step2Re, step4Re } = rootSlice.actions 