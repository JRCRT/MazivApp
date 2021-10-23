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

export const projectContainerStyle = (props) =>
  StyleSheet.create({
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
    hiddenItem: {
      width: props.WIDTH / props.numColumn,
      height: 100,
      padding: 3,
      backgroundColor: "transparent",
      borderRadius: 10,
      margin: 3,
      flex: 1,
    },
  });

export const projectStyle = StyleSheet.create({
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

  ellipsis: {
    right: 10,
  },

  addButton: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
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

  progressCircleText: {
    fontSize: 8,
    color: "black",
  },

  projectNameText: {
    fontSize: 17,
    color: "black",
  },

  projectDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
    paddingVertical: 5,
    paddingHorizontal: 4,
    justifyContent: "space-between",
    width: "100%",
  },

  projectDetailsRow: {
    justifyContent: "space-evenly",
    height: "100%",
  },

  projectDetails: {
    flexDirection: "row",
    alignItems: "center",
  },

  bottomSheetContainer: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 10,
    height: 380,
  },

  assigneeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  addMemberButton: {
    paddingHorizontal: 12,
    marginBottom: 20,
  },
});

export const taskStyle = StyleSheet.create({
  taskContainer: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  taskHeader: {
    borderColor: "gray",
    backgroundColor: "white",
    width: "100%",
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "flex-end",
    marginVertical: 15,
  },
  taskBody: {},
  task: {
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    marginBottom: 10,
    paddingHorizontal: 5,
    overflow: "hidden",
  },
  percentageContainer: {},
  taskDetails: {
    height: "100%",
    justifyContent: "space-evenly",
    marginLeft: 6,
  },
  taskInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
  },
  date: {
    alignItems: "center",
    marginRight: 5,
  },
  dateTitleText: {
    fontSize: 8,
  },
  dateText: {
    fontSize: 10,
  },
  addButton: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  panelHeader: {
    alignItems: "center",
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
  logo: {
    width: 66,
    height: 58,
  },
  bottomSheet: {
    height: 360,
    backgroundColor: "white",
  },
  bottomSheetContainer: {
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
