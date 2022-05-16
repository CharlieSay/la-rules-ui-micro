import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Breaks = () => {
  const [swipeableViewIndexValue, setSwipeableViewIndexValue] =
    React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSwipeableViewIndexValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setSwipeableViewIndexValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: `100%` }}>
      <AppBar position="static">
        <Tabs
          value={swipeableViewIndexValue}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Breaks" {...a11yProps(0)} />
          <Tab label="Campaigns" {...a11yProps(1)} />
          <Tab label="Sales Area" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={"x"}
        index={swipeableViewIndexValue}
        onChangeIndex={handleChangeIndex}
      >
        <div>
          <h1>Break Table Component</h1>
        </div>
        <div>
          <h1>Campaigns Table Component</h1>
        </div>
        <div>
          <h1>Sales Area Table Component</h1>
        </div>
      </SwipeableViews>
    </Box>
  );
};

export default Breaks;
