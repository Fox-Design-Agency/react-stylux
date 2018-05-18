import React from "react";

export const theme = {
  "0":{
    background: "#fff",
    secondaryBackground: "#eee"
  },
  "1":{
    background: "#eee",
    secondaryBackground: "#000"
  },
  "2":{
    background:"#000",
    secondaryBackground:"#eee",
    color:"#fff"
  }
};

const ThemeContext = React.createContext(); //passing initial value



export default ThemeContext;