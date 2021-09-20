import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as CONSTANTS from "./constants/constant";
import { CometChat } from "@cometchat-pro/react-native-chat";

const App = () => {
  var appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(CONSTANTS.APP_REGION)
    .build();

  CometChat.init(CONSTANTS.APP_ID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      var UID = "SUPERHERO1";
      var authKey = CONSTANTS.AUTH_KEY;

      // You can now call login function.
      CometChat.login(UID, authKey).then(
        (user) => {
          console.log("Login Successful:", { user });
        },
        (error) => {
          console.log("Login failed with exception:", { error });
        }
      );
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
