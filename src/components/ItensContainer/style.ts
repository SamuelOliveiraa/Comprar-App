import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundElevated,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25
  },
  contentHeader: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  cleanButton: {
    marginLeft: "auto",
    color: colors.textMuted
  },
  emptyComponent: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: colors.textMuted
  }
});
