import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  CustomButton,
  ScreenWrapper,
  CustomHeader,
  CustomTopTabList,
  CustomTextInput,
} from '@/components';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';
import {
  manage_friends_list,
  dummyFriendRequestsData,
} from '@/constants/dummyData';
import FastImage from 'react-native-fast-image';

const FriendsContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const [searchInput, setSearchInput] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeInput = (value, fieldName) => {
    setSearchInput(value);
  };

  const MyFriendsButton = () => (
    <TouchableOpacity style={[Layout.center, Gutters.xTinyTMargin]}>
      <Images.svg.MyFriends.default />
    </TouchableOpacity>
  );

  const FriendRequestsButton = ({ type }) => {
    console.log('FriendRequestsButton', type);
    return (
      <>
        {type === 'incoming' && (
          <View style={[Layout.row, { gap: mS(8) }]}>
            <TouchableOpacity
              style={[
                Layout.center,
                {
                  paddingHorizontal: mS(20),
                  paddingVertical: mS(6),
                  backgroundColor: Colors.textinput_background,
                  borderRadius: mS(20),
                },
              ]}
            >
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_MEDIUM_14,
                  { color: Colors.black },
                ]}
              >
                Accept
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                Layout.center,
                {
                  paddingHorizontal: mS(20),
                  paddingVertical: mS(6),
                  backgroundColor: Colors.textinput_background,
                  borderRadius: mS(20),
                },
              ]}
            >
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_MEDIUM_14,
                  { color: Colors.black },
                ]}
              >
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {type === 'outgoing' && (
          <View style={[Layout.row, { gap: mS(8) }]}>
            <TouchableOpacity
              style={[
                Layout.center,
                {
                  paddingHorizontal: mS(20),
                  paddingVertical: mS(6),
                  backgroundColor: Colors.textinput_background,
                  borderRadius: mS(20),
                },
              ]}
            >
              <Text
                style={[
                  Fonts.PLUSJAKARTASANS_MEDIUM_14,
                  { color: Colors.black },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  };

  const AddFriendsButton = ({ activeTab }) => (
    <TouchableOpacity
      style={[
        Layout.center,
        {
          paddingHorizontal: mS(25),
          paddingVertical: mS(6),
          backgroundColor: Colors.textinput_background,
          borderRadius: mS(20),
        },
      ]}
    >
      <Text style={[Fonts.PLUSJAKARTASANS_MEDIUM_14, { color: Colors.black }]}>
        Add
      </Text>
    </TouchableOpacity>
  );

  const RowButtons = (activeTab, type) => {
    switch (activeTab) {
      case 0:
        return <MyFriendsButton />;
      case 1:
        return <FriendRequestsButton type={type} />;
      case 2:
        return <AddFriendsButton />;
      default:
        return <MyFriendsButton />;
    }
  };

  const Row = ({ activeTab, item }) => {
    console.log('Row', activeTab);
    return (
      <View style={[Layout.row, Layout.alignItemsCenter, Gutters.tinyVPadding]}>
        <FastImage
          style={{
            width: mS(50),
            height: mS(50),
            borderRadius: mS(25),
          }}
          source={item.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={[Layout.fill, Gutters.xTinyLMargin]}>
          <Text
            style={[Fonts.PLUSJAKARTASANS_MEDIUM_16, { color: Colors.black }]}
          >
            {item.name}
          </Text>
          <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14, { opacity: 0.8 }]}>
            {activeTab == 0
              ? item.userName
              : item?.status
              ? item.status
              : item.mutualFriends}
          </Text>
        </View>
        {RowButtons(activeTab, item?.type)}
      </View>
    );
  };

  const FriendsSection = ({ title, data, activeTab }) => (
    <View style={[Layout.fill]}>
      <Text
        style={[
          Fonts.PLUSJAKARTASANS_BOLD_18,
          Gutters.tinyVMargin,
          Gutters.smallTMargin,
        ]}
      >
        {activeTab == 2
          ? 'Suggested Friends'
          : activeTab == 1
          ? 'Incoming Requests'
          : title}
      </Text>
      {[...(data?.incoming ? data.incoming : data)].map((item, index) => (
        <Row key={'key' + index} activeTab={activeTab} item={item} />
      ))}
      {activeTab == 1 && (
        <>
          <Text
            style={[
              Fonts.PLUSJAKARTASANS_BOLD_18,
              Gutters.tinyVMargin,
              Gutters.smallTMargin,
            ]}
          >
            Outgoing Requests
          </Text>

          {[...(data?.outgoing ? data.outgoing : [])].map((item, index) => (
            <Row key={'key' + index} activeTab={activeTab} item={item} />
          ))}
        </>
      )}
    </View>
  );

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={{ paddingHorizontal: mS(15) }}>
        <CustomHeader backButton centerText={'Friends'} />
      </View>

      <CustomTopTabList
        listData={manage_friends_list}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeIndex={activeTab}
      />

      {activeTab === 2 && (
        <CustomTextInput
          placeholder="Search for friends"
          fieldName="search"
          handleChangeInput={handleChangeInput}
          leftIcon={'HomeSearch'}
          wrapperStyle={[Gutters.tinyHMargin]}
        />
      )}

      <ScreenWrapper>
        <FriendsSection
          title={'My Friends'}
          data={dummyFriendRequestsData[manage_friends_list[activeTab]]}
          activeTab={activeTab}
        />
      </ScreenWrapper>
    </View>
  );
};

export default FriendsContainer;
