import { useState } from "react";
import { StyleSheet, View } from "react-native";

// vonage
/* import vonage from "../../_common/utils/vonage"; */

// react navigation
import { useNavigation } from "@react-navigation/native";

import axios from 'axios'

// react native paper
import { Appbar, Text, TextInput, Button } from "react-native-paper";

// firstore database
import db from "../../_common/services/database/index";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";


const CreateAnnouncement = ({ navigation: { goBack } }) => {
  const [announcement, setAnnouncement] = useState("");

  const navigation = useNavigation();

  const postAnnouncementHandler = async () => {

    const payload = {
      title: announcement,
      createdAt: Timestamp.fromDate(new Date())
    }

    const newAnnouncementRef = doc(collection(db, "announcements"));
    await setDoc(newAnnouncementRef, payload);



    /* try {
      await axios.post('https://sms-sicat-announcement-production.up.railway.app/send_sms', {
        to: '039516781634',
        announcement,
      })
    } catch (error) {
      console.error(error)
    } */

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
          onPress={postAnnouncementHandler}
        >
          Post Announcement
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
