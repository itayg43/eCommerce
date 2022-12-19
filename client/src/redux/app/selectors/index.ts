import {IStoreState} from '../../store';

// loading
export const selectIsLoading = (state: IStoreState) => state.appState.isLoading;

// ready
export const selectIsReady = (state: IStoreState) => state.appState.isReady;
