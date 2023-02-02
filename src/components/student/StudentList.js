import { StyleSheet } from "react-native";

// react native paper
import { List, Avatar, IconButton } from "react-native-paper";

// react navigation
import { useNavigation } from "@react-navigation/native";

const Students = ({ id, firstName, middleName, lastName, address, isReceiveSms, email, phone }) => {
  const navigation = useNavigation();

  const detailHandler = () => {
    navigation.navigate('StudentDetailScreen', {
      id, firstName, middleName, lastName, address, isReceiveSms, email, phone
    });
  }

  return (
    <List.Item
      title={`${firstName} ${middleName} ${lastName}`}
      description={address}
      style={{ paddingVertical: 0, paddingHorizontal: 5 }}
      left={(props) => (
        <Avatar.Image
          {...props}
          size={35}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuNYMYNaRi00Ov27G9c0fNpMJP5NQJ06A6eYNGDPMpfvDvfOPuuA13FcP9ftMIIunqdM&usqp=CAU",
          }}
        />
      )}
      right={(props) => (
        <IconButton
          {...props}
          size={20}
          onPress={detailHandler}
          icon="dots-vertical"
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  //
});

export default Students;
