import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ChatListItem from "@/components/ChatListItem";
import chatRooms from "../../data/ChatRooms";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ChatsScreen() {
  return (

    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
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
