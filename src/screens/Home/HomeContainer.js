import { View, Text } from 'react-native';
import React from 'react';
import { CustomButton, ScreenWrapper } from '@/components';
import { logout } from '@/store/auth/AuthSlice';
import { persistor } from '@/store/store';
import { useDispatch } from 'react-redux';

const HomeContainer = () => {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <CustomButton
        btnText={'Log Out'}
        onPress={async () => {
          dispatch(logout()), await persistor.purge();
          await persistor.flush();
        }}
      />
    </ScreenWrapper>
  );
};

export default HomeContainer;
