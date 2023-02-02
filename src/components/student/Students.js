import { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

// components
import StudentList from "./StudentList";

// firstore database
import db from "../../_common/services/database/index";
import { collection, query, onSnapshot } from "firebase/firestore";

const Students = ({ search }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "students"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const studentsList = [];
        querySnapshot.forEach((doc) => {
          studentsList.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setStudents(studentsList)
      });

      return () => {
        unsubscribe();
      }
    }



    fetchData();
  }, [])

  const filteredStudents = (keyword) => {
    const searchTerm = keyword.toLowerCase();
    return students.filter((value) => {
      return value.firstName
        .toLowerCase()
        .match(new RegExp(searchTerm, "g")) /*  ||
        value.middleName.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.lastName.toLowerCase().match(new RegExp(searchTerm, "g")) */;
    });
  };

  const renderItem = ({ item }) => (
    <StudentList
      id={item.id}
      firstName={item.firstName}
      middleName={item.middleName}
      lastName={item.lastName}
      isReceiveSms={item.isReceiveSms}
      email={item.email}
      address={item.address}
      phone={item.phone}
      key={item.id}
    />
  );

  return (
    <View style={styles.container}>
      {filteredStudents(search).length > 0 ? (
        <FlatList
          data={filteredStudents(search)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ marginTop: 20 }}>No Data</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  createAnnouncementSection: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
  },
});

export default Students;
