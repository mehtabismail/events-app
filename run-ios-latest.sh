#!/bin/bash

# Get the latest available iPhone simulator name (e.g., iPhone 16 Pro)
DEVICE_NAME=$(xcrun simctl list devices available | grep "iPhone" | tail -n 1 | awk -F '[()]' '{print $1}' | sed 's/ *$//g')

# Get its UDID
DEVICE_UDID=$(xcrun simctl list devices available | grep "$DEVICE_NAME" | tail -n 1 | awk -F '[()]' '{print $2}')

echo "📱 Launching $DEVICE_NAME ($DEVICE_UDID)..."

# Boot simulator if not already booted
xcrun simctl boot "$DEVICE_UDID" 2>/dev/null || true
open -a Simulator

# Run the React Native app on that simulator
npx react-native run-ios --udid "$DEVICE_UDID"

