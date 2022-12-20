import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from './src/hooks';
import {getAppData} from './src/redux/app/actions/getAppData';
import {selectIsReady} from './src/redux/app/selectors';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => {
  const dispatch = useAppDispatch();

  const isReady = useAppSelector(selectIsReady);

  useEffect(() => {
    dispatch(getAppData());
  }, [dispatch]);

  return <>{isReady && <BottomTabNavigator />}</>;
};

export default App;
