import { ChatRoom } from "@/types";
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />

        <View style={styles.midCont}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.content}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      {/* <Text style={styles.time}>{chatRoom.lastMessage.createdAt}</Text> */}
      <Text style={styles.time}>Today</Text>
    </View>
  );
};

export default ChatListItem;
