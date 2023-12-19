import React from "react";
import { PrintMsg } from "../../screens/PrintMsg";

/*
  - Location Component: It can render all the locations in cards form.
  - This is an optional component.
  - I can work but due to time issues, I gave my focused only on important components.
*/

export const Locations = () => {
  return (
    <div className="container">
      <PrintMsg msg={"message"}>Optional</PrintMsg>
    </div>
  );
};
