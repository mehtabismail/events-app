import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader, CustomNotificationList, ScreenWrapper } from '@/components'
import { useTheme } from '@/hooks'

const NotificationContainer = () => {
    const { Layout } = useTheme()

    return (
        <ScreenWrapper>
            <CustomHeader backButton centerText="Notifications" />
            <View style={[Layout.fill]}>
                <CustomNotificationList />
            </View>
        </ScreenWrapper>
    )
}

export default NotificationContainer