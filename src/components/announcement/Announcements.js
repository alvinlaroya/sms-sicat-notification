import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import axios from "axios";

// components
import AnnouncementList from "../announcement/AnnouncementList";


import db from "../../_common/services/database/index";
import { collection, query, onSnapshot } from "firebase/firestore";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "announcements"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const announcementsList = [];
        querySnapshot.forEach((doc) => {
          announcementsList.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setAnnouncements(announcementsList)
      });

      return () => {
        unsubscribe();
      }
    }

    fetchData();
  }, [])

  const renderItem = ({ item }) => (
    <AnnouncementList
      key={item.ic}
      id={item.id}
      createdAt={item.createdAt}
      title={item.title}
    />
  );

  return announcements.length > 0 ? (
    <FlatList
      data={announcements}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  ) : (
    <ActivityIndicator animating={true} />
  );
};

export default Announcements;
