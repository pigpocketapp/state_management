import React from "react";
import {observer} from "mobx-react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default observer(() => {
  const classes = useStyles();
  // Declare a new state variable, which we'll call "value"
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    //console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Home" value={"/"} component={Link} to={"/"} />
          <Tab
            label="Contact Us"
            value={"/contact"}
            component={Link}
            to={"/contact"}
          />
          <Tab label="FAQ" value={"/faq"} component={Link} to={"/faq"} />
          <p>You clicked {value} times</p>
          <button onClick={() => setValue(value + 1)}>
    Click me
  </button>
        </Tabs>
      </AppBar>
    </div>
  );
});
