import React, { useState } from 'react';
import UserSignUp from './UserSignUp';
import EventPlannerSignUp from './EventPlannerSignUp';
import { View } from 'react-native';
import { CustomHeader, CustomTopTabList } from '@/components';
import { signup_switching } from '@/constants/dummyData';
import { useTheme } from '@/hooks';

const SignupContainer = ({ navigation, route }) => {
  const { Layout, Gutters, Colors } = useTheme();
  const [selected, setSelected] = useState(0);

  console.log(selected, 'checking selection');
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View>
        <CustomHeader backButton centerText={'Sign Up'} />
      </View>
      <CustomTopTabList
        listData={signup_switching}
        activeTab={selected}
        setActiveTab={setSelected}
      />
      <View style={[Gutters.litttleBPadding]} />
      {selected == 0 ? (
        <UserSignUp navigation={navigation} />
      ) : (
        <EventPlannerSignUp navigation={navigation} />
      )}
    </View>

    // </View>
  );
};

export default SignupContainer;
