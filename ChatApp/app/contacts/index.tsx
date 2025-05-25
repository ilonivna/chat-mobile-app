import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

import chatRooms from "../../data/ChatRooms";
import ContactListItem from "@/components/ContactListItem/ContactListItem";



export default function ChatsScreen() {
  return (

    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ContactListItem chatRoom={item} />}
        keyExtractor={(item)=>item.id}
      />

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
