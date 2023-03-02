import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {router} from "./router"
import "./index.css"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/ui/Theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        </ThemeProvider>
      </React.Suspense>
  </React.StrictMode>
);


