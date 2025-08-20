import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { CustomTextInput, ScreenWrapper } from '@/components';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';
import FastImage from 'react-native-fast-image';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfileContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  const [forceUpdate, setForceUpdate] = useState(false);
  
  const formData = useRef({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phoneNumber: '+1 (555) 123-4567',
    profileImage: require('@/theme/assets/images/edit-profile-img-1.png'),
  });

  const handleChangeInput = (value, fieldName) => {
    if (fieldName === 'firstName') formData.current.firstName = value;
    if (fieldName === 'lastName') formData.current.lastName = value;
    if (fieldName === 'email') formData.current.email = value;
    if (fieldName === 'phoneNumber') formData.current.phoneNumber = value;
  };

  const handleImagePicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets[0]) {
        const selectedImage = response.assets[0];
        formData.current.profileImage = { uri: selectedImage.uri };
        setForceUpdate(prev => !prev); // Force re-render
      }
    });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving profile:', formData.current);
    navigation.goBack();
  };

  const ProfileImageSection = () => (
    <View style={[Layout.center, Gutters.tinyTMargin]}>
      <FastImage
        style={{
          width: "100%",
          height: mS(280),
          borderRadius: mS(16),
        }}
        source={formData.current.profileImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleImagePicker}
        style={[
          Layout.center,
          Gutters.mediumTMargin,
          Gutters.gapVPadding,
          {
            paddingHorizontal: mS(24),
            backgroundColor: Colors.secondary_background,
            borderRadius: mS(50),
          },
        ]}
      >
        <Text style={[Fonts.PLUSJAKARTASANS_BOLD_14, { color: Colors.black }]}>
          Change Display Picture
        </Text>
      </TouchableOpacity>
    </View>
  );

  const FormSection = () => (
    <View style={[Gutters.smallTMargin]}>
      <CustomTextInput
        placeholder="Enter First Name"
        headingText="First Name"
        fieldName="firstName"
        defaultValue={formData.current.firstName}
        handleChangeInput={handleChangeInput}
        customStyle={[Gutters.littleBPadding]}
        type="text"
      />
      
      <CustomTextInput
        placeholder="Enter Last Name"
        headingText="Last Name"
        fieldName="lastName"
        defaultValue={formData.current.lastName}
        handleChangeInput={handleChangeInput}
        customStyle={[Gutters.littleBPadding]}
        type="text"
      />
      
      <CustomTextInput
        placeholder="Enter Email Address"
        headingText="Email Address"
        fieldName="email"
        defaultValue={formData.current.email}
        handleChangeInput={handleChangeInput}
        customStyle={[Gutters.littleBPadding]}
        keyboardType="email-address"
        type="text"
      />
      
      <CustomTextInput
        placeholder="Enter Phone Number"
        headingText="Phone Number (Optional)"
        fieldName="phoneNumber"
        defaultValue={formData.current.phoneNumber}
        handleChangeInput={handleChangeInput}
        customStyle={[Gutters.littleBPadding]}
        type="text"
      />
    </View>
  );

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={{ paddingHorizontal: mS(15) }}>
        <View style={[Layout.row, Layout.alignItemsCenter, Layout.justifyContentBetween, Gutters.smallVPadding]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[Fonts.PLUSJAKARTASANS_BOLD_18, { color: Colors.black }]}>✕</Text>
          </TouchableOpacity>
          <Text style={[Fonts.PLUSJAKARTASANS_BOLD_18]}>Edit Profile</Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={[Fonts.PLUSJAKARTASANS_BOLD_16, { color: Colors.primary }]}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScreenWrapper>
        <ProfileImageSection />
        <FormSection />
      </ScreenWrapper>
    </View>
  );
};

export default EditProfileContainer;