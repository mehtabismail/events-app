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
import { mS } from '@/utils/functions';

const EventPlannerSignUp = ({ navigation }) => {
  const { Layout, Images, Colors, Fonts, Gutters } = useTheme();

  const dispatch = useDispatch();

  const handleChangeInput = props => {
    console.log(props);
  };

  const loginPressHandler = () => {
    dispatch(setingRole('event-planner'));
    dispatch(storeToken('123'));
  };
  return (
    <ScreenWrapper>
      <CustomHeader backButton centerText={'Sign Up'} />
      <CustomTextInput
        placeholder="First Name"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        placeholder="Last Name"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        placeholder="Company Name"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        placeholder="Company Size"
        handleChangeInput={handleChangeInput}
        rightIcon={'UpDown'}
        editable={false}
      />
      <View
        style={[Layout.row, Gutters.littleVPadding, Layout.alignItemsCenter]}
      >
        <View
          style={[
            Gutters.gapRMargin,
            Layout.center,
            {
              width: mS(40),
              height: mS(40),
              borderRadius: mS(8),
              backgroundColor: Colors.textinput_background,
            },
          ]}
        >
          <Images.svg.ImagePlaceholder.default />
        </View>
        <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_16]}>
          Upload Company Logo
        </Text>
      </View>
      <CustomTextInput
        placeholder="Address"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        placeholder="Phone Number"
        handleChangeInput={handleChangeInput}
      />
      <CustomTextInput
        placeholder="Email"
        handleChangeInput={handleChangeInput}
      />
      <CustomButton btnText="Register" onPress={loginPressHandler} />
    </ScreenWrapper>
  );
};

export default EventPlannerSignUp;
