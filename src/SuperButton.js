import React from "react";

export default ({ atext, alertText }) => (
  <button onClick={alert(alertText)}>{atext}</button>
);
