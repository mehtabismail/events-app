import React from 'react';
import UserSignUp from './UserSignUp';
import EventPlannerSignUp from './EventPlannerSignUp';

const SignupContainer = ({ navigation, route }) => {
  return (
    <>
      {route?.params?.role == 'user' ? (
        <UserSignUp navigation={navigation} />
      ) : (
        <EventPlannerSignUp navigation={navigation} />
      )}
    </>
  );
};

export default SignupContainer;
