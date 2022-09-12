import { FC } from "react";
import { Stack, styled } from "@mui/material";

import { logo } from "../../utils/constants";
import { Link } from "react-router-dom";
import { SearchBar } from "..";

type Props = {};

const Root = styled(Stack)(({ theme }) => ({
  position: "sticky",
  top: 0,
  background: "#000",
  zIndex: 5,
}));

export const Navbar: FC<Props> = (props) => {
  return (
    <Root
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt={"Logo"} height={45} />
        Home
      </Link>

      <SearchBar />
    </Root>
  );
};
