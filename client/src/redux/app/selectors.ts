import {RootState} from '../store';

export const selectStatus = (state: RootState) => state.appState.status;
