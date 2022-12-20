import {RootState} from '../store';

export const selectIsLoading = (state: RootState) => state.appState.isLoading;

export const selectIsReady = (state: RootState) => state.appState.isReady;
