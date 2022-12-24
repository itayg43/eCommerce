import {createSlice} from '@reduxjs/toolkit';

import {STATUS} from '../../utils/enums';

export interface AppState {
  status: STATUS;
}

const initialState: AppState = {
  status: STATUS.IDLE,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // get app data
    getAppDataStarted: state => {
      state.status = STATUS.LOADING;
    },
    getAppDataFinished: state => {
      state.status = STATUS.READY;
    },
  },
});

export const {getAppDataStarted, getAppDataFinished} = appSlice.actions;

export default appSlice.reducer;
