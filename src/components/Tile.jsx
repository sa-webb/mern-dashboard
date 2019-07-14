import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./helpers/CardTitle";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  spacing: {
    marginTop: 10
  }
});

const TotalLoads = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/invoices/total")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data.map(number => (
    <Typography className={classes.spacing} component="p" variant="h4">
    Total Loads: {number.count}
    </Typography>
  ));
};

const TotalTons = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/invoices/tons")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  return data.map(count => (
    <Typography className={classes.spacing} component="p" variant="h4">
    {count.total} Tons
    </Typography>
  ));
};

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <TotalLoads />
      <TotalTons />
      <Typography color="textSecondary" className={classes.depositContext}>
        15 July, 2019
      </Typography>
      <div>
        <Link color="primary" href="/">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
