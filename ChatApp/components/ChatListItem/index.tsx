import { ChatRoom } from "@/types";
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import moment from 'moment';


const formatMessageTime = (timestamp: string) => {
  const messageDate = moment(timestamp);
  const now = moment();

  if (messageDate.isSame(now, 'day')) {
    return 'Today';
  } else if (messageDate.isSame(now.clone().subtract(1, 'day'), 'day')) {
    return 'Yesterday';
  } else if (now.diff(messageDate, 'days') < 7) {
    return messageDate.format('dddd'); 
  } else {
    return messageDate.format('DD/MM/YYYY'); 
  }
};



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
          <Text numberOfLines={2} style={styles.content}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.time}>{formatMessageTime(chatRoom.lastMessage.createdAt)}</Text>
      
    </View>
  );
};

export default ChatListItem;
