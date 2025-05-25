import { StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";



export default function FloatingButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/contacts"
    });
  }
  

    return (
<TouchableOpacity style={styles.button} onPress={handleClick}>
     
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