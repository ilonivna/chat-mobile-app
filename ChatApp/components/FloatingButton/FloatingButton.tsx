import { StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';



export default function FloatingButton() {
const handlePress = () => {
    console.warn(
        "New message"
    )
}

    return (
<TouchableOpacity style={styles.button} onPress={handlePress}>
     
    <AntDesign name="plus" size={24} color="white" />
     </TouchableOpacity>
)}

const styles = StyleSheet.create({
button: {
     backgroundColor: "#0C6157",
    opacity: 0.8,
    borderRadius: 25,
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
}
});