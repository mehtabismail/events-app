import { View, Text } from 'react-native';
import React from 'react';
import { CustomButton, CustomHeader, ScreenWrapper } from '@/components';
import { logout } from '@/store/auth/AuthSlice';
import { persistor } from '@/store/store';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';


const ProfileContainer = () => {
    const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const dispatch = useDispatch();
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={{ paddingHorizontal: mS(15) }}>
        <CustomHeader backButton centerText={'Profile'} />
      </View>
      <ScreenWrapper>
        <CustomButton
          btnText={'Log Out'}
          onPress={async () => {
            dispatch(logout()), await persistor.purge();
            await persistor.flush();
          }}
        />
      </ScreenWrapper>
    </View>
  );
};

export default ProfileContainer;
