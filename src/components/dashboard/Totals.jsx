import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import moment from "moment";

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
    <Typography className={classes.spacing} component="p" variant="h5">
    Loads: {number.count}
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
    <Typography className={classes.spacing} component="p" variant="h5">
    {count.total} Tons
    </Typography>
  ));
};

const TotalFreightLoads = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/freight/count")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  return data.map(number => (
    <Typography className={classes.spacing} component="p" variant="h5">
    Shipments: {number.count}
    </Typography>
  ));
};

export default function Totals() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>This Week</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {moment().format("MMMM Do")} - {moment().subtract(6, "days").format("MMMM Do")}
      </Typography>
      <TotalLoads />
      <TotalTons />
      <TotalFreightLoads />
      <div>
        <Link color="primary" href="/inventory/invoices">
          View loads
        </Link>
      </div>
    </React.Fragment>
  );
}
