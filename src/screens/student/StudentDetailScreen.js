import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

import db from "../../_common/services/database/index";
import { doc, updateDoc } from "firebase/firestore";

// react native paper
import {
  Appbar,
  Avatar,
  Text,
  TextInput,
  Button,
  Checkbox,
} from "react-native-paper";

const avatarUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuNYMYNaRi00Ov27G9c0fNpMJP5NQJ06A6eYNGDPMpfvDvfOPuuA13FcP9ftMIIunqdM&usqp=CAU";

const StudentDetailScreen = ({ route, navigation: { goBack } }) => {
  const [student, setStudent] = useState(route.params);

  const handleInputChange = (name, value) => {
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateHandler = async () => {
    const studentRef = doc(db, "students", student.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(studentRef, {
      ...student
    });
    goBack();
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={styles.header} elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Student Details"
          titleStyle={{
            color: "black",
            fontSize: 14,
          }}
        />
      </Appbar.Header>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Avatar.Image size={90} source={{ uri: avatarUrl }} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          placeholder={"First Name"}
          value={student.firstName}
          mode="outlined"
          onChangeText={(value) => handleInputChange("firstName", value)}
          outlineColor="transparent"
          activeOutlineColor="black"
          theme={{ roundness: 10 }}
          style={{ marginTop: 10, backgroundColor: "#d2d3d6" }}
        />
        <TextInput
          placeholder={"Middle Name"}
          value={student.middleName}
          mode="outlined"
          onChangeText={(value) => handleInputChange("middleName", value)}
          outlineColor="transparent"
          activeOutlineColor="black"
          theme={{ roundness: 10 }}
          style={{ marginTop: 10, backgroundColor: "#d2d3d6" }}
        />
        <TextInput
          placeholder={"Last Name"}
          value={student.lastName}
          mode="outlined"
          onChangeText={(value) => handleInputChange("lastName", value)}
          outlineColor="transparent"
          activeOutlineColor="black"
          theme={{ roundness: 10 }}
          style={{ marginTop: 10, backgroundColor: "#d2d3d6" }}
        />
        <TextInput
          placeholder={"Address"}
          value={student.address}
          mode="outlined"
          onChangeText={(value) => handleInputChange("address", value)}
          outlineColor="transparent"
          activeOutlineColor="black"
          theme={{ roundness: 10 }}
          style={{ marginTop: 10, backgroundColor: "#d2d3d6" }}
        />
        <TextInput
          placeholder={"Email"}
          value={student.email}
          mode="outlined"
          onChangeText={(value) => handleInputChange("email", value)}
          outlineColor="transparent"
          activeOutlineColor="black"
          theme={{ roundness: 10 }}
          style={{ marginTop: 10, backgroundColor: "#d2d3d6" }}
        />
        <TextInput
          placeholder={"Phone"}
          value={student.phone}
          mode="outlined"
          onChangeText={(value) => handleInputChange("phone", value)}
          keyboardType="numeric"
          outlineColor="transparent"
          activeOutlineColor="black"
          theme={{ roundness: 10 }}
          left={<TextInput.Icon icon="phone" iconColor="black" size={25} />}
          style={{ marginTop: 10, backgroundColor: "#d2d3d6" }}
        />
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Checkbox
            status={student.isReceiveSms ? "checked" : "unchecked"}
            name="isReceiveSms"
            onPress={() =>
              handleInputChange("isReceiveSms", !student.isReceiveSms)
            }
          />
          <Text style={{ marginTop: 8 }}>Received SMS Notification {student.isReceiveSms}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Button
          buttonColor="#63A86E"
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "white",
  },
});

export default StudentDetailScreen;
