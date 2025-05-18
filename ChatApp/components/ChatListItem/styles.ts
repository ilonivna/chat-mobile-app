import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
avatar: {
    borderRadius: '50%',
    width: 50,
    height: 50,
   marginRight: 10,
},
container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: "space-between",
     padding: 10,
},
leftCont: {
    flexDirection: 'row',
},
name: {
fontSize: 16,
fontWeight: 'bold',
},
content: {
fontSize: 16,
color: 'dark-gray',
maxWidth: 250,
},
time: {
fontSize: 16,
color: 'gray',
},
midCont: {
justifyContent: 'space-around',
}
});

export default styles;