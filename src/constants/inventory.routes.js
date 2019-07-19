import React from "react";

import { CreateInvoice } from "../components/inventory/Create";
import { Overview } from '../components/inventory/Overview';
import Fetch from "../components/inventory/Fetch";


export const routes = [
  {
    path: "/inventory",
    exact: true,
    main: () => <Overview />
  },
  {
    path: "/inventory/create",
    exact: true,
    main: () => <CreateInvoice />
  },
  {
    path: "/inventory/invoices",
    exact: true,
    main: () => <Fetch />
  }
];
