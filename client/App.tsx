import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAppData} from './src/redux/app/actions/getAppData';
import {selectIsReady} from './src/redux/app/selectors';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => {
  const dispatch = useDispatch();

  const isReady = useSelector(selectIsReady);

  useEffect(() => {
    dispatch<any>(getAppData());
  }, [dispatch]);

  return <>{isReady && <BottomTabNavigator />}</>;
};

export default App;
