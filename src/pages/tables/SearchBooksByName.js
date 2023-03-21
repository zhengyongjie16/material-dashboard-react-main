import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SearchInput from "components/SearchInput";
import DataTable from "examples/Tables/DataTable";
import getBookList from "pages/tables/data/booksList";
import { useMemo } from "react";

const SearchBooksByName = ({ searchBooksByName, searchBooksByNameList, booskListInYear }) => {
  const { booksColumns, booksRows } = useMemo(() => {
    if (searchBooksByNameList) {
      return getBookList(searchBooksByNameList);
    } else {
      return getBookList(booskListInYear);
    }
  }, [searchBooksByNameList]);

  const onSearch = (value) => {
    searchBooksByName({
      name: value,
    });
  };

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
          <MDTypography variant="h6" color="white">
            Book Information
          </MDTypography>
          <MDBox pr={1} sx={{}}>
            <SearchInput
              placeholder="Search here"
              inputProps={{ "aria-label": "search google maps" }}
              onSearch={onSearch}
            />
          </MDBox>
        </MDBox>

        <MDBox pt={3}>
          <DataTable
            table={{ columns: booksColumns, rows: booksRows }}
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

export default SearchBooksByName;
