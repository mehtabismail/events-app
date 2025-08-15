import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import { CustomHeader, CustomTextInput, ScreenWrapper } from '@/components';
import { useTheme } from '@/hooks';
import { chats_data_large } from '@/constants/dummyData';
import ChatList from './ChatList';

const ChatContainer = ({ route }) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();

  const [mode, setMode] = useState('messages');

  const handleChangeInput = (value, fieldName) => {
    console.log(value);
  };

  return (
    <ScreenWrapper>
      <CustomHeader
        backButton
        centerText={
          route?.params?.key != 'official_messages' ? 'Chats' : 'Official Chats'
        }
      />
      <View
        style={[Layout.fullWidth, { backgroundColor: Colors.primary }]}
      ></View>
      <View style={[Layout.screen]}>
        {mode == 'messages' && route?.params?.key != 'official_messages' && (
          <CustomTextInput
            fieldName="search"
            placeholder="Search"
            handleChangeInput={handleChangeInput}
          />
        )}
        <View style={[Layout.fill, Gutters.xTinyTMargin]}>
          {mode == 'messages' ? <ChatList type={route?.params?.key} /> : null}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ChatContainer;
