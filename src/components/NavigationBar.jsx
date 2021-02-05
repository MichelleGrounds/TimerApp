import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const NavigationBar = ({ currentTab, setTab }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Timer" />
        <Tab label="Contraction Graph" />
      </Tabs>
    </Paper>
  );
};

export default NavigationBar;
