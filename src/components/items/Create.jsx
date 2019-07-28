import React from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Items as items } from '../../data/Items';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
    // marginRight: 450,
    // marginLeft: 40,
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
  },
  paper: {
    width: 550
  }
}));

const initialState = {
  name: '',
  quantity: '',
  unit_price: ''
};

export function CreateItems() {
  const classes = useStyles();

  const [{ name, quantity, unit_price }, setState] = React.useState(
    initialState
  );

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const newItems = {
      name: name,
      quantity: quantity,
      unit_price: unit_price
    };
    
    axios.post('http://localhost:5000/items/add', newItems).then(clearState);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <Paper className={classes.paper}>
          <TextField
            select
            className={clsx(classes.margin, classes.textField)}
            variant='outlined'
            name='name'
            label='Item Name'
            value={name}
            onChange={onChange}
          >
          {items.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
          </TextField>

          <TextField
            id='outlined-adornment-weight'
            className={clsx(classes.margin, classes.textField)}
            variant='outlined'
            label='Quantity'
            name='quantity'
            value={quantity}
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position='end'>units</InputAdornment>
            }}
          />
          <TextField
            id='outlined-adornment-weight'
            className={clsx(classes.margin, classes.textField)}
            variant='outlined'
            label='Unit Price'
            name='unit_price'
            value={unit_price}
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
          />
          <Button
            className={classes.buttonMargin}
            variant='contained'
            size='large'
            color='primary'
            type='submit'
          >
            Create
          </Button>
        </Paper>
      </form>
    </div>
  );
}
