import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import CustomCard from "../../components/Card";
import { Navbar } from "../../components/Navbar";
import "./style.css";
// import { Button } from "@material-ui/core";
// import { Control } from "../../components/Controls";
import { AuthContext } from "../../context/auth/Authstate";
/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageno, setPageno] = useState(0);
  const dataperpage = 12;
  const pagesviewed = pageno * dataperpage;
  const { isAuthenticated } = useContext(AuthContext);
  const fetchdata = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setLoading(false);
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push("/signin");
    }
    fetchdata();
  }, [props.history, isAuthenticated]);

  const dataview = data
    .slice(pagesviewed, pagesviewed + dataperpage)

    .map((country) => {
      return (
        <div style={{ width: "300px", marginRight: "2px" }}>
          {/* {country.name}
          {country.flag} */}
          {/* <CustomCard img={country.flag} name={country.name}>
            <div>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => {
                  addLikedCountry(country);
                }}
              >
                ADD
              </Button>
            </div>
          </CustomCard> */}
          <CustomCard country={country} type="countrylist" />
        </div>
      );
    });

  const noOfPages = Math.ceil(data.length / dataperpage);
  const pageChange = ({ selected }) => {
    setPageno(selected);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "100px",
          marginLeft: "100px",
          marginRight: "100px",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          // display: "flex",
          //   flex: "1 1 80px",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   flexWrap: "wrap",
        }}
      >
        {dataview}
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={noOfPages}
        onPageChange={pageChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};
