import { useState } from "react";
import { View } from "react-native";

import moment from "moment/moment";

// react native paper
import {
  Menu,
  Card,
  IconButton,
  Paragraph,
} from "react-native-paper";

// react navigation
import { useNavigation } from "@react-navigation/native";

// components
import SicatAvatar from "../avatar/SicatAvatar";

import db from "../../_common/services/database/index";
import { doc, deleteDoc } from "firebase/firestore";

const LeftContent = (props) => <SicatAvatar {...props} size={30} />;

const AnnouncementList = ({ id, title, createdAt }) => {
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const editAnnouncementHandler = () => {
    navigation.navigate('EditAnnouncementScreen', {
      id, title, createdAt
    });
    closeMenu();
  };

  const deleteAnnouncementHandler = async () => {
    await deleteDoc(doc(db, "announcements", id));
    closeMenu();
  };

  const moreOptions = (props) => (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <IconButton
          icon="dots-vertical"
          {...props}
          size={15}
          style={{ marginBottom: 15 }}
          onPress={openMenu}
        />
      }
    >
      <Menu.Item
        onPress={editAnnouncementHandler}
        leadingIcon="pencil-outline"
        title="Edit Announcement"
        dense={true}
      />
      <Menu.Item
        onPress={deleteAnnouncementHandler}
        leadingIcon="delete-outline"
        title="Delete Announcement"
        dense={true}
      />
    </Menu>
  );

  return (
    <View>
      <Card
        style={{ backgroundColor: "white", borderRadius: 0, borderBottomWidth: 1, borderColor: "#eee" }}
      >
        <Card.Title
          title={`Sicat College • ${moment.unix(createdAt).format('MMMM DD YYYY, h:mm:ss a')}`}
          left={LeftContent}
          right={moreOptions}
          titleStyle={{ fontSize: 13 }}
        />
        <Card.Content>
          <Paragraph style={{ fontSize: 11 }}>{title}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AnnouncementList;
