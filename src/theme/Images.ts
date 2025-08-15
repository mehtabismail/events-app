import { ThemeVariables } from './theme';

export default function ({}: ThemeVariables) {
  return {
    svg: {
      HomeTab: require('./assets/svg/home_tab.svg'),
      BookingTab: require('./assets/svg/booking_tab.svg'),
      ProfileTab: require('./assets/svg/profile_tab.svg'),
      Profile: require('./assets/svg/profile.svg'),
      ChatTab: require('./assets/svg/chat_tab.svg'),
      Catalogue: require('./assets/svg/catalogue_tab.svg'),
      HomeTabFilled: require('./assets/svg/home_tab_filled.svg'),
      BookingTabFilled: require('./assets/svg/booking_tab_filled.svg'),
      ProfileTabFilled: require('./assets/svg/profile_tab_filled.svg'),
      ChatTabFilled: require('./assets/svg/chat_tab_filled.svg'),
      CatalogueFilled: require('./assets/svg/catalogue_tab_filled.svg'),
      Logout: require('./assets/svg/logout.svg'),
      Chat: require('./assets/svg/chat.svg'),
      Logo: require('./assets/svg/logo.svg'),
      Notification: require('./assets/svg/notification.svg'),
      ArrowRight: require('./assets/svg/arrow_right.svg'),
      BackButton: require('./assets/svg/back_button.svg'),
      BackArrow: require('./assets/svg/back_arrow.svg'),
      Search: require('./assets/svg/search.svg'),
      ArrowDown: require('./assets/svg/arrow_down.svg'),
      EditProfile: require('./assets/svg/edit_profile.svg'),
      Edit: require('./assets/svg/edit.svg'),
    },
    png: {},
  };
}
