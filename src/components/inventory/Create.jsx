import React, { Component } from "react";
import axios from "axios";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/styles"

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

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    spacing: 2
  },
  textField: {
    flexBasis: 400
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(2)
  },
  textField: {
    flexBasis: 400
  }
}));

class CreateInvoice extends Component {
  constructor(props) {
    super(props);
    this.onChangeInvoiceName = this.onChangeInvoiceName.bind(this);
    this.onChangeInvoiceFull = this.onChangeInvoiceFull.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      full: '',
    };
  }

  onChangeInvoiceFull(e) {
    this.setState({
        full: e.target.value
    })
  }

  onChangeInvoiceName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newInvoice = {
      name: this.state.name,
      full: this.state.full,
    };
    axios
      .post("http://localhost:5000/invoices/add", newInvoice)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      full: '',
    });
  }

  render() {
    const classes = { useStyles };
    return (
      <div className={classes.root}>
        <form onSubmit={this.onSubmit}>
          <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="With outlined TextField"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
          {/* <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="With Select"
        value={values.weightRange}
        onChange={handleChange('weightRange')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField> */}
          <TextField
            id="outlined-adornment-amount"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Amount"
            value={this.state.name}
            onChange={this.onChangeInvoiceName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
          <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Weight"
        value={this.state.full}
        onChange={this.onChangeInvoiceFull}
        helperText="Weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">Lbs</InputAdornment>,
        }}
      />
          {/* <TextField
        id="outlined-adornment-password"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        type={values.showPassword ? 'text' : 'password'}
        label="Password"
        value={values.password}
        onChange={handleChange('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      /> */}
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
}

export default withStyles(styles)(CreateInvoice);