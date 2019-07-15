import React from 'react';

import { CreateInvoice } from "../components/inventory/Create";
import { Steps } from "../components/freight/Stepper";
import Planets from '../components/inventory/Fetch';
import MockInvoices from '../mock/MockInvoices';
import MockFreight from '../mock/MockFreight';
import Dashboard from '../mock/Dashboard/Dashboard.jsx';
import Overview from '../mock/MockOverview.jsx';
import Summary from '../components/inventory/summary/Summary';
import MockProduction from '../mock/MockProduction';

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
      path: "/inventory/overview",
      exact: true,
      main: () => <Overview />
    },
    {
      path: "/inventory/summary",
      exact: true,
      main: () => <Summary />
    },
    {
      path: "/inventory/production",
      exact: true,
      main: () => <MockProduction />
    },
    {
      path: "/mockinvoices",
      exact: true,
      main: () => <MockInvoices />
    },
    {
      path: "/freight/create",
      exact: true,
      main: () => <Steps />
    },
    {
      path: "/freight/invoices",
      exact: true,
      main: () => <MockFreight />
    },
  
  ];