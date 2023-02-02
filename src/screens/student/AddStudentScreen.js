import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, Text, TextInput, Button, Checkbox } from "react-native-paper";

// firstore database
import db from "../../_common/services/database/index";
import { collection, doc, setDoc } from "firebase/firestore";


const CreateAnnouncement = ({ navigation: { goBack } }) => {
  const [student, setStudent] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    isReceiveSms: true,
  });

  const handleInputChange = (name, value) => {
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveStudentHandler = async () => {
    const newStudentRef = doc(collection(db, "students"));
    await setDoc(newStudentRef, student);
    goBack();
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={styles.header} elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Add New Student"
          titleStyle={{
            color: "black",
            fontSize: 14,
          }}
        />
      </Appbar.Header>
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
          <Text style={{ marginTop: 8 }}>Received SMS Notification</Text>
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
          onPress={saveStudentHandler}
        >
          Save Student
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

export default CreateAnnouncement;
