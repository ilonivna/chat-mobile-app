export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};


export type RootStackParamList = {
  "(tabs)": undefined;
  modal: undefined;
  ChatRoom: {
    id: string;
    user: User;
  };
  modalAvatar: { name: string };
  "chatroom/[id]": {
    name: string;
    avatar: string;
  };
  "+not-found": undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
};

export type Message = {
user?: any;
  id: string;
  content: string;
  createdAt: string;
};

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
};
