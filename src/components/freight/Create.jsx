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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: 450,
    marginLeft: 40
  },
  margin: {
    margin: theme.spacing(3)
  },
  textField: {
    flexBasis: 400,
    width: 200
  },
  buttonMargin: {
    margin: theme.spacing(3),
    marginLeft: 80,
    width: 100
  }
}));

const initialState = {
  invoice_number: "",
  date: "",
  vendor: "",
  customer: "",
  quantity1: "",
  description1: "",
  amount1: "",
  quantity2: "",
  description2: "",
  amount2: "",
  quantity3: "",
  description3: "",
  amount3: "",
  quantity4: "",
  description4: "",
  amount4: "",
  total: ""
};

export const CreateFreightInvoice = () => {
  const classes = useStyles();
  const [
    {
      invoice_number,
      date,
      vendor,
      customer,
      quantity1,
      description1,
      amount1,
      quantity2,
      description2,
      amount2,
      quantity3,
      description3,
      amount3,
      quantity4,
      description4,
      amount4,
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
    const newFreightInvoice = {
      invoice_number: invoice_number,
      date: date,
      vendor: vendor,
      customer: customer,
      quantity1: quantity1,
      description1: description1,
      amount1: amount1,
      quantity2: quantity2,
      description2: description2,
      amount2: amount2,
      quantity3: quantity3,
      description3: description3,
      amount3: amount3,
      quantity4: quantity4,
      description4: description4,
      amount4: amount4,
      total: total
    };
    axios
      .post("http://localhost:5000/freight/add", newFreightInvoice)
      .then(clearState);
  };
  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-adornment-name"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          name="logger_name"
          label="Logger Name"
          value={invoice_number}
          onChange={onChange}
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
          label="Vendor"
          name="full"
          value={vendor}
          onChange={onChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">lbs</InputAdornment>
          }}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Customer"
          name="empty"
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
          name="difference"
          label="Quantity 1"
          value={quantity1}
          onChange={onChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">lbs</InputAdornment>
          }}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          name="tons"
          label="Description1"
          value={description1}
          onChange={onChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">tons</InputAdornment>
          }}
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
      </form>
    </div>
  );
};
