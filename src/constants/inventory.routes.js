import React from 'react';

import { CreateInvoice } from '../components/inventory/Create';
import Fetch from '../components/inventory/Fetch';

export const routes = [
    {
      path: "/inventory/create",
      exact: true,
      main: () => <CreateInvoice />
    },
    {
      path: "/inventory/invoices",
      exact: true,
      main: () => <Fetch/>
    },
]