import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2, 
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

 
});

export default styles;
