import React from "react";

export const styler = {
  "0":{
    font: "A font!!!"
  },
  "1":{
    background: "#eee"
  },
  "2":{
    background:"#000",
    color:"#fff"
  }
};

const StyleContext = React.createContext(); //passing initial value



export default StyleContext;