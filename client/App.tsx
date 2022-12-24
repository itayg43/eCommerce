import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from './src/hooks';
import {getAppData} from './src/redux/app/actions/getAppData';
import {selectStatus} from './src/redux/app/selectors';
import {STATUS} from './src/utils/enums';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getAppData());
  }, [dispatch]);

  return <>{status === STATUS.READY && <BottomTabNavigator />}</>;
};

export default App;
