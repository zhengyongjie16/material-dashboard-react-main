/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Images

export default function data(booksList) {
  const Books = ({ image, name, id }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{`ID : ${id}`}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Author = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const booksRender =
    booksList?.map((r) => {
      return {
        booksName: <Books image={r.cover} name={r.name} id={r.book_id} />,
        author: <Author title="Manager" description={r.author} />,
        url: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="info"
            fontWeight="medium"
            onClick={() => {
              window.open(r.url);
            }}
          >
            Details link
          </MDTypography>
        ),
        votes: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="success"
            fontWeight="medium"
          >
            {r.votes}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      };
    }) || [];

  return {
    booksColumns: [
      { Header: "books name", accessor: "booksName", width: "45%", align: "left" },
      { Header: "author", accessor: "author", align: "left" },
      { Header: "url", accessor: "url", align: "center" },
      { Header: "votes", accessor: "votes", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    booksRows: booksRender,
  };
}
