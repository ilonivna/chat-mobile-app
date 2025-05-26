import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useState } from "react";

export default function ChatInput() {
  const [isShown, setIsShown] = useState(false);
  const [message, setMessage] = useState("");

  const onMicPress = () => {
    console.warn("Mic pressed");
  };

  const onSendPress = () => {
    console.warn(`Message ${message} sent`);
    setMessage("");
  };

  const handlePress = () => {
    if (!message) {
      onMicPress();
    } else {
      onSendPress();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputCont}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#888"
          multiline
          value={message}
          onChangeText={(text) => {
            setMessage(text);
          }}
        />
        <View style={styles.add}>
          <SimpleLineIcons name="emotsmile" size={24} color="black" />

          <TouchableOpacity onPress={() => setIsShown(!isShown)}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {isShown && (
          <View style={styles.addFile}>
            <MaterialIcons name="add-a-photo" size={28} color="white" />
            <EvilIcons name="paperclip" size={34} color="white" />
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.send} onPress={handlePress}>
        {!message ? (
          <FontAwesome name="microphone" size={24} color="white" />
        ) : (
          <FontAwesome name="send" size={20} color="white" />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  inputCont: {
    backgroundColor: "rgba(255, 255, 255, 0.63)",
    borderRadius: 20,
    flex: 1,
    maxHeight: 200,
    position: "relative",
  },
  input: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    marginRight: 110,
  },
  send: {
    backgroundColor: "#0C6157",
    opacity: 0.8,
    borderRadius: 25,
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 27,
  },

  addFile: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 60,
    right: 0,
    width: 85,
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#0C6157",
    opacity: 0.6,
  },
  add: {
    position: "absolute",
    right: 50,
    display: "flex",
    flexDirection: "row",
    bottom: 15,
    gap: 10,
  },
});
