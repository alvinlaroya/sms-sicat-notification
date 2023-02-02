import { useState } from "react";
import { StyleSheet, View } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, Text, TextInput, Button } from "react-native-paper";

//components
import Students from "../../components/student/Students";

const CreateAnnouncement = () => {
  const [search, setSearch] = useState("");


  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={styles.header} elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Mobile-Based Notification System for Sicat College"
          titleStyle={{
            color: "black",
            fontSize: 14,
          }}
        />
      </Appbar.Header>
      <View
        style={
          (styles.container,
          {
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          })
        }
      >
        <Text variant="titleSmall" style={{ marginTop: 10 }}>
          List of Students
        </Text>
        <Button
          buttonColor="#63A86E"
          icon="plus"
          mode="contained"
          style={{
            borderRadius: 10,
            height: 40,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("AddStudentScreen")}
        >
          Add Student
        </Button>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          placeholder={"Search by Student First Name"}
          value={search}
          onChangeText={setSearch}
          mode="outlined"
          outlineColor="transparent"
          activeOutlineColor="black"
          theme={{ roundness: 10 }}
          left={<TextInput.Icon icon="magnify" iconColor="black" size={25} />}
          style={{ marginTop: 10, backgroundColor: "#d2d3d6" }}
        />
      </View>
      <View style={{ flex: 1, paddingVertical: 10 }}>
        <Students search={search} />
      </View>
    </>
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
