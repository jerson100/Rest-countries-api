import React from "react";
import { MainStyle } from "./mainLayout.style";
import NavigationHeader from "../../common/NavigationHeader";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationHeader />
      <MainStyle>{children}</MainStyle>
    </>
  );
};

export default MainLayout;
