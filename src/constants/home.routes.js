import React from 'react';

import { CreateInvoice } from "../components/inventory/Create";
import { CreateFreightInvoice } from "../components/freight/Create";
import Planets from '../components/inventory/Fetch';
import MockInvoices from '../mock/MockInvoices';
import MockFreight from '../mock/MockFreight';
import Dashboard from '../mock/Dashboard/Dashboard.jsx';

export const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Dashboard />
    },
    {
      path: "/inventory/create",
      exact: true,
      main: () => <CreateInvoice />
    },
    {
      path: "/inventory/invoices",
      exact: true,
      main: () => <Planets />
    },
    {
      path: "/mockinvoices",
      exact: true,
      main: () => <MockInvoices />
    },
    {
      path: "/freight/create",
      exact: true,
      main: () => <CreateFreightInvoice />
    },
    {
      path: "/freight/invoices",
      exact: true,
      main: () => <MockFreight />
    },
  
  ];