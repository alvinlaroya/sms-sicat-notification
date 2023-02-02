import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// react native paper
import { Appbar } from "react-native-paper";

export default function App() {
  const [title, setTitle] = useState("Title");
  return (
    <>
      <Appbar.Header dark>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action
          icon="alarm-note-off"
          onPress={() => setTitle("Student Details")}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>
          Open up App.js to start working on your app! Hello madafaka hahahas
        </Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  renzo: {
    color: "red",
  },
});
