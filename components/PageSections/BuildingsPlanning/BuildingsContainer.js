import React, { useContext } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../../HomeCard/HomeCard";
import GridContainer from "../../GridContainer/GridContainer";
import Pagination from "../../PaginTest/Pagination";
import { ScrollContext } from "./BuildingsPlanning";

const BuildingsContainer = ({
  label,
  currentPage,
  setCurrentPage,
  // toTopHandler,
}) => {
  const props = useContext(ScrollContext)
  console.log(props)
  const { data, error, loading } = useSelector((state) => state.buildings);
  const dataForTab = data.filter((item) => {
    return item.type === label;
  });
  return (
    <>
      <GridContainer lessThanFour={dataForTab.length <= 4}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={dataForTab}
          Component={HomeCard}
          toTopHandler={props.toTopHandler}
        />
      </GridContainer>
    </>
  );
};

export default BuildingsContainer;
