import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      brand: {
        green: { 100: "#008508" }
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
);
export default theme;
