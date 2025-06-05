import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ChatListItem from "@/components/ChatListItem";
import chatRooms from "../../data/ChatRooms";
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingButton from "@/components/FloatingButton/FloatingButton";

import { useAuthenticator } from '@aws-amplify/ui-react-native';

export default function ChatsScreen() {
  const { user } = useAuthenticator();
  console.log(user);
  return (

    <View style={styles.container}>
      <Text style={{color: 'black'}}>Hello {user?.username}</Text>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item)=>item.id}
      />
      <FloatingButton/>
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
