import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 50,
    alignItems: "center",
    backgroundColor: colors.backgroundPrimary,
    gap: 30,
  },
  contain: {
    width: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    width: "50%",
    textAlign: "center",
    objectFit: "contain",
    marginBottom: 20
  },
  input: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: colors.backgroundElevated,
    borderRadius: 6,
    marginBottom: 10
  },

  button: {
    width: "100%",
    borderRadius: 6,
    height: 50,
    backgroundColor: colors.accentBrand,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonText: {
    color: colors.backgroundElevated
  }
});
