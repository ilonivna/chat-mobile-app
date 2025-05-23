import { Chat } from "@/data/Chats";
import { Message } from "@/types";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

export type ChatMessageProps = {
message: Message;
data: Chat;
}

export default function ChatMessage({ message, data }: ChatMessageProps) {
  const isMe = message.user.id === "u1"; // dummy

  return (
    <View style={[styles.container, isMe ? styles.containerMe : styles.containerOther]}>
      <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleOther]}>
        <Text style={[styles.text, isMe ? styles.textMe : styles.textOther]}>
          {message.content}
        </Text>
        <Text style={styles.date}>{moment(message.createdAt).format('LT')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
color: 'grey',
fontSize: 12,
  },
  container: {
    marginVertical: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  containerMe: {
    justifyContent: "flex-end",
  },
  containerOther: {
    justifyContent: "flex-start",
  },
  bubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 16,
  },
  bubbleMe: {
    backgroundColor: "#dcf8c6", // WhatsApp green
    borderTopRightRadius: 0,
  },
  bubbleOther: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderColor: "#e1e1e1",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
  textMe: {
    color: "#000",
  },
  textOther: {
    color: "#000",
  },
});