/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import getBookList from "pages/tables/data/booksList";
import projectsTableData from "pages/tables/data/projectsTableData";
import {
  useGetNominatedBooksQuery,
  useSearchBooksByNameMutation,
} from "../../redux/services/books/books";
import NominatedBooks from "./NominatedBooks";
import SearchBooksByName from "./SearchBooksByName";

function Tables() {
  const { data: booskListInYear } = useGetNominatedBooksQuery({
    genre: "romance",
    year: 2020,
  });
  const [searchBooksByName, { data: searchBooksByNameList }] = useSearchBooksByNameMutation();
  const { booksColumns, booksRows } = getBookList(booskListInYear);
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <NominatedBooks columns={booksColumns} rows={booksRows} />
          <SearchBooksByName
            searchBooksByName={searchBooksByName}
            searchBooksByNameList={searchBooksByNameList}
            booskListInYear={booskListInYear}
          />
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
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
