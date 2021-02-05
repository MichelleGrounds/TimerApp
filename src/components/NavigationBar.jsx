import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blackCoffee, bittersweet } from "../colors";
import { Timer, ShowChart, Person } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: blackCoffee,
    color: bittersweet,
  },
});

const NavigationBar = ({ currentTab, setTab }) => {
  const classes = useStyles();

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor={bittersweet}
        centered
      >
        <Tab data-testid="timer" icon={<Timer />} />
        <Tab data-testid="contraction-graph" icon={<ShowChart />} />
        <Tab data-testid="account" icon={<Person />} />
      </Tabs>
    </Paper>
  );
};

export default NavigationBar;
