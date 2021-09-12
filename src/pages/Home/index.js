import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

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

  const fetchdata = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      setLoading(false);
      setData(res.data);
      //   console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const dataview = data
    .slice(pagesviewed, pagesviewed + dataperpage)
    .map((country) => {
      return (
        <div>
          {country.name}
          {country.flag}
        </div>
      );
    });

  const noOfPages = Math.ceil(data.length / dataperpage);
  const pageChange = ({ selected }) => {
    setPageno(selected);
  };

  return (
    <>
      {dataview}
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
