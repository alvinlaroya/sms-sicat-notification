import { StyleSheet, View } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Surface, TextInput, TouchableRipple } from "react-native-paper";

// components
import SicatAvatar from "../../components/avatar/SicatAvatar";

const CreateAnnouncementButton = () => {
  const navigation = useNavigation();
  return (
    <Surface style={styles.container}>
      <TouchableRipple
        onPress={() => navigation.navigate("CreateAnnouncement")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.createAnnouncementSection} elevation={5}>
          <SicatAvatar size={40} style={{ marginTop: 5 }} />
          <TextInput
            label="Create Announcement"
            mode="outlined"
            outlineStyle={{
              borderRadius: 50,
            }}
            style={{
              width: "85%",
              marginLeft: 10,
              height: 35,
              marginBottom: 5,
              backgroundColor: "white"
            }}
            disabled
          />
        </View>
      </TouchableRipple>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  createAnnouncementSection: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
  },
});

export default CreateAnnouncementButton;
