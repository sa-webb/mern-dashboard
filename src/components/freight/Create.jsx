import React from "react";
import axios from "axios";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(4)
  },
  textField: {
    flexBasis: 400,
    width: 200
  },
  buttonMargin: {
    margin: theme.spacing(3),
    width: 100
  },
  paper: {
    flex: 1
  }
}));

const initialState = {
  id: "",
  date: "",
  vendor: "",
  customer: "",
  product_order_id: "",
  q1: "",
  d1: "",
  am1: "",
  q2: "",
  d2: "",
  am2: "",
  q3: "",
  d3: "",
  am3: "",
  q4: "",
  d4: "",
  am4: "",
  total: ""
};

export function CreateFreightInvoice() {
  const classes = useStyles();

  const [
    {
      id,
      vendor,
      customer,
      product_order_id,
      q1,
      d1,
      am1,
      q2,
      d2,
      am2,
      q3,
      d3,
      am3,
      q4,
      d4,
      am4,
      total
    },
    setState
  ] = React.useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const onSubmit = e => {
    e.preventDefault();
    const newInvoice = {
      id: id,
      date: selectedDate,
      vendor: vendor,
      customer: customer,
      product_order_id: product_order_id,
      q1: q1,
      d1: d1,
      am1: am1,
      q2: q2,
      d2: d2,
      am2: am2,
      q3: q3,
      d3: d3,
      am3: am3,
      q4: q4,
      d4: d4,
      am4: am4,
      total: total
    };
    axios
      .post("http://localhost:5000/invoices/add", newInvoice)
      .then(clearState);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <Paper className={classes.paper}>
          <TextField
            id="outlined-adornment-name"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            name="id"
            label="Inv. #"
            value={id}
            onChange={onChange}
          />

          <TextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Vendor"
            name="vendor"
            value={vendor}
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>
            }}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.margin}
              id="mui-pickers-date"
              label="Date picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          
          <TextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Customer"
            name="customer"
            value={customer}
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>
            }}
          />
          <TextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            name="product_order_id"
            label="P.O. #"
            value={product_order_id}
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>
            }}
          />
          <TextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            name="q1"
            label="Quantity 1"
            value={q1}
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">tons</InputAdornment>
            }}
          />
          <TextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            name="am1"
            label="Amount 1"
            value={am1}
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">tons</InputAdornment>
            }}
          />
          <TextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            name="d1"
            label="Description 1"
            value={d1}
            onChange={onChange}
          />
          <Button
            className={classes.buttonMargin}
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Create
          </Button>
        </Paper>
      </form>
    </div>
  );
}
