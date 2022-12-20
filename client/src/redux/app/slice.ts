import {createSlice} from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  isReady: boolean;
}

const initialState: AppState = {
  isLoading: false,
  isReady: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // get app data
    getAppDataStarted: state => {
      state.isLoading = true;
    },
    getAppDataFinished: state => {
      state.isLoading = false;
      state.isReady = true;
    },
  },
});

export const {getAppDataStarted, getAppDataFinished} = appSlice.actions;

export default appSlice.reducer;
