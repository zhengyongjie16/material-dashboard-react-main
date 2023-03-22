import ListIcon from "@mui/icons-material/List";
import { Card, Grid, Menu, MenuItem } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SearchInput from "components/SearchInput";
import DataTable from "examples/Tables/DataTable";
import { getBooksListMutation, getNominatedBooksList } from "pages/tables/data/booksList";
import { useEffect, useMemo, useState } from "react";

const NominatedBooks = ({ searchBooksByName, getNominatedBooks, getAwardedBooksOfYear }) => {
  const [menu, setMenu] = useState(null);
  const [booksList, setBooksList] = useState(null);
  const [type, setType] = useState(1);

  const [tabelTitles, setTabelTitles] = useState("Nominated Books for a Genre in a Year");

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  useEffect(() => {
    type === 1 &&
      getNominatedBooks({
        genre: "romance",
        year: 2020,
      })
        .unwrap()
        .then((res) => {
          setBooksList(res);
          setTabelTitles("Nominated Books for a Genre in a Year");
          setMenu(null);
        })
        .catch(console.error);

    type === 2 &&
      getAwardedBooksOfYear({
        year: 2021,
      })
        .unwrap()
        .then((res) => {
          setBooksList(res);
          setTabelTitles("Awarded Books of a Year");
          setMenu(null);
        })
        .catch(console.error);
  }, [getAwardedBooksOfYear, getNominatedBooks, type]);

  const { columns, rows } = useMemo(() => {
    if (booksList) {
      return type === 1 ? getNominatedBooksList(booksList) : getBooksListMutation(booksList);
    } else {
      return {
        columns: [],
        rows: [],
      };
    }
  }, [booksList, type]);

  const onSearch = (value) => {
    searchBooksByName({
      name: value,
    })
      .unwrap()
      .then((res) => {
        setType(3);
        setBooksList(res);
      })
      .catch(console.error);
  };

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={() => setMenu(null)}
    >
      <MenuItem onClick={() => setType(1)}>Nominated Books for a Genre in a Year</MenuItem>
      <MenuItem onClick={() => setType(2)}>Awarded Books of a Year</MenuItem>
    </Menu>
  );

  return (
    <Grid item xs={12}>
      <Card>
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <MDBox sx={{ display: "flex" }}>
            <MDTypography variant="h6" color="white">
              {tabelTitles}
            </MDTypography>
            <MDBox px={2} color="white">
              <ListIcon
                sx={{ cursor: "pointer", fontWeight: "bold" }}
                fontSize="medium"
                onClick={openMenu}
              />
            </MDBox>
            {renderMenu}
          </MDBox>
          <MDBox pr={1}>
            <SearchInput
              placeholder="Search here"
              inputProps={{ "aria-label": "search google maps" }}
              onSearch={onSearch}
            />
          </MDBox>
        </MDBox>

        <MDBox pt={3}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
        </MDBox>
      </Card>
    </Grid>
  );
};

export default NominatedBooks;
