import ChatInput from "@/components/ChatInput/ChatInput";
import ChatMessageList from "@/components/ChatMessageList/ChatMessageList";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ChatRoomScreen() {
  // const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>

      <ChatMessageList />
      <ChatInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece5dd",
  },
});