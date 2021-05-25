import * as React from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NUMCOLUMN = 2;
const WIDTH = Dimensions.get("window").width;

const FormatData = (File, numColumn) => {
  const totalRows = Math.floor(File.length / numColumn);
  let totalLastRow = File.length - totalRows * numColumn;
  while (totalLastRow !== 0 && totalLastRow !== numColumn) {
    File.push({ id: "blank", empty: true });
    totalLastRow++;
  }
  return File;
};

const files = [
  {
    id: 1,
    name: "Project 1",
  },
  {
    id: 2,
    name: "Project 2",
  },
  {
    id: 3,
    name: "Project 3",
  },
];

const Files = () => {
  const renderFiles = ({ item }) => {
    if (item.empty) {
      return <View style={styles.hiddenItem} />;
    }
    return (
      <View style={styles.folder}>
        <MaterialCommunityIcons
          style={{ margin: -12, padding: 0 }}
          name="folder"
          size={120}
          color="gray"
        />
        <Text style={{ fontSize: 14 }}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FormatData(files, NUMCOLUMN)}
        renderItem={renderFiles}
        keyExtractor={(item, index) => item.id}
        numColumns={NUMCOLUMN}
      />
    </View>
  );
};

export default Files;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  folder: {
    width: WIDTH / NUMCOLUMN,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  hiddenItem: {
    width: WIDTH / NUMCOLUMN,
    height: 100,
    padding: 3,
    backgroundColor: "transparent",
    borderRadius: 10,
    margin: 3,
    flex: 1,
  },
});
