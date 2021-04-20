import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { muiTheme } from '../utils/themeUtil';
import { setupStore } from './setupStore';
import Index from '../modules/index/indexContainer';
import { IConfigType } from '../types';

export default function (config: IConfigType) {
  return (
    <React.StrictMode>
      <Provider store={setupStore(config)}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Index />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}
