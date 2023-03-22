import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import { useState } from "react";

function SearchInput({ placeholder, inputProps, onSearch }) {
  const [value, setValue] = useState();

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 200, height: 40 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={inputProps}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => onSearch(value)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  onSearch: PropTypes.func,
};

SearchInput.defaultProps = {
  placeholder: "",
  inputProps: {},
  onSearch: () => console.log("search"),
};

export default SearchInput;
