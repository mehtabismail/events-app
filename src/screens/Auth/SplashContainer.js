// import { View, Text } from 'react-native';
// import React, { useEffect } from 'react';
// import { useTheme } from '@/hooks';
// import { ScreenWrapper } from '@/components';
// import { navigationRef } from '@/navigators/utils';
// import { useSelector } from 'react-redux';

// const SplashContainer = () => {
//   const { Layout, Images } = useTheme();

//   const { token } = useSelector(state => state.auth);

//   useEffect(() => {
//     setTimeout(() => {
//       navigationRef.navigate('LoginContainer');
//     }, 2000);
//     return () => {};
//   }, []);
//   return (
//     <ScreenWrapper>
//       <View style={[Layout.fill, Layout.center]}>
//         <Images.svg.Logo.default width={200} height={200} />
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default SplashContainer;
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { navigationRef } from '@/navigators/utils';

const SplashContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      navigationRef.navigate('LoginContainer');
    }, 2000);
    return () => {};
  }, []);
  return (
    <View>
      <Text>SplashContainer</Text>
    </View>
  );
};

export default SplashContainer;
