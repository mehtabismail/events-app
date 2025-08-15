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

import { View, Text } from 'react-native';
import React from 'react';

const LoginContainer = () => {
  return (
    <View>
      <Text>LoginContainer</Text>
    </View>
  );
};

export default LoginContainer;
