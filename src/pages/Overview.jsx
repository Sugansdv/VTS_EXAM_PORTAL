import React, { useEffect } from 'react';
import OverviewHeader from "../components/overview/OverviewHeader";
import Overviewrow2 from "../components/overview/Overviewrow2";
import OverviewRow3 from "../components/overview/OverviewRow3";

const Overview = () => {
  useEffect(() => {
    document.title = 'VTS_Exam_Portal | Overview';
  }, []);
  return (
    <div>
      <OverviewHeader />
      <Overviewrow2 />
      <OverviewRow3 />
    </div>
  );
};

export default Overview;
