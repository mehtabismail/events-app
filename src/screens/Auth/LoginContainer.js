// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { CustomButton, CustomTextInput, ScreenWrapper } from '@/components';
// import { useTheme } from '@/hooks';
// import { useDispatch } from 'react-redux';
// import { storeToken } from '@/store/auth/AuthSlice';
// import { StatusBarheight } from '@/theme/Gutters';

// const LoginContainer = ({ navigation }) => {
//   const { Layout, Images, Colors, Fonts, Gutters } = useTheme();

//   const dispatch = useDispatch();

//   const handleChangeInput = props => {
//     console.log(props);
//   };

//   const loginPressHandler = () => {
//     dispatch(storeToken('123'));
//   };

//   return (
//     <View style={[Layout.fill, Layout.bgColor]}>
//       <View style={[Layout.fullWidth, Layout.height40, Layout.center]}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={[
//             Layout.absolute,
//             {
//               zIndex: 1,
//               top: StatusBarheight + 10,
//               left: 10,
//             },
//           ]}
//         >
//           <Images.svg.BackArrow.default fill={Colors.primary} />
//         </TouchableOpacity>
//         <Images.svg.Logo.default />
//       </View>
//       <View
//         style={[
//           Layout.fill,
//           Gutters.largeTRRadius,
//           Gutters.largeTLRadius,
//           Gutters.lightShadow,
//           { backgroundColor: Colors.grey1 },
//         ]}
//       >
//         <View style={[Layout.height20, Layout.fullWidth, Layout.center]}>
//           <Text style={[Fonts.nunito32, Fonts.semiboldWeight]}>Login</Text>
//         </View>
//         <View style={[Layout.selfCenter, Layout.width90]}>
//           <CustomTextInput
//             placeholder="Enter Email"
//             headingText="Email"
//             handleChangeInput={handleChangeInput}
//           />
//           <CustomTextInput
//             secureTextEntry
//             placeholder="Enter Password"
//             headingText="Password"
//             handleChangeInput={handleChangeInput}
//           />
//           <View style={[Gutters.smallTMargin]}>
//             <CustomButton btnText="Login" onPress={loginPressHandler} />
//           </View>
//           <View
//             style={[
//               Layout.fullWidth,
//               Layout.row,
//               Layout.justifyContentBetween,
//               Gutters.tinyTMargin,
//             ]}
//           >
//             <View style={[Layout.row]}>
//               <Text style={[Fonts.nunito14, Fonts.regularWeight]}>
//                 Dont have an account?
//               </Text>
//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 onPress={() => navigation.navigate('SignupContainer')}
//               >
//                 <Text
//                   style={[
//                     Fonts.nunito14,
//                     Fonts.regularWeight,
//                     { color: Colors.primary },
//                   ]}
//                 >
//                   {' '}
//                   Sign Up
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default LoginContainer;

import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, CustomTextInput, ScreenWrapper } from '@/components';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import { setingRole, storeToken } from '@/store/auth/AuthSlice';
import { navigationRef } from '@/navigators/utils';

const LoginContainer = () => {
  const { Layout, Gutters, Fonts, Images, Colors } = useTheme();
  const [role, setRole] = useState('');

  const dispatch = useDispatch();

  const handleChangeInput = props => {
    console.log(props);
  };

  const loginPressHandler = () => {
    dispatch(storeToken('123'));
    dispatch(setingRole('user'));
  };

  const LoginContent = () => {
    return (
      <>
        <View style={[Layout.center, Gutters.smallVMargin]}>
          <FastImage
            style={{ width: mS(150), height: mS(150) }}
            source={Images.png.Logo}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={[Fonts.PLUSJAKARTASANS_BOLD_22, Gutters.tinyTMargin]}>
            Welcome back
          </Text>
        </View>
        <View>
          <CustomTextInput
            placeholder="Username or Email"
            // headingText="Email"
            handleChangeInput={handleChangeInput}
          />
          <CustomTextInput
            secureTextEntry
            placeholder="Password"
            // headingText="Password"
            handleChangeInput={handleChangeInput}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={[Gutters.tinyBMargin]}>
          <Text
            style={[
              Fonts.PLUSJAKARTASANS_REGULAR_14,
              { textDecorationLine: 'underline' },
            ]}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <CustomButton btnText="Login" onPress={loginPressHandler} />

        <View
          style={[
            Layout.fullWidth,
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.tinyTMargin,
          ]}
        >
          <View
            style={[
              Layout.fullWidth,
              Layout.row,
              Gutters.littleTMargin,
              Layout.center,
            ]}
          >
            <Text
              style={[
                Fonts.PLUSJAKARTASANS_REGULAR_14,
                { textDecorationLine: 'underline' },
              ]}
            >
              Dont have an account?
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setRole(null)}>
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_REGULAR_14,
                  { textDecorationLine: 'underline' },
                ]}
              >
                {' '}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  const SwitchingContent = () => {
    return (
      <>
        <View style={[Layout.center, Layout.fill]}>
          <Text
            style={[
              Fonts.PLUSJAKARTASANS_BOLD_22,
              Gutters.largeVMargin,
              { position: 'absolute', top: 10 },
            ]}
          >
            Choose Your Role :
          </Text>
          <CustomButton
            btnText={'User'}
            onPress={() => {
              navigationRef.navigate('SignupContainer', { role: 'user' });
              setTimeout(() => {
                setRole('');
              }, 1000);
            }}
          />
          <CustomButton
            btnText={'Event Planner'}
            onPress={() => {
              navigationRef.navigate('SignupContainer', {
                role: 'event-planner',
              });
              setTimeout(() => {
                setRole('');
              }, 1000);
            }}
          />
        </View>
      </>
    );
  };
  return (
    <ScreenWrapper>
      {role === null ? (
        <SwitchingContent />
      ) : (
        <>
          <LoginContent />
        </>
      )}
    </ScreenWrapper>
  );
};

export default LoginContainer;
