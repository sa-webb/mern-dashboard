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

const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: 450,
    marginLeft: 50,
    backgroundColor: "grey"
  },
  margin: {
    margin: theme.spacing(4)
  },
  textField: {
    flexBasis: 400
  }
}));

export function Create() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function handleDateChange(date) {
    setSelectedDate(date);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newInvoice = {
      name: values.name,
      date: selectedDate
    };
    axios
      .post("http://localhost:5000/invoices/add", newInvoice)
      .then(res => console.log(res.data));
    
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-adornment-name"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Name"
          value={values.name}
          onChange={handleChange("name")}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
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
          id="outlined-simple-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="With outlined TextField"
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>
          }}
        />

        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Weight"
          value={values.weight}
          onChange={handleChange("weight")}
          helperText="Full Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>
          }}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Empty Weight"
          value={values.weight}
          onChange={handleChange("weight")}
          helperText="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>
          }}
        />
        <TextField
          select
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={values.weightRange}
          onChange={handleChange("weightRange")}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className="form-group">
          <input
            type="submit"
            value="Create Invoice"
            className="btn-lg"
            style={{ color: "white", backgroundColor: "#256331" }}
          />
        </div>
      </form>
    </div>
  );
}
