import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi!👋</Text>
      <Text style={styles.subheader}>
        I am <Text style={styles.highlightedText}>zenith rajbhandari. </Text>
      </Text>
      <Text>This is my first app.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 70,
    color: "red",
    fontWeight: "900",
    textTransform: "uppercase",
  },
  subheader: {
    textAlign: "center",
    fontSize: 30,
  },
  highlightedText: {
    fontSize: 36,
    textTransform: "uppercase",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
