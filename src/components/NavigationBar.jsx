import React, { useContext } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Timer, ShowChart, Person } from "@material-ui/icons";
import { ThemeContext } from "styled-components";

const useStyles = (theme) =>
  makeStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.blackCoffee,
      color: theme.bittersweet,
    },
  });

const NavigationBar = ({ currentTab, setTab }) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles(theme)();

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
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
