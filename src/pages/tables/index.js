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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import projectsTableData from "pages/tables/data/projectsTableData";
import {
  useGetNominatedBooksQuery,
  useSearchBooksByNameMutation,
} from "../../redux/services/books/books";
import BooksInformation from "./BooksInformation";
import ProjectsTable from "./ProjectsTable";

function Tables() {
  const { data: nominatedBooskListInYear } = useGetNominatedBooksQuery({
    genre: "romance",
    year: 2020,
  });
  const [searchBooksByName] = useSearchBooksByNameMutation();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <BooksInformation
            searchBooksByName={searchBooksByName}
            nominatedBooskListInYear={nominatedBooskListInYear}
          />
          <ProjectsTable columns={pColumns} rows={pRows} />
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
