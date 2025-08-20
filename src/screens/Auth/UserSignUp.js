import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  CustomButton,
  CustomHeader,
  CustomTextInput,
  ScreenWrapper,
} from '@/components';
import { useTheme } from '@/hooks';
import { useDispatch } from 'react-redux';
import { setingRole, storeToken } from '@/store/auth/AuthSlice';

const UserSignUp = ({ navigation }) => {
  const { Layout, Images, Colors, Fonts, Gutters } = useTheme();

  const dispatch = useDispatch();

  const handleChangeInput = props => {
    console.log(props);
  };

  const loginPressHandler = () => {
    dispatch(setingRole('user'));
    dispatch(storeToken('123'));
  };
  return (
    <ScreenWrapper>
      {/* <CustomHeader backButton centerText={'Sign Up'} /> */}
      <CustomTextInput
        placeholder="First Name"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        placeholder="Last Name"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        placeholder="Email Address"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        secureTextEntry
        placeholder="Confirm Password"
        handleChangeInput={handleChangeInput}
      />
      <CustomButton btnText="Sign Up" onPress={loginPressHandler} />
      <View
        style={[
          Layout.fullWidth,
          Layout.row,
          Layout.justifyContentBetween,
          Gutters.littleTMargin,
        ]}
      >
        <View style={[Layout.row, Layout.fullWidth, Layout.center]}>
          <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>
            Already have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('LoginContainer')}
          >
            <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UserSignUp;
