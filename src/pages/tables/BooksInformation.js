import ListIcon from "@mui/icons-material/List";
import { Card, Grid, Menu, MenuItem } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SearchInput from "components/SearchInput";
import DataTable from "examples/Tables/DataTable";
import { getBooksListMutation, getNominatedBooksList } from "pages/tables/data/booksList";
import { useMemo, useState } from "react";
import { useGetAwardedBooksOfYearMutation } from "redux/services/books/books";

const NominatedBooks = ({ searchBooksByName, nominatedBooskListInYear }) => {
  const [getAwardedBooksOfYear] = useGetAwardedBooksOfYearMutation();
  const [menu, setMenu] = useState(null);
  const [booksList, setBooksList] = useState();

  const tabelTitlesList = ["Nominated Books for a Genre in a Year", "Awarded Books of a Year"];
  const [tabelTitles, setTabelTitles] = useState(tabelTitlesList[0]);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const getNewList = () => {
    getAwardedBooksOfYear({
      year: 2021,
    })
      .unwrap()
      .then((res) => {
        setBooksList(res);
        setTabelTitles(tabelTitlesList[1]);
        setMenu(null);
      })
      .catch(console.error);
  };

  const { columns, rows } = useMemo(() => {
    if (booksList) {
      return getBooksListMutation(booksList);
    } else {
      return getNominatedBooksList(nominatedBooskListInYear);
    }
  }, [nominatedBooskListInYear, booksList]);

  const onSearch = (value) => {
    searchBooksByName({
      name: value,
    })
      .unwrap()
      .then((res) => {
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
      <MenuItem onClick={getNewList}>Awarded Books of a Year</MenuItem>
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
