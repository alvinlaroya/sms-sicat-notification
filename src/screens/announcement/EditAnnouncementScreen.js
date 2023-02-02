import { useState } from "react";
import { StyleSheet, View } from "react-native";

// vonage
/* import vonage from "../../_common/utils/vonage"; */

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, Text, TextInput, Button } from "react-native-paper";

// firstore database
import db from "../../_common/services/database/index";
import { doc, updateDoc } from "firebase/firestore";


const CreateAnnouncement = ({ route, navigation: { goBack } }) => {
  const { id, title } = route.params;
  const [announcement, setAnnouncement] = useState(title);

  const navigation = useNavigation();

  const updateHandler = async () => {

    const announcementRef = doc(db, "announcements", id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(announcementRef, {
      title: announcement
    });
    goBack();
  }

  return (
    <>
      <Appbar.Header style={styles.header} elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Create Announcement"
          titleStyle={{
            color: "black",
            fontSize: 14,
          }}
        />
      </Appbar.Header>
      <View style={(styles.container, { padding: 20 })}>
        <TextInput
          placeholder="Say something"
          value={announcement}
          onChangeText={(text) => setAnnouncement(text)}
          multiline={true}
          numberOfLines={25}
          mode="flat"
          style={{ marginTop: 10 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Button
          buttonColor="#2690CB"
          mode="contained"
          style={{
            borderRadius: 0,
            width: "100%",
            height: 50,
            justifyContent: "center",
          }}
          onPress={updateHandler}
        >
          Save Changes
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "white",
  },
});

export default CreateAnnouncement;
