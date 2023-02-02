import { useEffect } from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, IconButton, List } from "react-native-paper";

// components
import CreateAnnouncementButton from "../../components/button/CreateAnnouncementButton";
import Announcements from "../../components/announcement/Announcements";

const App = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header} elevated>
        <Appbar.Content
          title="Mobile-Based Notification System for Sicat College"
          titleStyle={{
            color: "black",
            fontSize: 14,
          }}
        />
      </Appbar.Header>
      <View>
        <CreateAnnouncementButton />
        <View style={styles.titleContainer}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 14 }}>Announcements</Text>
          </View>
          <IconButton
            icon="account-group-outline"
            size={20}
            onPress={() => navigation.navigate("StudentsScreen")}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Announcements />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "white",
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default App;
