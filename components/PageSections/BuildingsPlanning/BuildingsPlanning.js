import Tabs from "../../ReusableTab/Tabs";
import buildingsTabs from "./buildingsTabs";
import styles from "./BuildingsPlanning.module.scss";
import React, { useRef, useState } from "react";
import BuildingsContainer from "./BuildingsContainer";
import scrollToContainerTop from "../../../utils/scrollToElementTop";

export const ScrollContext = React.createContext()

const FlatsPlanning = () => {
  const [selected, setSelected] = useState("Новостройки");
  const [currentPage, setCurrentPage] = useState(0);
  const flatsRef = useRef(null);
  const toTopHandler = () => {
    scrollToContainerTop(flatsRef);
  };

  return (
    <div className={styles.container} ref={flatsRef}>
      <div className={styles["content-container"]}>
        <Tabs
          setCurrentPage={setCurrentPage}
          withTitle="Купить квартиру в Краснодаре"
          init={selected}
          callback={setSelected}
          data={buildingsTabs}
        >
          <ScrollContext.Provider value={{toTopHandler}}>
            <BuildingsContainer
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              label={selected}
              // toTopHandler={toTopHandler}
            />
          </ScrollContext.Provider>
        </Tabs>
      </div>
    </div>
  );
};

export default FlatsPlanning;
