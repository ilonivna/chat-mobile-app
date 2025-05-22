import { FlatList, StyleSheet, View } from "react-native";
import ChatMessage from "../ChatMessage/ChatMessage";
import {ChatData} from "../../data/Chats";

export default function ChatMessageList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatData.messages}
        renderItem={({ item }) => <ChatMessage message={item} data={ChatData}/>}
        keyExtractor={(item) => item.id}
        //inverted
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ece5dd", 
    flex: 1,
  },
  content: {
    padding: 10,
  },
});
