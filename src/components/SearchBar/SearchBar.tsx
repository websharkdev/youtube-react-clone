import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  IconButton,
  InputAdornment,
  TextField,
  Paper,
  styled,
} from "@mui/material";
import { Search } from "@mui/icons-material";

type Props = {};

const Input = styled(TextField)(({ theme }) => ({
  border: "1px solid #e3e3e3",
  boxShadow: "none",
  mr: { sm: 5 },
}));

export const SearchBar: FC<Props> = (props) => {
  const [searchRequest, setSearchRequest] = useState<string>("");

  console.log(searchRequest);

  return (
    <Paper
      component={"form"}
      onSubmit={() => {}}
      sx={{
        padding: "5px 15px",
        borderRadius: 4,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchRequest}
        onChange={(e) => setSearchRequest(e.target.value)}
      />

      <IconButton type="submit" sx={{ color: "red", padding: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};
