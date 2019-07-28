import React from 'react';

import { CreateInvoice } from "../components/inventory/Create";
import { CreateItems } from "../components/items/Create";
import { Steps } from "../components/freight/Stepper";
import Planets from '../components/inventory/Fetch';
import MockInvoices from '../mock/MockInvoices';
import Overview from '../mock/MockOverview.jsx';
import Summary from '../components/inventory/summary/Summary';
import MockProduction from '../mock/MockProduction';
import { Mileage } from '../components/freight/Mileage';
import Loads from '../components/freight/Table';
import Dashboard from '../components/dashboard/Dashboard';

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
      path: "/items/add",
      exact: true,
      main: () => <CreateItems />
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
      path: "/freight/loads",
      exact: true,
      main: () => <Loads />
    },
    {
      path: "/freight/mileage",
      exact: true,
      main: () => <Mileage />
    },
  
  ];