import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
      heading: 'Rubik, sans-serif', 
      body: 'Rubik, sans-serif',    
    },
    fontSizes: {
      xs: "12px", 
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px" 
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      VeryDarkGray: 'hsl(0, 0%, 17%)',
      DarkGray: 'hsl(0, 0%, 59%)',
      red: "#FF5252",
      purple: {
        100: "#A445ED",
      },
    },
  });

export default theme;