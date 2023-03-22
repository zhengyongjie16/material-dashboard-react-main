import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SearchInput from "components/SearchInput";
import DataTable from "examples/Tables/DataTable";
import { getNominatedBooksList, getSearchBooksList } from "pages/tables/data/booksList";
import { useMemo, useState } from "react";

const NominatedBooks = ({ searchBooksByName, booskListInYear }) => {
  const [searchList, setSearchList] = useState();
  const { columns, rows } = useMemo(() => {
    if (searchList) {
      return getSearchBooksList(searchList);
    } else {
      return getNominatedBooksList(booskListInYear);
    }
  }, [booskListInYear, searchList]);

  const onSearch = (value) => {
    searchBooksByName({
      name: value,
    })
      .unwrap()
      .then((res) => {
        setSearchList(res);
      })
      .catch(console.error);
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
            List of Nominated Books for a Genre in a Year
          </MDTypography>
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
