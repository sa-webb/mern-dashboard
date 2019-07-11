import React from "react";
import axios from "axios";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import { Species as types } from "../../data/Species";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: 450,
    marginLeft: 40,
  },
  margin: {
    margin: theme.spacing(3),
  },
  textField: {
    flexBasis: 400,
    width: 200,
  },
  buttonMargin: {
    margin: theme.spacing(3),
    marginLeft: 80,
    width: 100
  }
}));

const initialState = {
  logger_name: '',
  full: '',
  empty: '',
  difference: '',
  pounds: '',
  tons: '',
  species: '',
  price: '',
  total: ''
}

export function CreateInvoice() {
  const classes = useStyles();

  const [
    { logger_name, full, empty, species, price },
    setState ] = React.useState(initialState);

  const clearState = () => {
    setState({ ...initialState })
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value}))
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newInvoice = {
      logger_name: logger_name,
      date: selectedDate,
      full: full,
      empty: empty,
      difference: full - empty,
      tons: Math.round(((full - empty) / 2000) * 100) / 100,
      species: species,
      price: price,
      total: Math.round(((full - empty) / 2000) * 100) / 100 * price
    };
    axios
      .post("http://localhost:5000/invoices/add", newInvoice)
      .then(clearState);
  };

  // Wrap in Paper
  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-adornment-name"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          name="logger_name"
          label="Logger Name"
          value={logger_name}
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
          label="Full Weight"
          name="full"
          value={full}
          onChange={onChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">lbs</InputAdornment>
          }}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Empty Weight"
          name="empty"
          value={empty}
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
          label="Weight"
          value={full - empty}
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
          label="Tons"
          value={Math.round(((full - empty) / 2000) * 100) / 100}
          onChange={onChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">tons</InputAdornment>
          }}
        />
        <TextField
          select
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          name="species"
          value={species}
          onChange={onChange}
          label="Species"
        >
          {types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Price"
          name="price"
          value={price}
          onChange={onChange}
        />
        <TextField
          id="outlined-adornment-name"
          className={clsx(classes.margin, classes.textField)}

          label="Total"
          value={Math.round(((full - empty) / 2000) * 100) / 100 * price}
          onChange={onChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
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
}
