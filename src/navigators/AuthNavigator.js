import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BroadCasterAgreementContainer,
  LoginContainer,
  NewPasswordContainer,
  NumberVerificationContainer,
  OtpContainer,
  PrivacyPolicyContainer,
  ResetPasswordContainer,
  SignupContainer,
  SplashContainer,
  TermsOfUseContainer,
  WelcomeContainer,
} from '@/screens';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SplashContainer"
    >
      <Stack.Screen name="SplashContainer" component={SplashContainer} />

      <Stack.Screen name="LoginContainer" component={LoginContainer} />

      <Stack.Screen name="SignupContainer" component={SignupContainer} />
    </Stack.Navigator>
  );
};

export default Auth;
