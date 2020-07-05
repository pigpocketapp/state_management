import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import { observer } from "mobx-react"
import {appState, handleChange} from "./state-mobx"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default observer(() => { //mobx observer HoC / decorator subscribes React components automatically to any observables that are used during render. 
  const classes = useStyles(); //lets use state without creating classes

  // Declare a new state variable, which we'll call "value"
  // const [value, setValue] = React.useState(0); //turning value into observable component


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={appState.count}
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
          <p>You clicked {appState.count} times</p>
          <button onClick={() => handleChange()}> 
    Click me
  </button> //incrementing the value everytime the button is clicked
        </Tabs>
      </AppBar>
    </div>
  );
});
