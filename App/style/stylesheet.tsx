import { StyleSheet } from "react-native";
export const primaryColor = "#3C5DC4";

export const globalStyle = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    borderColor: "black",
  },
  textBoxDate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    padding: 8,
    marginBottom: 4,
  },
  textBox: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    padding: 8,
    marginBottom: 4,
  },
});

export const projectStyle = (props) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-evenly",
    },

    cardContainer: {
      marginTop: 20,
      justifyContent: "space-evenly",
    },

    itemHeader: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 4,
    },

    itemBody: {
      flex: 3,
      alignItems: "center",
      paddingVertical: 4,
      width: "100%",
    },

    item: {
      width: props.WIDTH / props.numColumn,
      height: 130,
      padding: 3,
      backgroundColor: "gray",
      borderRadius: 10,
      margin: 5,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      shadowColor: "black",
      shadowOffset: { width: 10, height: 10 },
      elevation: 5,
    },

    ellipsis: {
      right: 10,
    },

    addButton: {
      position: "absolute",
      margin: 16,
      right: 0,
      bottom: 0,
    },

    hiddenItem: {
      width: props.WIDTH / props.numColumn,
      height: 100,
      padding: 3,
      backgroundColor: "transparent",
      borderRadius: 10,
      margin: 3,
      flex: 1,
    },

    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: "#FF6347",
      alignItems: "center",
      marginVertical: 7,
    },
    panelHeader: {
      alignItems: "center",
    },

    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#00000040",
      marginBottom: 10,
    },
    header: {
      backgroundColor: "#FFFFFF",
      shadowColor: "#333333",
      shadowOffset: { width: -1, height: -3 },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    textTitle: {
      fontSize: 9,
      color: "black",
      marginLeft: 2,
    },
  });
